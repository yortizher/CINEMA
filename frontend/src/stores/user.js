import { defineStore } from 'pinia';

export const useUserStore = defineStore('UserStore', {
    state: () => ({
        users: [],     
    }),
    getters: {
       getUsers : (state) =>  state.users
    },
    actions: {
        addUser(user) {
            this.users.push(user);
        },
        editUser(user, id) {
            console.log(user,id)
        },
        deleteUser(user,id) {
            console.log(user,id)
        }
    }
})
