from pymongo import MongoClient 
import os
DB_URL = os.getenv("MONGO_URL")
client = MongoClient(DB_URL)
db = client['defaultdb']
