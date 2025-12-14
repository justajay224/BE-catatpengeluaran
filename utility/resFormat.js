const success = (res, data = null, message = 'Success', code = 200, meta = null) => {
    const response = {
        success: true,
        message,
        data
    };
    if (meta) response.meta = meta;
    return res.status(code).json(response);
};

const error = (res, message = 'Error', code = 500, errors = null) => {
    const response = {
        success: false,
        message
    };
    if (errors) response.errors = errors;
    return res.status(code).json(response);
};

const created = (res, data = null, message = 'Created successfully') => {
    return success(res, data, message, 201);
};

const badRequest = (res, message = 'Bad request', errors = null) => {
    return error(res, message, 400, errors);
};

const unauthorized = (res, message = 'Unauthorized') => {
    return error(res, message, 401);
};

const notFound = (res, message = 'Not found') => {
    return error(res, message, 404);
};

const conflict = (res, message = 'Conflict') => {
    return error(res, message, 409);
};

module.exports = {
    success,
    error,
    created,
    badRequest,
    unauthorized,
    notFound,
    conflict
};
