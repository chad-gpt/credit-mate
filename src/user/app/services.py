
from .types import User
from .db import db
from fastapi import  HTTPException,status
# to be completed
UserCollection=db['users']

def createUser(user:User):
    # print(User)
    try:
        created_user=UserCollection.insert_one(user)
        print(created_user)
        return created_user
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Password is wrong.',
        )

# to be completed
def get_user_by_email(user_email):
   return UserCollection.find_one({"email":user_email})
