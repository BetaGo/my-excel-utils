function averageIncomeAfterTax(income) {
  let yearIncome = income * 12;
  if (yearIncome < 60000) return yearIncome;
  let tex = 0;
  let texIncome = yearIncome - 60000;
  if (texIncome <= 36000) {
    tex += texIncome * 0.03;
  } else if (texIncome > 36000) {
    tex += 36000 * 0.03;
  }
  if (texIncome > 36000 && texIncome <= 144000) {
    tex += (texIncome - 36000) * 0.1;
  } else if (texIncome > 144000) {
    tex += (144000 - 36000) * 0.1;
  }
  if (texIncome > 144000 && texIncome <= 300000) {
    tex += (texIncome - 144000) * 0.2;
  } else if (texIncome > 300000) {
    tex += (300000 - 144000) * 0.2;
  }
  if (texIncome > 300000 && texIncome <= 420000) {
    tex += (texIncome - 300000) * 0.25;
  } else if (texIncome > 420000) {
    tex += (420000 - 300000) * 0.25;
  }
  if (texIncome > 420000 && texIncome <= 660000) {
    tex += (texIncome - 420000) * 0.3;
  } else if (texIncome > 660000) {
    tex += (660000 - 420000) * 0.3;
  }
  if (texIncome > 660000 && texIncome <= 960000) {
    tex += (texIncome - 660000) * 0.35;
  } else if (texIncome > 960000) {
    tex += (960000 - 660000) * 0.35;
  }
  if (texIncome > 960000) {
    tex += (texIncome - 960000) * 0.45;
  }
  return (yearIncome - tex) / 12;
}

console.log(averageIncomeAfterTax(10000));
