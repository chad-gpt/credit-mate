from fastapi import FastAPI
import os

app = FastAPI()


@app.get("/")
async def root():
    return {"message": os.getenv("SECRET_KEY")}