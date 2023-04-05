from firebase_admin import auth
from fastapi import Depends, HTTPException, status

def verify_firebase_token(token: str = Depends(auth.verify_id_token)):
    user = auth.get_user(token['uid'])
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Unauthorized user'
        )
    return user
