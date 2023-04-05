from typing import Union

import os
from fastapi import FastAPI

app = FastAPI()



@app.get("/login")
def read_root():
    return {"Hello": f"World{os.getenv('SECRET_KEY')}"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}