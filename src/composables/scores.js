export const scoreType = {
    "light-car": 8,
    "convertible-car": 6,
    "sedan-car": 6.5,
    "heavy-car": 4
}

export const scoreEnergy = {
    "petrol": 5,
    "electric": 9,
    "gas": 6,
    "diesel": 4,
    "hybrid": 7,
}

export const ratePassenger = {
    1: 0.11,
    2: -0.17,
    3: -0.29,
    4: -0.53,
}

export function computeKilometer(kilometer) {
    if (kilometer <= 10000) return 9;
    else if (kilometer <= 15000) return 7;
    else if (kilometer <= 20000) return 5;
    else if (kilometer <+ 25000) return 3;
    return 1;
}

export function computeYear(year) {
    if (year <= 1970) return 1;
    else if (year <= 1980) return 2;
    else if (year <= 2000) return 4;
    else if (year <= 2010) return 5;
    else return 7;
}

