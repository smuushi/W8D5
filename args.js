const sum = function () {
  let total = 0;
  for ( let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  };
  return total;
}

// console.log(sum(1, 2, 3, 4))

const sum2 = function (...args) {
  let total = 0;
  args.forEach( (el) => total += el)
  return total;
}
// console.log(sum2(1, 2, 3, 4))

Function.prototype.myBind = function (ctx) {
  debugger
  let val = this; 
  // if ( arguments.length === 1) {
    return function (ctx) {
      ctx.val()
    }
//}
  // return val;
}

let func = function (){
  console.log( `${this.name} `)
}
let bindTest = func.myBind({name: "test"})

console.log(bindTest())