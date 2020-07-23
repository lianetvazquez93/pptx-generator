import io
from helpers import ppt


def build(filename, content, background_color, text_color):
    try:
        presentation_path = ppt.create(
        filename, content, background_color, text_color)
    except Exception as err:
        print(err)
        raise err

    with open(presentation_path, 'rb') as f:
        return io.BytesIO(f.read())
