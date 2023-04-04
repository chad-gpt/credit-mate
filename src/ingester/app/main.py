import os
from fastapi import FastAPI
from app.models import Place
import googlemaps


app = FastAPI(
    title="Ingester",
    prefix="/api/v1"
)
gmaps = googlemaps.Client(key=os.environ.get("MAPS_API_KEY"))

@app.get("/places")
async def places_nearby(place: Place):
    response = dict()
    if place.text:
        geocode_result = gmaps.geocode(place.text)
        location = geocode_result[0]['geometry']['location']
    else:
        location = (place.lat, place.long)

    params = {
        'location': location,
        'radius': place.radius,
        'type': place.types
    }
    response = gmaps.places_nearby(**params)
    return response
