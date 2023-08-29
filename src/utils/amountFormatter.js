export function standardAmountFormat(amount) {
  return (
    parseFloat(parseFloat(amount && amount).toFixed(2)).toLocaleString("en") +
    " sats"
  );
}
