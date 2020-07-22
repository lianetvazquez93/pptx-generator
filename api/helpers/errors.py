from flask import jsonify


class DomainError(Exception):
    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv


class MissingData(DomainError):
    def __init__(self, message="Missing data", status_code=422, payload=None):
        DomainError.__init__(self, message, status_code, payload)


class BadRequest(DomainError):
    def __init__(self, message="Bad request", status_code=400, payload=None):
        DomainError.__init__(self, message, status_code, payload)
