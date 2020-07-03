const toChange = (money) => {
  console.log(money);
  return `${(money - (money % 1000)) / 1000},
    
    ${(money = (money - (money % 100)) / 100)},
    ${(money = (money - (money % 50)) / 50)},
   ${(money = (money - (money % 20)) / 20)},
    ${(money = (money - (money % 10)) / 10)},
    ${(money = (money - (money % 5)) / 5)},
    ${(money = (money - (money % 2)) / 2)},
    ${(money = (money - (money % 1)) / 1)},
    A:${money}`;
};
console.log(toChange(621));
