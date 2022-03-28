from fastapi import APIRouter, File, UploadFile, Form

# Improrting the controllers
from ..controllers.gram_schmidt_process_controller import GramSchmidtProcessController

# Importing the needed classes
from uploader.file_uploader import FileUploader



router = APIRouter(
    prefix='/gram_schmidt_process',
    tags=['Gram Schmidt Process']
)

@router.post('/system_resolution', status_code=200)
async def gram_schmidt_process(file: UploadFile = File(...),  sep: str = Form(...)):
    # Uplaod the file
    file_uploader = FileUploader(file)
    await file_uploader.upload_file()

    # Run the gram schmidt process
    process_output = GramSchmidtProcessController.run_gram_schmidt_process(file_uploader.uploaded_filename, sep)
    print("##############")
    print(process_output)
    print("##############")

    # Clean tmp files
    # file_uploader.delete_file()

    return process_output
