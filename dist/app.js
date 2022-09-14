"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes"));
// import resizeImage from './middlewares/sharp';
var server = (0, express_1.default)();
server.use((0, morgan_1.default)('tiny'));
server.use(routes_1.default);
// server.use(resizeImage);
// server.get('/', (req, res) => {
//   res.send('yes it works perfectly!');
// });
var port = 3001;
server.listen(port, function () {
    console.log("server currently listening on port ".concat(port));
});
exports.default = server;
