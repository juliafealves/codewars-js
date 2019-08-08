function descendingOrder(number) {
  return parseInt(
    number
      .toString()
      .split("")
      .sort()
      .reverse()
      .join("")
  );
}

console.log(descendingOrder(0) === 0);
console.log(descendingOrder(1) === 1);
console.log(descendingOrder(123456789) === 987654321);
console.log(descendingOrder(1254859723) === 9875543221);
console.log(descendingOrder(145263) === 654321);
console.log(descendingOrder(21445) === 54421);
