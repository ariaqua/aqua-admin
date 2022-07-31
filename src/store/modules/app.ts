import { defineStore } from "pinia"
import { ref } from 'vue'

const useStore = defineStore('app', () => {
  const initialState = {
    isCollapse: false
  }
  const isCollapse = ref(initialState.isCollapse)

  return {
    isCollapse
  }
})

export default useStore
