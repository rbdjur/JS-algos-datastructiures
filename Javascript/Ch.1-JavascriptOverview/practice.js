function restParamaterFunction (x, y, ...a) {
    console.log(`
    x: ${x},
    y: ${y},
    ...a: ${a}
    `)
    console.log(a);
    console.log(typeof(a));


    return (x + y) * a.length;
  }

 console.log(restParamaterFunction(1, 2, "hello", true, 7)); //outputs 9;
// x = 1, y = 2, ...a = ["hello", true, 7]