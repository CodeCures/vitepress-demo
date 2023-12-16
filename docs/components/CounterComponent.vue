<script setup lang="ts">
import { ref } from "vue";
const counter = ref(0)
</script>
<template>
    <div>
        <h4>this is the counter component</h4>
        <div>Current Counter: {{ counter }}</div>
        <button @click="counter++">increment Counter</button>
    </div>
</template>

