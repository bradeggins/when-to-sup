"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var getData_1 = __importDefault(require("./getData"));
var app = express_1.default();
app.set("port", process.env.PORT || 5000);
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.get("/", function (req, res) {
    res.send("Hello World Express + TypeScript + Linting");
});
app.use('/api/v1', getData_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map