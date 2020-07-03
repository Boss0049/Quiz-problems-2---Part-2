const thaiTypeof = (input) => {
  if (typeof input === "string") return "ข้อความ";
  if (typeof input === "number") return "ตัวเลข";
  if (typeof input === "object") return "ออปเจ็คต์";
};

console.log(thaiTypeof("Hello"));
console.log(thaiTypeof(2));
console.log(thaiTypeof({}));
