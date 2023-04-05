from typing import Union

from argon2 import PasswordHasher
from fastapi import FastAPI
from fastapi import HTTPException
from fastapi import Request
from fastapi import Response
from fastapi import status

from .db import db
from .services import createUser
from .services import get_user_by_email
from .types import UserCreationForm
from .types import UserEmailPasswordForm

ph = PasswordHasher()
app = FastAPI()


@app.get("/api")
def returnHello():
    return "Hello world"
    # return {"hello":"World"}

@app.post('/api/login', status_code=status.HTTP_200_OK)
async def login(form_data: UserEmailPasswordForm):
    try:
        user_in_db = get_user_by_email(form_data.username)

        if not user_in_db:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail='User not found with this username.',
            )

        verified = ph.verify(form_data.password, user_in_db.hashed_password)
        if not verified:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='Password is wrong.',
            )

        return user_in_db
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Password is wrong.',
        )


@app.post("/api/signup",status_code=status.HTTP_201_CREATED)
async def signup(
    form_data:UserCreationForm
):
    try:
        user= get_user_by_email(form_data.email)
        if user is not None:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Conflict User already exists"
            )
        form_data.password=ph.hash(form_data.password)
        user=createUser(form_data)
        p
        del user["password"]
        return user
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Password is wrong.',
        )
