"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const videosSchema = new mongoose_1.Schema({
    title: {
        type: 'string',
        required: true,
        trim: true,
    },
    description: {
        type: 'string',
        required: false,
        trim: true,
    },
    url: {
        type: 'string',
        required: true,
        trim: true,
    },
}, { timestamps: true, versionKey: false });
exports.default = mongoose_1.model('Videos', videosSchema);
