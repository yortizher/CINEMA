import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('CategoryStore', {
    state: () => ({
        categories: [],     
    }),
    getters: {
       getCategories : (state) =>  state.categories
    },
    actions: {
        addCategory(category) {
            this.categories.push(category);
        },
        editCategory(category, id) {
            console.log(category,id)
        },
        deleteCategory(category,id) {
            console.log(category,id)
        }
    }
})