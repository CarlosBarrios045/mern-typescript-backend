"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideo = exports.updateVideo = exports.createVideo = exports.getVideo = exports.getVideos = void 0;
// Models
const Videos_1 = __importDefault(require("../models/Videos"));
// Get Videos
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield Videos_1.default.find();
        return res.json(videos);
    }
    catch (error) {
        return res.status(204).json(error);
    }
});
exports.getVideos = getVideos;
// Get Video
const getVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videoFound = yield Videos_1.default.findById(req.params.id);
        if (!videoFound)
            res.status(204).json();
        return res.json(videoFound);
    }
    catch (error) {
        return res.status(204).json(error);
    }
});
exports.getVideo = getVideo;
// Create Video
const createVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const video = new Videos_1.default(req.body);
        const savedVideo = yield video.save();
        return res.json(savedVideo);
    }
    catch (error) {
        return res.status(204).json(error);
    }
});
exports.createVideo = createVideo;
// Update Video
const updateVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videoUpdate = yield Videos_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!videoUpdate)
            return res.status(204).json();
        return res.json(videoUpdate);
    }
    catch (error) {
        return res.status(204).json(error);
    }
});
exports.updateVideo = updateVideo;
// Delete Video
const deleteVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videoFound = yield Videos_1.default.findById(req.params.id);
        if (!videoFound)
            res.status(204).json();
        yield Videos_1.default.findByIdAndDelete(videoFound);
        return res.json('Video deleted');
    }
    catch (error) {
        return res.status(204).json(error);
    }
});
exports.deleteVideo = deleteVideo;
