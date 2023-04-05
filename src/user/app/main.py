from typing import Union
from .services import get_user_by_email,verify_password
from .types import UserEmailPasswordForm

from fastapi import FastAPI, HTTPException, status, Request, Response 

app = FastAPI()


@app.get("/api")
def returnHello():
    return {"hello":"World"}

@app.post('/api/login', status_code=status.HTTP_200_CREATED)
async def login(form_data: UserEmailPasswordForm):
    user_in_db = get_user_by_email(form_data.username)

    if not user_in_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail='User not found with this username.',
        )

    verified = verify_password(form_data.password, user_in_db.hashed_password)
    if not verified:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Password is wrong.',
        )
        
    return user_in_db


@app.post("/api/signup",status_code=status.HTTP_201_CREATED)
async def signup(
    form_data:UserEmailPasswordForm
):
    user= get_user_by_email(form_data.email)
    
    if user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Conflict User already exists"
        )
    
    
@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}