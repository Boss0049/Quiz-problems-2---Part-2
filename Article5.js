const Month = (input) => {
  let newInput = input.split("-");
  let allMount = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน ",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  newInput[1] = +newInput[1];
  switch (newInput[1]) {
    case 2:
      if (newInput[0] <= 28) {
        return `วันที่ ${newInput[0]} เดือน${
          allMount[newInput[1] - 1]
        } พ.ศ. ${year}`;
      } else {
        return "error";
      }
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      let year = +newInput[2] + 543;
      if (newInput[0] <= 31) {
        return `วันที่ ${newInput[0]} เดือน${
          allMount[newInput[1] - 1]
        } พ.ศ. ${year}`;
      } else {
        return "error";
      }
    case 1:
    case 4:
    case 6:
    case 9:
    case 11:
      if (newInput[0] < 31) {
        return `วันที่ ${newInput[0]} เดือน${
          allMount[newInput[1] - 1]
        } พ.ศ. ${year}`;
      } else {
        return "error";
      }
    default:
      return "error";
  }
};

console.log(Month("30-12-2020"));
