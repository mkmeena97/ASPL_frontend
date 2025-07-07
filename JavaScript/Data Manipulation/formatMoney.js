// formatMoney.js
function formatMoney(amount, currency = 'INR') {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency
  }).format(amount);
}

console.log(formatMoney(123456.789));      // ₹1,23,456.79
console.log(formatMoney(123456.789, 'USD'));// $123,456.79
