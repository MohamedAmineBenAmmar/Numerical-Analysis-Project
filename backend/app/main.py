from fastapi import FastAPI
from modules.gram_schmidt_process.routers import gram_schmidt_process_routes

app = FastAPI()

# Registering routes
app.include_router(gram_schmidt_process_routes.router)