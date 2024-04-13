import test from 'ava';
import calculateHomeLoan from './index.js';

test('Calculate home loan and expect object', t => {
    let result = calculateHomeLoan(80000, 30, 4.5, 12);
    t.is(typeof result, 'object');
});

test('Calculate home loan at 4.5% for 30 years', t => {
    let result = calculateHomeLoan(80000, 30, 4.5, 12);
    t.is(result.monthlyPayment, 405.35);
    t.is(result.totalPayment, 145925.37);
    t.is(result.totalInterest, 65925.37);
});

test('Calculate home loan at 3.5% for 15 years', t => {
    let result = calculateHomeLoan(80000, 15, 3.5, 12);
    t.is(result.monthlyPayment, 571.91);
    t.is(result.totalPayment, 102943.09);
    t.is(result.totalInterest, 22943.09);
});

test('Calculate home loan at 5.0% for 20 years', t => {
    let result = calculateHomeLoan(80000, 20, 5.0, 12);
    t.is(result.monthlyPayment, 527.96);
    t.is(result.totalPayment, 126711.5);
    t.is(result.totalInterest, 46711.5);
});

test('Calculate home loan with 0% interest', t => {
    let result = calculateHomeLoan(80000, 30, 0.0, 12);
    t.is(result.monthlyPayment, 222.22);
    t.is(result.totalPayment, 80000);
    t.is(result.totalInterest, 0);
});

test('Calculate home loan with 0 years', t => {
    let result = calculateHomeLoan(80000, 0, 4.5, 12);
    t.is(result.monthlyPayment, 80000);
    t.is(result.totalPayment, 80000);
    t.is(result.totalInterest, 0);
});

test('Calculate home loan with 0 loan value', t => {
    let result = calculateHomeLoan(0, 30, 4.5, 12);
    t.is(result.monthlyPayment, 0);
    t.is(result.totalPayment, 0);
    t.is(result.totalInterest, 0);
});

test('Calculate home loan with 0 frequency', t => {
    let result = calculateHomeLoan(80000, 30, 4.5, 0);
    t.is(result.monthlyPayment, 80000);
    t.is(result.totalPayment, 80000);
    t.is(result.totalInterest, 0);
});

test('Calculate home loan with 0 rate', t => {
    let result = calculateHomeLoan(80000, 30, 0, 12);
    t.is(result.monthlyPayment, 222.22);
    t.is(result.totalPayment, 80000);
    t.is(result.totalInterest, 0);
});

test('Calculate home loan with 0 0 loan value, 0 years, 0 rate, 0 frequency', t => {
    let result = calculateHomeLoan(0, 0, 0, 0);
    t.is(result.monthlyPayment, 0);
    t.is(result.totalPayment, 0);
    t.is(result.totalInterest, 0);
});

test('Calculate home loan with negative loan value, years, rate, frequency', t => {
    let result = calculateHomeLoan(-80000, -30, -4.5, -12);
    t.is(result.monthlyPayment, NaN);
    t.is(result.totalPayment, NaN);
    t.is(result.totalInterest, NaN);
});

test('Calculate home loan with null loan value, years, rate, frequency', t => {
    let result = calculateHomeLoan(null, null, null, null);
    t.is(result.monthlyPayment, NaN);
    t.is(result.totalPayment, NaN);
    t.is(result.totalInterest, NaN);
});

test('Calculate home loan with undefined loan value, years, rate, frequency', t => {
    let result = calculateHomeLoan(undefined, undefined, undefined, undefined);
    t.is(result.monthlyPayment, NaN);
    t.is(result.totalPayment, NaN);
    t.is(result.totalInterest, NaN);
});

test('Calculate home loan with missing loan value, years, rate, frequency', t => {
    let result = calculateHomeLoan();
    t.is(result.monthlyPayment, NaN);
    t.is(result.totalPayment, NaN);
    t.is(result.totalInterest, NaN);
});