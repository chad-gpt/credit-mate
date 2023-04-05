<<<<<<< HEAD
from .conf import settings
from .core import route
=======
from conf import settings
from core import route
>>>>>>> bba718c (Added gateway)
from fastapi import FastAPI
from fastapi import Request
from fastapi import Response
from fastapi import status

from .types.users import EmailPasswordForm
<<<<<<< HEAD

app = FastAPI()


@route(
    request_method=app.post,
    path="/api/login",
    status_code=status.HTTP_201_CREATED,
    payload_key="username_password",
    service_url=settings.USERS_SERVICE_URL,
    authentication_required=False,
    post_processing_func="post_processing.access_token_generate_handler",
    response_model="app.types.users.LoginResponse",
)
async def login(
    username_password: EmailPasswordForm, request: Request, response: Response
):
    pass


@route(
    request_method=app.get,
    path="/api/userping",
    status_code=status.HTTP_200_OK,
    payload_key="data",
    service_url=settings.USER_SERVICE_URL,
    authentication_required=False,
    post_processing_func=None,
    response_model='app.types.users.Hello',
)
async def userping(request: Request, response: Response):
    pass

@route(
    request_method=app.get,
    path="/api/ingesterping",
    status_code=status.HTTP_200_OK,
    payload_key="data",
    service_url=settings.INGESTER_SERVICE_URL,
    authentication_required=False,
    post_processing_func=None,
    response_model='app.types.users.Hello',
)
async def ingesterping(request: Request, response: Response):
    pass

=======
app = FastAPI()

@route(
    request_method=app.post,
    path='/api/login',
    status_code=status.HTTP_201_CREATED,
    payload_key='username_password',
    service_url=settings.USERS_SERVICE_URL,
    authentication_required=False,
    post_processing_func='post_processing.access_token_generate_handler',
    response_model='types.users.LoginResponse'
)
async def login(username_password: EmailPasswordForm,
                request: Request, response: Response):
    pass
>>>>>>> bba718c (Added gateway)
