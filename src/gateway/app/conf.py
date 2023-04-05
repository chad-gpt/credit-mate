import os

from pydantic import BaseSettings


class Settings(BaseSettings):
    ACCESS_TOKEN_DEFAULT_EXPIRE_MINUTES: int = 360
    USER_SERVICE_URL: str = os.environ.get('USER_SERVICE_URL', "http://localhost:8001")
    INGESTER_SERVICE_URL: str = os.environ.get('INGESTER_SERVICE_URL', "http://localhost:8002")
    GATEWAY_TIMEOUT: int = 59


settings = Settings()
