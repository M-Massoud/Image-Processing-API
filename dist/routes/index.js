"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import API routes
var resize_1 = __importDefault(require("./api/resize"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    res.send('welcome to home page!');
});
router.use(resize_1.default);
exports.default = router;
