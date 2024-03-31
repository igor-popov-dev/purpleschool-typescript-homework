"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
var HairColor;
(function (HairColor) {
    HairColor["Black"] = "Black";
    HairColor["Blond"] = "Blond";
    HairColor["Brown"] = "Brown";
    HairColor["Chestnut"] = "Chestnut";
    HairColor["Auburn"] = "Auburn";
})(HairColor || (HairColor = {}));
var HairType;
(function (HairType) {
    HairType["Strands"] = "Strands";
    HairType["Curly"] = "Curly";
    HairType["VeryCurly"] = "Very curly";
    HairType["Straight"] = "Straight";
    HairType["Wavy"] = "Wavy";
})(HairType || (HairType = {}));
var CardType;
(function (CardType) {
    CardType["maestro"] = "maestro";
    CardType["mastercard"] = "mastercard";
    CardType["jcb"] = "jcb";
    CardType["visaElectron"] = "visa-electron";
    CardType["americanexpress"] = "americanexpress";
    CardType["diners"] = "diners-club-carte-blanche";
    CardType["bankcard"] = "bankcard";
    CardType["instapayment"] = "instapayment";
    CardType["switch"] = "switch";
    CardType["solo"] = "solo";
})(CardType || (CardType = {}));
var CardCurrency;
(function (CardCurrency) {
    CardCurrency["Peso"] = "Peso";
    CardCurrency["Ruble"] = "Ruble";
    CardCurrency["Yuan"] = "Yuan Renminbi";
    CardCurrency["Euro"] = "Euro";
    CardCurrency["Rupiah"] = "Rupiah";
    CardCurrency["Ringgit"] = "Ringgit";
    CardCurrency["Rial"] = "Rial";
    CardCurrency["Hryvnia"] = "Hryvnia";
    CardCurrency["Dollar"] = "Dollar";
    CardCurrency["Rupee"] = "Rupee";
    CardCurrency["Koruna"] = "Koruna";
    CardCurrency["Real"] = "Real";
    CardCurrency["Yen"] = "Yen";
    CardCurrency["Zloty"] = "Zloty";
})(CardCurrency || (CardCurrency = {}));
var Department;
(function (Department) {
    Department["Marketing"] = "Marketing";
    Department["Services"] = "Services";
    Department["BusinessDevelopment"] = "Business Development";
    Department["Support"] = "Support";
    Department["Accounting"] = "Accounting";
    Department["ProductManagement"] = "Product Management";
    Department["HumanResources"] = "Human Resources";
    Department["ResearchAndDevelopment"] = "Research and Development";
    Department["Sales"] = "Sales";
    Department["Legal"] = "Legal";
    Department["Engineering"] = "Engineering";
})(Department || (Department = {}));
var CoinType;
(function (CoinType) {
    CoinType["Bitcoin"] = "Bitcoin";
})(CoinType || (CoinType = {}));
let user;
axios_1.default.get('https://dummyjson.com/users').then((res) => {
    user = res === null || res === void 0 ? void 0 : res.data;
}).catch((error) => {
    throw new Error(error.message);
});
