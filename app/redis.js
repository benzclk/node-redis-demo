/* eslint-disable consistent-return */
import Redis from 'ioredis';

let setting = {};

const client = new Redis({ host: 'localhost' });
export default client;
