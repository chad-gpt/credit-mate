from typing import Union

import os
from fastapi import FastAPI
from app.auth import firebase_middleware
from fastapi import FastAPI, APIRouter, HTTPException, Request, Depends
import firebase_admin
from firebase_admin import credentials
from app.auth import verify_firebase_token

from fastapi import FastAPI
from users import router as user_router
from products import router as product_router

app = FastAPI()

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

app.include_router(user_router)
app.include_router(product_router)

