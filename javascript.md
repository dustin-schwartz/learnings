# Javascript

## ECMA Script 2021

### Private Methods

Adding `#` in front of a method will make it private.

```js
class People {
  showName() {
    console.log("My name is Faithful")
  }
  #showAge() {
    console.log("Faithful is 20")
  }
  showAll() {
    this.showName()
    this.#showAge();
  }
}

const people = new People()

people.showName() // Will Run
people.showAge() // Will Error
people.showAll() // will Run, accessing private inside public works
```

### Numeric Separators

You can add `_` where commas would be for legibility.

```js
let budget = 1_000_000_000_000
```

### Logical Assignment Operators

Logical assignment operator combines the logical operations(&&, || or ??) with assignment.

```js
// &&
var x = 1;
var y = 2;
x &&= y;
console.log(x); // 2
// Same as
if(x) {
  x = y
}

// ||
var x = 1;
var y = 2;
x ||= y;
console.log(x); // 2
// Same as
if(x || y) {
  x = y
}

// ??
var x;
var y = 2;
x ??= y;
console.log(x); // 2
// Same as
if(x === null || x === undefined) {
  x = y
}
```