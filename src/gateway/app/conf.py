import os

from pydantic import BaseSettings


class Settings(BaseSettings):
    ACCESS_TOKEN_DEFAULT_EXPIRE_MINUTES: int = 360
<<<<<<< HEAD
    USER_SERVICE_URL: str = os.environ.get('USER_SERVICE_URL', "http://localhost:8001")
    INGESTER_SERVICE_URL: str = os.environ.get('INGESTER_SERVICE_URL', "http://localhost:8002")
=======
    USERS_SERVICE_URL: str = os.environ.get('USERS_SERVICE_URL')
>>>>>>> bba718c (Added gateway)
    GATEWAY_TIMEOUT: int = 59


settings = Settings()
