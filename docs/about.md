---
layout: doc
sidebar: false
aside: false
# pagination: false
---

<script setup>
    import CounterComponent from './components/CounterComponent.vue'
</script>

# This is the first level heading 
::: danger
this is the paragraph for our about us page
:::

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

<!-- [[toc]] -->

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

```vue
<script setup>
    import { ref } from 'vue'
    const counter = ref(0)
</script>
<template>
    <h4>this is the counter component</h4>
    <div>Current Count: {{ counter }}</div>
    <button @click="counter++">increment counter</button>
</template>
```


<CounterComponent />