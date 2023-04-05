from pydantic import BaseModel, validator
from typing import Optional, List

class Place(BaseModel):
    lat: Optional[float]
    long: Optional[float]
    text: Optional[str]
    radius: float
    types: Optional[List[str]] = [
                "department_store",
                "point_of_interest",
                "store",
                "establishment"
            ]
    
    @validator('lat', 'long', 'radius')
    def convert_to_float(cls, v):
        if v is not None:
            return float(v)
    
