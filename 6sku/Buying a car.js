function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth,
) {
  let months = 0;
  let savings = 0;

  if (startPriceOld >= startPriceNew) {
    return [months, startPriceOld - startPriceNew];
  }

  while (startPriceOld + savings < startPriceNew) {
    months++;
    if (months % 2 === 0) {
      percentLossByMonth += 0.5;
    }

    startPriceOld -= (startPriceOld / 100) * percentLossByMonth;
    startPriceNew -= (startPriceNew / 100) * percentLossByMonth;
    savings += savingperMonth;
  }

  const remaining = Math.round(startPriceOld + savings - startPriceNew);
  return [months, remaining];
}
