/**
 * Calculate the monthly payment, total payment, and total interest of a loan
 * 
 * @param {number} loanValue The value of the loan
 * @param {number} years The number of years for the loan
 * @param {number} rate The interest rate for the loan
 * @param {number} frequency The number of payments per year
 * @returns {object} An object containing the monthly payment, total payment, and total interest
 * 
 * @example
 * 
 * ```
 * import calculateHomeLoan from 'calculator-home-loan';
 * 
 * calculateHomeLoan(80000, 30, 4.5, 12);
 * // => { monthlyPayment: 405.35, totalPayment: 145925.37, totalInterest: 65925.37 }
 * ```
*/
export default function calculateHomeLoan(houseValue: number, loanValue: number, years: number, rate: number, frequency: number): number;