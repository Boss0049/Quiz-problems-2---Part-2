const calculateInterest = (money, years) => {
  for (let i = 1; i <= years; i++) {
    money = money + (Number(money) * Number(i) * 2.5) / 100;
  }
  return money;
  //   return (money = money + (money * years * 2.5) / 100);
};

console.log(calculateInterest(15126, 14));
