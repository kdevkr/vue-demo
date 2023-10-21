<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCsrfStore } from '@/store/index.js';
import { useWebSocketStore } from '@/store/websocket.js'

const csrfStore = useCsrfStore()
const webSocketStore = useWebSocketStore()

const message = ref('')
const subscribeId = ref(undefined)
const subscribe = () => {
    if (!subscribeId.value) {
        subscribeId.value = webSocketStore.stompClient.subscribe('/user/topic/hello', (cb) => {
            const payload = JSON.parse(cb.body)
            console.log(payload)
            message.value = payload.message
        })
    }
}
const unsubscribe = () => {
    if (subscribeId.value) {
        subscribeId.value.unsubscribe()
        subscribeId.value = undefined
        message.value = undefined
    }
}

onMounted(() => {
    csrfStore.getCsrf().then(res => {
        webSocketStore.connect()
    })
})
</script>
<template>
    <h5>CSRF</h5>
    <p class="mb-1">HeaderName: {{ csrfStore.csrf.headerName }}</p>
    <p>Token: {{ csrfStore.csrf.token }}</p>

    <h5>WebSocket</h5>
    <p>Message: {{ message }}</p>
    <div>
        <q-btn color="primary" label="Subscribe" @click="subscribe" v-if="!subscribeId" />
        <q-btn color="negative" label="Unubscribe" @click="unsubscribe" v-else />
    </div>
</template>