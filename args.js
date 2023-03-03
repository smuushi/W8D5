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

Function.prototype.myBind = function(ctx, ...bindArgs){
  
  let that = this
  // let arguments = all the extra stuff... 

  if (bindArgs.length === 0) {
    return function() {
      that.call(ctx, ...arguments);
    };
  } else {
    return function() {
      that.call(ctx, ...bindArgs, ...arguments)
    };
  };

}

let func = function (arg1, arg2) {
  // console.log( `${this.name}`)
  debugger
  if (arguments.length > 0) {
    console.log(`${this.name} does ${arg1} and ${arg2}`)
  } else {
    console.log(`${this.name}`)
  }
}

let bindTest = func.myBind({name: "test"}, "ghi")

let theirBind = func.bind({name: 'their_bind'}, "asddddf")

// bindTest("asdf")

theirBind()

