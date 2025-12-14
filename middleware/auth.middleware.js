const jwt = require('jsonwebtoken');
const res = require('../utility/resFormat');

const verifyToken = (req, reply, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.unauthorized(reply, 'No token provided');
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.unauthorized(reply, 'Token format invalid');
    }

    const token = parts[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.unauthorized(reply, 'Invalid or expired token');
        }
        req.user = decoded;
        next();
    });
};

module.exports = {
    verifyToken
};
