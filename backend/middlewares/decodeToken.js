const crypto = require('crypto');

const secretKey = process.env.SECRET_KEY; // Must be 32 bytes for AES-256
const algorithm = 'aes-256-cbc'; // Using AES-256-CBC
const iv = crypto.randomBytes(16); // 16-byte Initialization Vector

// Encryption Function
const encodeToken = (data) => {
    const stringifiedData = JSON.stringify(data);
    const key = crypto.createHash('sha256').update(secretKey).digest(); // 32-byte key

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(stringifiedData, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    const result = {
        iv: iv.toString('base64'),
        data: encrypted,
    };

    return Buffer.from(JSON.stringify(result)).toString('base64');
};

module.exports = { encodeToken }