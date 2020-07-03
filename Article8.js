const toChange = (money) => {
  let bank = {
    OneThousand: 0,
    FiveHundred: 0,
    oneHundred: 0,
    fifty: 0,
    twenty: 0,
    ten: 0,
    five: 0,
    two: 0,
    one: 0,
  };

  while (money !== 0) {
    if (money >= 1000) {
      money = money % 1000;
      bank.OneThousand += 1;
    } else if (money >= 500) {
      money = money - 500;
      bank.FiveHundred += 1;
    } else if (money >= 100) {
      money = money - 100;
      bank.oneHundred += 1;
    } else if (money >= 50) {
      money = money - 50;
      bank.fifty += 1;
    } else if (money >= 20) {
      money = money - 20;
      bank.twenty += 1;
    } else if (money >= 10) {
      money = money - 10;
      bank.ten += 1;
    } else if (money >= 5) {
      money = money - 5;
      bank.five += 1;
    } else if (money >= 2) {
      money = money - 2;
      bank.two += 1;
    } else if (money >= 1) {
      money = money - 1;
      bank.one += 1;
    }
  }
  return `แบงค์พัน ${bank.OneThousand} ใบ / แบงค์ห้าร้อย ${bank.FiveHundred} ใบ / แบงค์ร้อย ${bank.oneHundred} ใบ / แบงค์ห้าสิบ ${bank.fifty} ใบ / แบงค์ยี่สิบ ${bank.twenty} ใบ / เหรียญสิบ ${bank.ten} เหรียญ / เหรียญห้า ${bank.five} เหรียญ / เหรียญสองบาท ${bank.two} เหรียญ / เหรียญบาท ${bank.one} เหรียญ`;
};

console.log(toChange(1788));
