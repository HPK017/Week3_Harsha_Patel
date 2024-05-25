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
const nodemailer_1 = __importDefault(require("nodemailer"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/nodemailer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const weatherReport = req.body;
    try {
        let transport = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: "parelharsh0250@gmail.com",
                pass: "mudnnwhimjqygnhf"
            }
        });
        let tableRows = '';
        for (const report of weatherReport) {
            const { city, country, date, weather } = report;
            tableRows += ` <tr>
        <td>${city}</td>
        <td>${country}</td>
        <td>${date}</td>
        <td>${weather}</td>
    </tr>`;
            let info = yield transport.sendMail({
                from: {
                    name: "Harsha Patel Kharvi",
                    address: "parelharsh0250@gmail.com"
                },
                to: "k20harsha017@gmail.com",
                subject: "Weather Reports",
                text: "this is a testing",
                html: `<table border=1>
                    <tr>
                        <th>City</th>
                        <th>Country</th>
                        <th>Date</th>
                        <th>Weather</th>
                    </tr>
                   ${tableRows}
                </table>`
            });
            console.log(info.messageId);
            res.send(info);
        }
    }
    catch (err) {
        console.log(err);
    }
}));
app.listen(8000, () => {
    console.log("We are comfertable with NodeJS");
});
//# sourceMappingURL=app.js.map