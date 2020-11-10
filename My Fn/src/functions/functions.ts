/**
 * Adds two numbers.
 * @customfunction
 * @param first First number
 * @param second Second number
 * @returns The sum of the two numbers.
 */
/* global clearInterval, console, setInterval */

export function add(first: number, second: number): number {
  return first + second;
}

/**
 * Displays the current time once a second.
 * @customfunction
 * @param invocation Custom function handler
 */
export function clock(invocation: CustomFunctions.StreamingInvocation<string>): void {
  const timer = setInterval(() => {
    const time = currentTime();
    invocation.setResult(time);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Returns the current time.
 * @returns String with the current time formatted for the current locale.
 */
export function currentTime(): string {
  return new Date().toLocaleTimeString();
}

/**
 * Increments a value once a second.
 * @customfunction
 * @param incrementBy Amount to increment
 * @param invocation Custom function handler
 */
export function increment(incrementBy: number, invocation: CustomFunctions.StreamingInvocation<number>): void {
  let result = 0;
  const timer = setInterval(() => {
    result += incrementBy;
    invocation.setResult(result);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param message String to write.
 * @returns String to write.
 */
export function logMessage(message: string): string {
  console.log(message);

  return message;
}

/**
 * 税后平均月收入
 * @customfunction AIAT
 * @param income 月收入（扣除五险一金后）
 * @returns 税后平均月收入
 */
export function averageIncomeAfterTax(income: number): number {
  let yearIncome = income * 12;
  if (yearIncome < 60000) return income;
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
