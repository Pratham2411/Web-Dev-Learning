 export const PI=3.14;
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function mul(a, b) {
    return a * b;
}

export function div(a, b) {
    if (b === 0) return null;
    return a / b;
}

export function square(n) {
    return n * n;
}

export function cube(n) {
    return n * n * n;
}

export function factorial(n) {
    if (n < 0) return null;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

export function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

export function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

export function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

export function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
