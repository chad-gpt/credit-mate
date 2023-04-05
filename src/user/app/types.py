from pydantic import BaseModel

class User(BaseModel):
    firstName:str
    lastName:str
    email:str
    password:str
    
class UserCreationForm(BaseModel):
    firstName:str
    lastName:str
    email:str
    password:str

class UserEmailPasswordForm(BaseModel):
    email:str
    password:str