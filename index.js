export default function calculateHomeLoan(loanValue, years, rate, frequency) {
    // Check for negative values
    if(loanValue < 0 || years < 0 || rate < 0 || frequency < 0) {
        return {
            monthlyPayment: NaN,
            totalPayment: NaN,
            totalInterest: NaN
        };
    }

    // Check for null values
    if(loanValue === 0 && years === 0 && rate === 0 && frequency === 0) {
        return {
            monthlyPayment: 0,
            totalPayment: 0,
            totalInterest: 0
        };
    }

    // Check for undefined values
    if(rate === 0) {
        return {
            monthlyPayment: Math.round(loanValue / years / frequency * 100) / 100,
            totalPayment: loanValue,
            totalInterest: 0
        };
    }

    // Check for 0 values
    if(years === 0) {
        return {
            monthlyPayment: loanValue,
            totalPayment: loanValue,
            totalInterest: 0
        };
    }

    // Check for 0 values
    if(frequency === 0) {
        return {
            monthlyPayment: loanValue,
            totalPayment: loanValue,
            totalInterest: 0
        };
    }

    // Calculate the monthly rate
    let monthlyRate = rate / frequency / 100;
    // Calculate the number of payments
    let numberOfPayments = years * frequency;
    // Calculate the monthly payment
    let monthlyPayment = loanValue * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    // Calculate the total payment and total interest
    let totalPayment = monthlyPayment * numberOfPayments;
    // Calculate the total interest
    let totalInterest = totalPayment - loanValue;

    // Round to the nearest cent
    monthlyPayment = Math.round(monthlyPayment * 100) / 100;
    totalPayment = Math.round(totalPayment * 100) / 100;
    totalInterest = Math.round(totalInterest * 100) / 100;

    // Return the results
    return {
        monthlyPayment: monthlyPayment,
        totalPayment: totalPayment,
        totalInterest: totalInterest
    };
}