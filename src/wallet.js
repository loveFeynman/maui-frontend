import { LCDClient, Dec } from "@terra-money/terra.js";

const terra = new LCDClient({
  URL: "https://bombay-lcd.terra.dev",
  chainID: "bombay-12",
});

export const fetchBalance = async (key) => {
  console.log("fetchBalance", key);
  const currentBalance = await terra.bank.balance(key);

  const uusdAmount = currentBalance[0]._coins.uusd?.amount;

  console.log(uusdAmount);
  if (uusdAmount) {
    return new Dec(currentBalance[0]._coins.uusd.amount)
      .div(1000000)
      .toNumber()
      .toFixed(2);
  } else {
    return 0;
  }
};
