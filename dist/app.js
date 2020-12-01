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
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const videos_routes_1 = __importDefault(require("./routes/videos.routes"));
const app = express_1.default();
(() => __awaiter(void 0, void 0, void 0, function* () {
    // Port
    yield app.set('port', process.env.PORT || 4000);
    // Express config
    yield app.use(morgan_1.default('dev'));
    yield app.use(cors_1.default());
    yield app.use(express_1.default.json());
    yield app.use(express_1.default.urlencoded({ extended: false }));
    // Route
    yield app.use(videos_routes_1.default);
}))();
exports.default = app;
