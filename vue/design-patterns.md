# Design Patterns for Vue

## Props

### Three Fundamental Questions

There are 3 questions to ask when creating a component.

1. What data type(s) to expect? (String, Number, Boolean, Array, Object, Date, Function, Symbol)
2. Is this prop critical? Define `required: true` if so.
3. Can we define a default state for most cases?

#### Prop type array syntax

Define multiple types for a prop.

```js
type: [Number, String]
```

#### Required

Required is not necessary if default is set. False will be assumed.