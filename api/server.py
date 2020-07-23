from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from services import presentation_builder
from helpers.errors import DomainError, BadRequest, MissingData
from helpers.hex_rgb import convert

PPTX_MIME = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'


app = Flask(__name__)
CORS(app)


@app.errorhandler(DomainError)
def handle_errors(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response


def assert_params(request_data, params):
    for param in params:
        if (not param in request_data):
            raise MissingData('{} field is missing'.format(param))


@app.route('/generate', methods=['POST'])
def generate():
    request_data = request.get_json()

    if (not request_data):
        raise MissingData()

    assert_params(request_data, ['filename', 'content'])

    filename = request_data['filename']
    content = request_data['content']
    background_color = convert(request_data['backgroundColor'])
    text_color = convert(request_data['textColor'])

    try:
        presentation_stream = presentation_builder.build(
            filename, content, background_color, text_color)
        return send_file(presentation_stream, attachment_filename=filename,
                         mimetype=PPTX_MIME)
    except Exception as err:
        raise BadRequest(err)
