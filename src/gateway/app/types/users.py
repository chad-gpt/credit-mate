from pydantic import BaseModel


class EmailPasswordForm(BaseModel):
    email: str
    password: str


class LoginResponse(BaseModel):
    access_token: str
    token_type: str


class Hello(BaseModel):
    hello: str
