import { defineStore, createPinia } from 'pinia'

export const pinia = createPinia({

})

export const useMyFavoriteStore = defineStore(
  "favorite", {
    state :()=>({
      favourites:[],
    }),
    actions: {
      checkfav(value){
        return this.favourites.some(obj=>obj.id === value)
      },
      addfav(value){
        this.favourites.push(value)
      },
      delfav(value){
        //filter & remove
        this.favourites = this.favourites.filter(obj=>obj.id != value)
      },
    }
  }
)
