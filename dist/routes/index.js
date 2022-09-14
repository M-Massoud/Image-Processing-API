"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import API routes
var teachers_1 = __importDefault(require("./api/teachers"));
var resize_1 = __importDefault(require("./api/resize"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    res.send('yes it works perfectly from our routes folder!');
});
router.use(teachers_1.default);
router.use(resize_1.default);
exports.default = router;
