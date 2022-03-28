from fastapi import UploadFile
from pathlib import Path
import uuid

class FileUploader():
    def __init__(self, file: UploadFile) -> None:
        self.file = file
        self.uploaded_filename = None

    async def upload_file(self):
        id = uuid.uuid4()
       
        self.uploaded_filename = "./uploads/" + str(id) + '_' + self.file.filename
        contents =  await self.file.read()       
        f = open(self.uploaded_filename, "wb")
        f.write(contents)
        f.close()

    def delete_file(self):
        file_to_remove = Path(self.uploaded_filename)
        file_to_remove.unlink()