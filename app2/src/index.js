import("app1/sum").then(({default: sum}) => {
  console.log(sum(2, 2, 3, 4));
});
console.log("app2");
