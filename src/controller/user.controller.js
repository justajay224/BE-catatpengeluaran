const userService = require('../service/user.service');
const res = require('../../utility/resFormat');

const register = async (req, reply) => {
    try {
        const { username, password } = req.body;

        // Validation
        if (!username || !password) {
            return res.badRequest(reply, 'Username and password are required');
        }

        if (username.length < 3) {
            return res.badRequest(reply, 'Username must be at least 3 characters');
        }

        if (password.length < 6) {
            return res.badRequest(reply, 'Password must be at least 6 characters');
        }

        const user = await userService.register(username, password);
        return res.created(reply, user, 'User registered successfully');
    } catch (err) {
        if (err.code === 409) {
            return res.conflict(reply, err.message);
        }
        console.error('Register error:', err);
        return res.error(reply, 'Internal server error');
    }
};

const login = async (req, reply) => {
    try {
        const { username, password } = req.body;

        // Validation
        if (!username || !password) {
            return res.badRequest(reply, 'Username and password are required');
        }

        const result = await userService.login(username, password);
        return res.success(reply, result, 'Login successful');
    } catch (err) {
        if (err.code === 401) {
            return res.unauthorized(reply, err.message);
        }
        console.error('Login error:', err);
        return res.error(reply, 'Internal server error');
    }
};

module.exports = {
    register,
    login
};
