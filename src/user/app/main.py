from typing import Union

import os
from fastapi import FastAPI
from fastapi import FastAPI, APIRouter, HTTPException, Request, Depends
import firebase_admin
from firebase_admin import credentials
from app.auth import verify_firebase_token
from app.payments import router as payment_router

from fastapi import FastAPI

app = FastAPI()

firebase_config = {
    "projectId": os.getenv("GOOGLE_CLOUD_PROJECT"),
    "private_key": os.getenv("FIREBASE_PRIVATE_KEY").replace("\\n", "\n"),
    "client_email": os.getenv("FIREBASE_CLIENT_EMAIL"),
    "token_uri": os.getenv("FIREBASE_TOKEN_URI"),
    "type": "service_account",
}

cred = credentials.Certificate(firebase_config)
firebase_admin.initialize_app(cred)


@app.get("/api/hello")
def hello():
    return {"hello": "world"}


app.include_router(payment_router)
