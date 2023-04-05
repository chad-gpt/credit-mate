from pydantic import BaseModel
<<<<<<< HEAD


class EmailPasswordForm(BaseModel):
    email: str
    password: str


class LoginResponse(BaseModel):
    access_token: str
    token_type: str


class Hello(BaseModel):
    hello: str
=======
class EmailPasswordForm(BaseModel):
    email: str
    password: str
class LoginResponse(BaseModel):
    access_token: str
    token_type: str
>>>>>>> bba718c (Added gateway)
