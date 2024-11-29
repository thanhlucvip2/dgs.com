import 'dotenv/config';

export const PORT = process.env.PORT || 5000;

export const CIPHER_KEY = process.env.CIPHER_KEY;
export const CIPHER_IV = process.env.CIPHER_IV;

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const JWT_EXPIRED_TIME_TOKEN = process.env.JWT_EXPIRED_TIME_TOKEN;

export const DB_NAME = process.env.DB_NAME;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = +process.env.DB_PORT;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_LOGGING = process.env.DB_LOGGING === 'true' ? true : false;
export const DB_SYNC = process.env.DB_SYNC === 'true' ? true : false;