const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

const register = async (username, password) => {
    // Check if user exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
        throw { code: 409, message: 'Username already exists' };
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        username,
        password: hashedPassword
    });

    return {
        user_id: user.user_id,
        username: user.username
    };
};

const login = async (username, password) => {
    // Find user
    const user = await User.findOne({ where: { username } });
    if (!user) {
        throw { code: 401, message: 'Invalid username or password' };
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw { code: 401, message: 'Invalid username or password' };
    }

    // Generate token
    const payload = {
        user_id: user.user_id,
        username: user.username
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });

    return {
        user_id: user.user_id,
        username: user.username,
        token
    };
};

module.exports = {
    register,
    login
};
