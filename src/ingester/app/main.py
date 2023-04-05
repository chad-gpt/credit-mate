import os
from fastapi.exceptions import RequestValidationError
from datetime import datetime
from fastapi.responses import JSONResponse
from starlette.status import HTTP_422_UNPROCESSABLE_ENTITY
from fastapi import FastAPI, APIRouter, HTTPException, Request
from app.models import Place
import http
from fastapi import FastAPI, Request, status
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
import googlemaps
from pymongo import MongoClient


app = FastAPI()
gmaps = googlemaps.Client(key=os.getenv("MAPS_API_KEY"))
client = MongoClient(os.getenv("MONGO_URL"))
db = client["test"]
collection = db["places"]


@app.post("/api/places")
async def places_nearby(place: Place):
    response = dict()
    if place.text:
        geocode_result = gmaps.geocode(place.text)
        location = geocode_result[0]["geometry"]["location"]
    elif place.lat and place.long:
        location = (place.lat, place.long)
    else:
        raise HTTPException(
            detail="Provide text or both latitude and longitude",
            status_code=HTTP_422_UNPROCESSABLE_ENTITY,
        )

    params = {"location": location, "radius": place.radius, "type": place.types}
    response = gmaps.places_nearby(**params)

    now = datetime.utcnow()
    for res in response["results"]:
        filter = {"_id": res["place_id"]}
        document = collection.find_one(filter)
        place_info = res
        place_info["_id"] = place_info["place_id"]
        place_info["created_at"] = now
        place_info["updated_at"] = now
        if document:
            result = collection.update_one(
                {"_id": place_info["place_id"]}, {"$set": place_info}
            )
        else:
            result = collection.insert_one(place_info)

    return response
