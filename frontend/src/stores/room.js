import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRoomStore = defineStore('room', () => {


    //   const count = ref(0)
    const dataPineaRoom = ref([])


    //   const doubleCount = computed(() => count.value * 2)


    //   function increment() {
    //     count.value++
    //   }



    return { 
        // count,
        // doubleCount, 
        // increment ,
        dataPineaRoom,


    
    }
})
