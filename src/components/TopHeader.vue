<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core'
import { Switch } from '@headlessui/vue'

const isDark = useDark({ disableTransition: false }) // NOTE: https://github.com/vueuse/vueuse/issues/3063
const toggleDark = useToggle(isDark)
const darkMode = ref(isDark)

function updateDarkMode(darkMode) {
    toggleDark(darkMode)
    console.log('Current darkMode:', darkMode)
}

const router = reactive(useRouter())
const routes = computed(() => router.getRoutes())
</script>
<template>
    <nav class="w-full border-b dark:bg-slate-800 dark:text-white dark:border-slate-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between flex-wrap">
                <div class="flex items-center">
                    <a href="/"><img src="@/assets/logo.png" class="h-8 logo" alt="Logo" /></a>
                    <h1 class="h1 text-2xl font-pretendard font-extrabold leading-none tracking-tight mx-2">Vue Demo</h1>
                    <div class="mx-2 space-x-4">
                        <router-link v-for="(route, i) in routes" :key="`routes-idx-${i}`" :to="route.path">
                            {{ route.meta?.name }}
                        </router-link>
                    </div>
                </div>
                <div class="flex items-end">
                    <Switch v-model="darkMode" @update:modelValue="updateDarkMode"
                        class="relative inline-flex h-7 w-14 items-center rounded-full ui-checked:bg-blue-500 ui-not-checked:bg-gray-200">
                        <span class="sr-only">Enable Dark Mode</span>
                        <span class="absolute" style="margin-top: 2px;">
                            <i class="fas fa-moon text-yellow-500" style="margin-left: 11px;"></i>
                            <i class="fas fa-sun text-yellow-500" style="margin-left: 8px;"></i>
                        </span>
                        <span
                            class="inline-block h-5 w-5 transform rounded-full bg-white transition duration-300 ui-checked:translate-x-7 ui-not-checked:translate-x-2"></span>
                    </Switch>
                </div>
            </div>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
.logo {
    will-change: filter;
    transition: filter 300ms;
    display: inline-block;

    &:hover {
        filter: drop-shadow(0 0 1em hsl(196, 55%, 36%));
    }
}

.router-link-active {
    font-weight: bold;
}
</style>