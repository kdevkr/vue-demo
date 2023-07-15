<script setup>
import { useMeta } from 'vue-meta'
useMeta({
    title: 'Error',
})
</script>
<template>
    <section class="grid place-items-center bg-white dark:bg-slate-800">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600 dark:text-red-600">
                    404</h1>
                <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl dark:text-white">Not Found</p>
                <p class="mb-4 text-lg font-light text-red-600 dark:text-red-300">페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</p>
                <router-link to="/"
                    class="inline-flex text-white bg-slate-600 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-slate-900 my-2">Back
                    to Home</router-link>
            </div>
        </div>
    </section>
</template>