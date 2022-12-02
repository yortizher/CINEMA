import { defineStore } from 'pinia';

export const useScheduleStore = defineStore('scheduleStore', {
    state: () => ({
        schedules: "",     
    }),
    getters: {
       getSchedules : (state) =>  state.schedules
    },
    actions: {
        addSchedule(schedule) {
            this.schedules = schedule;
            console.log(this.schedules)
        },
        editSchedule(schedule, id) {
            console.log(schedule,id)
        },
        deleteSchedule(schedule,id) {
            console.log(schedule,id)
        }
    }
})