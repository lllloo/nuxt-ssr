<template>
    <div>
        <h1 class="m-[10px]">INDEX</h1>
        {{ data }}
    </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"]
})
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig);
// const { pending, data } = useFetch('https://api.hackmd.io/v1/notes', {
//   lazy: true,
//   headers: {
//     // Authorization: `Bearer ${runtimeConfig.public.apiToken}`
//   }
// })
// console.log(data);
</script>