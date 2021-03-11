# Vue.js Reference Notes

## Vue Router

#### Use Named Routes

```js
// router.js
routes: [
    {
        path: "/",
        name: "home",
        component: "Home"
    }
]
```

```html
<!-- In View -->
<router-link :to="{ name: 'home' }">Home</router-link>
```

#### Redirects

```js
// router.js
routes: [
    {
        path: "/",
        name: "home",
        component: "Home"
    },
    {
        path: "/home",
        redirect: { name: "home" }
    }
]
```

## 

### Disable attribute inheritance
```js
export default {
    inheritAttrs: false
}
```
Then Bind it where you want.
```html
<input v-bind="$attrs">
```