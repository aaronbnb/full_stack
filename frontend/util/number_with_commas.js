export const numberWithCommas = (num) => {
  num = num.toString();
  let pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num))
      num = num.replace(pattern, "$1,$2");
  return num;
};
