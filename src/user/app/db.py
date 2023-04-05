import os

from pymongo import MongoClient
DB_URL = os.getenv("MONGO_URL")
client = MongoClient(DB_URL)
db = client['defaultdb']
