export function standardAmountFormat(amount){
    return parseFloat(parseFloat(amount && amount).toFixed(2)).toLocaleString('en', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + " sats"
  }