"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize_1 = __importDefault(require("../../controllers/resize"));
var resize = express_1.default.Router();
resize.get('/resize', function (req, res) {
    (0, resize_1.default)(req.query.filename, Number(req.query.width), Number(req.query.height));
    res.send('this is from the resize api');
});
exports.default = resize;
