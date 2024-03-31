import axios from 'axios';

enum HairColor {
    Black = "Black",
    Blond = "Blond",
    Brown = "Brown",
    Chestnut = "Chestnut",
    Auburn = "Auburn",
}

enum HairType {
    Strands = "Strands",
    Curly = "Curly",
    VeryCurly = "Very curly",
    Straight = "Straight",
    Wavy = "Wavy",
}

interface Hair  {
    color: HairColor;
    type: HairType;
}

interface Address {
    address: string;
    city: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    postalCode: string;
    state: string;
}

enum CardType {
    maestro = "maestro",
    mastercard = "mastercard",
    jcb = "jcb",
    visaElectron = "visa-electron",
    americanexpress = "americanexpress",
    diners = "diners-club-carte-blanche",
    bankcard = "bankcard",
    instapayment = "instapayment",
    switch = "switch",
    solo = "solo",
}

enum CardCurrency {
    Peso = "Peso",
    Ruble = "Ruble",
    Yuan = "Yuan Renminbi",
    Euro = "Euro",
    Rupiah = "Rupiah",
    Ringgit = "Ringgit",
    Rial = "Rial",
    Hryvnia = "Hryvnia",
    Dollar = "Dollar",
    Rupee = "Rupee",
    Koruna = "Koruna",
    Real = "Real",
    Yen = "Yen",
    Zloty = "Zloty",
}

interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: CardType;
    currency: CardCurrency;
    iban: string;
}

enum Department {
    Marketing = "Marketing",
    Services = "Services",
    BusinessDevelopment = "Business Development",
    Support = "Support",
    Accounting = "Accounting",
    ProductManagement = "Product Management",
    HumanResources = "Human Resources",
    ResearchAndDevelopment = "Research and Development",
    Sales = "Sales",
    Legal = "Legal",
    Engineering = "Engineering",
}

enum CoinType {
    Bitcoin = "Bitcoin",
}

interface Company {
    address: Address;
    department: Department;
    name: string;
    title: string;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    domain: string;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: {
        coin: CoinType;
        wallet: string;
        network: string;
    }
}

let user: User[];
axios.get('https://dummyjson.com/users').then((res: {data: User[]}) => {
    user = res?.data;
}).catch((error: {message: string; code: string}) => {
    throw new Error(error.message);
});


