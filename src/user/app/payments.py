
from fastapi import APIRouter, Depends
from app.auth import verify_firebase_token
from fastapi import FastAPI, Request
import os
import stripe
from pymongo import MongoClient

router = APIRouter(prefix="/api")
stripe.api_key = "YOUR_API_KEY"

@router.get('/private')
def private_route(user=Depends(verify_firebase_token)):
    return {'message': f'Hello {user.email}, you are authorized to access this route'}

@router.get("/public")
def public():
    return {"Hello": "World"}

@router.post("/charge")
async def charge(request: Request):
    data = await request.json()
    amount = data['amount']
    currency = data['currency']
    description = data['description']

    try:
        payment_intent = stripe.PaymentIntent.create(
            amount=amount,
            currency=currency,
            description=description
        )

        return {"client_secret": payment_intent.client_secret}
    except Exception as e:
        return {"error": str(e)}

@router.post("/confirm")
async def confirm(request: Request):
    data = await request.json()
    payment_intent_id = data['payment_intent_id']

    try:
        payment_intent = stripe.PaymentIntent.retrieve(payment_intent_id)

        if payment_intent.status == 'succeeded':
            client = MongoClient(os.getenv("MONGO_URL"))
            db = client['defaultdb']
            collection = db['payments']

            payment_info = {
                'payment_intent_id': payment_intent_id,
                'status': payment_intent.status,
                'amount': payment_intent.amount,
                'currency': payment_intent.currency,
                'description': payment_intent.description,
            }

            result = collection.insert_one(payment_info)

        return {"status": payment_intent.status}
    except Exception as e:
        return {"error": str(e)}
