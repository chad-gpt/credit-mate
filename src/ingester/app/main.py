import os
from fastapi.exceptions import RequestValidationError
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


app = FastAPI(
    title="Ingester",
)
router = APIRouter(prefix="/api/v1")
gmaps = googlemaps.Client(key=os.environ.get("MAPS_API_KEY"))

@router.post("/places")
async def places_nearby(place: Place):
    response = dict()
    if place.text:
        geocode_result = gmaps.geocode(place.text)
        location = geocode_result[0]['geometry']['location']
    elif place.lat and place.long:
        location = (place.lat, place.long)
    else:
        raise HTTPException(detail="Provide text or both lat and longs", status_code=HTTP_422_UNPROCESSABLE_ENTITY)

    params = {
        'location': location,
        'radius': place.radius,
        'type': place.types
    }
    response = gmaps.places_nearby(**params)
    return response

app.include_router(router)