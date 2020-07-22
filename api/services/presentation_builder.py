import io
from helpers import ppt


def build(filename, content):
    presentation_path = ppt.create(filename, content)

    with open(presentation_path, 'rb') as f:
        return io.BytesIO(f.read())
