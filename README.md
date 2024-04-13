## 🏠 calculator-home-loan

[![GitHub](https://img.shields.io/github/license/Nembie/calculator-home-loan?style=flat-square)](LICENSE.md)
[![GitHub issues](https://img.shields.io/github/issues/Nembie/calculator-home-loan?style=flat-square)](https://github.com/Nembie/calculator-home-loan/issues)
[![GitHub Release](https://img.shields.io/github/v/release/Nembie/calculator-home-loan?style=flat-square)](https://github.com/Nembie/calculator-home-loan/releases)

A JavaScript open-source package to easily calculate monthly mortgage payments, total repayment, and total interest.

### ⚙️ Install
```bash
yarn add calculator-home-loan
```

### 🚨 Example
```javascript
import calculateHomeLoan from 'calculator-home-loan';

const loan = 80000;
const years = 30;
const rate = 4.5;
const frequency = 12;

calculateHomeLoan(loan, years, rate, frequency);

// Output
{
    monthlyPayment: 405.35,
    totalPayment: 145925.37,
    totalInterest: 65925.37
}
```


### 🤝 Contribution
If you find any issues or have suggestions for improvements, feel free to open a pull request or issue. Your contribution is highly appreciated.

### 🔨 Test

```npx ava```

### 📝 License

This package is open-sourced software licensed under the [MIT license](https://github.com/Nembie/calculator-home-loan/blob/main/LICENSE.md).
