"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.default = {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'mern-typescript',
    MONGO_USER: process.env.MONGO_USER || '',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || '',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
};
