// create current date and time
let now = new Date();
console.log(now);

// create specific date (year, month, day)
// month starts from 0 (0 = Jan, 11 = Dec)
let customDate = new Date(2026, 0, 1);
console.log(customDate);

// create date using string
let stringDate = new Date("2004-11-24");
console.log(stringDate);

// get date components
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());

// get time components
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// set date components
now.setFullYear(2030);
now.setMonth(5);
now.setDate(15);
console.log(now);

// timestamp (milliseconds since Jan 1, 1970)
let timestamp = Date.now();
console.log(timestamp);

// compare two dates
let d1 = new Date("2024-01-01");
let d2 = new Date("2025-01-01");

console.log(d2 > d1);

// calculate difference between dates (in days)
let diffMs = d2 - d1;
let diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(diffDays);
