// This is easily one of the features I’ve been using the most. 
// It’s also one of the simplest. It binds properties to as many letiables as you need and it works with both Arrays and Objects.

let foo = { bar: "pony", baz: 3 };
let { bar, baz } = foo;
console.log(bar);
// <- 'pony'
console.log(baz);
// <- 3

// You’re also allowed to map properties into aliases as well.

let foo = { bar: "pony", baz: 3 };
let { bar: a, baz: b } = foo;
console.log(a);
// <- 'pony'
console.log(b);
// <- 3

// You can also pull properties as deep as you want, and you could also alias those deep bindings.

let foo = { bar: { deep: "pony", dangerouslySetInnerHTML: "lol" } };
let {
  bar: { deep, dangerouslySetInnerHTML: sure },
} = foo;
console.log(deep);
// <- 'pony'
console.log(sure);
// <- 'lol'

// By default, properties that aren’t found will be undefined, just like when accessing properties on an object with the dot or bracket notation.

let { foo } = { bar: "baz" };
console.log(foo);
// <- undefined

//Swapping variables with destructuring
var left = 10;
var right = 20;
if (right > left) {
  [left, right] = [right, left];
}

// Another convenient aspect of destructuring is the ability to pull keys using computed property names.

var key = 'such_dynamic'
var { [key]: foo } = { such_dynamic: 'bar' }
console.log(foo)
// <- 'bar'


// Destructuring works for Arrays as well, as we mentioned earlier. 
// Note how I’m using square brackets in the destructuring side of the declaration now.

var [a] = [10]
console.log(a)
// <- 10

// Here, again, we can use the default values and follow the same rules.

var [a] = []
console.log(a)
// <- undefined
var [b=10] = [undefined]
console.log(b)
// <- 10
var [c=10] = []
console.log(c)
// <- 10

// When it comes to Arrays you can conveniently skip over elements that you don’t care about.

var [,,a,b] = [1,2,3,4,5]
console.log(a)
// <- 3
console.log(b)
// <- 4