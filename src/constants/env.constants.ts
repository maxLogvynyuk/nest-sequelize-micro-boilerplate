require('dotenv').config();

export const ENV = {
  POSTGRES_HOST: 'POSTGRES_HOST',
  POSTGRES_PORT: 'POSTGRES_PORT',
  POSTGRES_USER: 'POSTGRES_USER',
  POSTGRES_PASSWORD: 'POSTGRES_PASSWORD',
  POSTGRES_DB: 'POSTGRES_DB',
  PORT: 'PORT',
  JWT_SECRET: 'JWT_SECRET',
  JWT_EXPIRATION_TIME: 'JWT_EXPIRATION_TIME',
  JWT_ACCESS_TOKEN_SECRET: 'JWT_ACCESS_TOKEN_SECRET',
  JWT_ACCESS_TOKEN_EXPIRATION_TIME: 'JWT_ACCESS_TOKEN_EXPIRATION_TIME',
  JWT_REFRESH_TOKEN_SECRET: 'JWT_REFRESH_TOKEN_SECRET',
  JWT_REFRESH_TOKEN_EXPIRATION_TIME: 'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
  RUN_MIGRATIONS: 'RUN_MIGRATIONS',
};