import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import SockJS from 'sockjs-client/dist/sockjs'
import { Stomp } from '@stomp/stompjs'
import { useCsrfStore } from './index.js'
import { Notify, date } from 'quasar'

export const useWebSocketStore = defineStore('websocket', () => {
  const stompClient = ref(undefined)
  const message = ref('')
  const prepare = () => {
    const csrfStore = useCsrfStore()
    const csrfToken = csrfStore.csrf
    if (csrfToken.token === undefined) {
      throw new Error('Require csrf token with CONNECT')
    }

    const socket = new SockJS('/ws')
    const stomp = Stomp.over(socket)
    stomp.connectHeaders = {}
    stomp.connectHeaders[csrfToken.headerName] = csrfToken.token
    stomp.reconnectDelay = 100 // ms
    stomp.onConnect = (frame) => {
      Notify.create({
        message: '웹소켓 연결되었습니다.',
        caption: date.formatDate(Date.now(), 'YYYY-MM-DD hh:mm:ss'),
        color: 'positive',
        icon: 'info',
        position: 'top-right',
      })
    }
    stomp.onWebSocketClose = (event) => {
      console.error(event)
      Notify.create({
        message: '웹소켓 연결이 해지되었습니다.',
        caption: date.formatDate(event.timeStamp, 'YYYY-MM-DD hh:mm:ss'),
        color: 'negative',
        icon: 'warning',
        position: 'top-right',
      })
    }
    stompClient.value = stomp
    return stomp
  }
  const connect = () => {
    const stomp = stompClient.value
    if (!stomp || !stomp.connected) {
      prepare().activate()
    }
    return stomp
  }

  return { stompClient, connect, message }
})
