import io
from helpers import pptx


def build(filename, content):
    presentation_path = pptx.create(filename, content)

    with open(presentation_path, 'rb') as f:
        return io.BytesIO(f.read())
