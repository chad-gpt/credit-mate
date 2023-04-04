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
    
    @validator('lat', 'long', 'text', pre=True)
    def check_coordinates_or_text(cls, v, values):
        lat = values.get('lat')
        long = values.get('long')
        text = values.get('text')
        import pdb; pdb.set_trace()
        
        if lat is not None and long is not None and (lat == '' or long == ''):
            raise ValueError('Both lat and long must be provided')
        if text is not None and text != '' and (lat is not None or long is not None):
            raise ValueError('Either provide lat and long or text, not both')
        if text is None and (lat is None or long is None):
            raise ValueError('Either provide both lat and long, or text')
        return v
