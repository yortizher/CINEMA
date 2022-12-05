import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRoomStore = defineStore('room', () => {


    //   const count = ref(0)
    const dataPineaRoom = ref([])
    const dataPineaChair = ref([])
    const band = ref(false)



    //   const doubleCount = computed(() => count.value * 2)


    //   function increment() {
    //     count.value++
    //   }



    return { 
        // count,
        // doubleCount, 
        // increment ,
        dataPineaRoom,
        dataPineaChair,
        band,
        


    
    }
})
