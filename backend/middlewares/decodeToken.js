require('dotenv').config();
const crypto = require('crypto');
const secretKey = process.env.SECRET_KEY;
console.log("secretKey", secretKey) // Must be 32 bytes for AES-256
const algorithm = 'aes-256-cbc'; // Using AES-256-CBC

// Encryption Function
const encodeToken = (token) => {
    const iv = crypto.randomBytes(16); // new IV each time
    const stringifiedData = JSON.stringify(token);
    const key = crypto.createHash('sha256').update(secretKey).digest(); // 32-byte key

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(stringifiedData, 'utf8', 'base64');
    encrypted += cipher.final('base64');
     const result = {
        iv: iv.toString('base64'),
        token: encrypted,
    };
   console.log(result)
    return result;
};

module.exports = { encodeToken }