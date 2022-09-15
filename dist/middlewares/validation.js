"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationCheckErrors = exports.validateResizeValues = void 0;
var express_validator_1 = require("express-validator");
exports.validateResizeValues = [
    (0, express_validator_1.query)('width').isNumeric().withMessage('width must be a number'),
    (0, express_validator_1.query)('height').isNumeric().withMessage('height must be a number'),
];
var validationCheckErrors = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
exports.validationCheckErrors = validationCheckErrors;
