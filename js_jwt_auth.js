import jwt from 'jsonwebtoken';

const secretKey = 'your_secret_key_here';
const refreshSecretKey = 'your_refresh_secret_key_here';

export function generateAccessToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

export function generateRefreshToken(payload) {
  return jwt.sign(payload, refreshSecretKey, { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
}

export function verifyRefreshToken(token) {
  try {
    return jwt.verify(token, refreshSecretKey);
  } catch (error) {
    return null;
  }
}
