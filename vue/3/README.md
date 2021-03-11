# Vue 3 Learnings

## Composition API

Composition API is not required. It's an option in 3.

### When should it be used.

- Want Typescript support.
- Have a really large component.
- Need to reuse code across other components.

### Setup

- Setup execuates before basically everything else.
- Doesn't have access to this.
- first argument can use `props`.
- second argument is `context` replacement for this.