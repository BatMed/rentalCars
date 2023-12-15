<template>
  <link href='https://fonts.googleapis.com/css?family=Plus Jakarta Sans' rel='stylesheet'>
  <div>
    <!-- Navbar -->
    <header class="sticky top-0 z-20 border-b bg-white">
    <div class="container flex h-16 p-11 items-center justify-between">
      
      <div class="pr-28">
        <a href="/">
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.659 24V0.159998H8.435C10.9523 0.159998 13.139 0.671998 14.995 1.696C16.8723 2.69867 18.323 4.096 19.347 5.888C20.371 7.65867 20.883 9.71733 20.883 12.064C20.883 14.3893 20.371 16.4587 19.347 18.272C18.323 20.064 16.8723 21.472 14.995 22.496C13.139 23.4987 10.9523 24 8.435 24H0.659ZM5.011 20.16H8.531C10.1523 20.16 11.5497 19.8293 12.723 19.168C13.9177 18.4853 14.8457 17.5467 15.507 16.352C16.1683 15.136 16.499 13.7067 16.499 12.064C16.499 10.4 16.1683 8.97067 15.507 7.776C14.8457 6.58133 13.9177 5.65333 12.723 4.992C11.5497 4.33067 10.1523 4 8.531 4H5.011V20.16ZM23.3865 24V0.159998H27.5465L36.4745 12.288H34.4905L43.2265 0.159998H47.3865V24H43.0025V5.12L44.6985 5.536L35.6425 17.6H35.1305L26.2985 5.536L27.7385 5.12V24H23.3865Z" fill="#3563E9"/></svg>
        </a>
      </div>

      <div class="container items-center border rounded-full p-2 hidden sm:flex">
        <div class="px-3.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#596780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 22L20 20" stroke="#596780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <input type="text" class="font-medium text-base leading-6 tracking-tighter text-justify outline-none placeholder-gray-500" v-on:input="(e) => { search(e.target.value); }" placeholder="Search something here">
        </div>
      </div>
      
      <div class="pl-14">
        <svg @click="filterfav" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.44 13.1001C24.63 13.1001 23.01 13.9801 22 15.3301C20.99 13.9801 19.37 13.1001 17.56 13.1001C14.49 13.1001 12 15.6001 12 18.6901C12 19.8801 12.19 20.9801 12.52 22.0001C14.1 27.0001 18.97 29.9901 21.38 30.8101C21.72 30.9301 22.28 30.9301 22.62 30.8101C25.03 29.9901 29.9 27.0001 31.48 22.0001C31.81 20.9801 32 19.8801 32 18.6901C32 15.6001 29.51 13.1001 26.44 13.1001Z" fill="#596780"/><rect opacity="0.8" x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#C3D4E9" stroke-opacity="0.4"/></svg>
      </div>

    </div>
    <div class="container items-center border rounded-full h-12 p-2 block sm:hidden">
      <div class="flex">
        <div class="px-3.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#596780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 22L20 20" stroke="#596780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <input type="text" class="font-medium text-base leading-6 tracking-tighter text-justify outline-none placeholder-gray-500" v-on:input="(e) => { search(e.target.value); }" placeholder="Search something here">
        </div>
      </div>
    </div>
  </header>
    
    <!-- body -->
    <div class="flex flex-col min-h-screen">
  
      <!-- content -->
      <div class="flex-1 bg-slate-50 p-6">
        <!-- single car -->
        <div class="px-7 grid grid-cols-1 sm:grid-cols-2 space-x-4 sm:space-y-7">
          
          <div class="w-fit">
            <div class="bg-blue-400 h-min rounded-md pt-7 pb-2 px-5 text-white">
              <p class="text-3xl font-semibold">Sports car with the best <br>design and acceleration </p>
              <br>
              <p>Safety and comfort while driving a <br>futuristic and elegant sports car</p>
              <div class="flex justify-center">
                  <img :src="this.carid.img" alt="">
              </div>
            </div>
            <div class="pt-4 space-x-6 grid grid-cols-3 justify-between items-center">
              <div class="ml-auto rounded-md bg-blue-400">
                <img :src="this.carid.img" width="100%" alt="">
              </div>
              <div v-for="(image, index) in this.carid.images" :key="index">
                <div>
                  <img :src="image.url" height="100" class="rounded-md" alt="Car Image">
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-md content-stretch p-7 flex flex-col justify-between">
            <div class="flex space-x-5">
              <p class="font-bold text-3xl">{{ this.carid.name }}</p>
              <div v-if="this.storefav.checkfav(this.carid.id)">
                <svg @click="this.storefav.delfav(this.carid.id)" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.44 0.100098C12.63 0.100098 11.01 0.980098 10 2.3301C8.99 0.980098 7.37 0.100098 5.56 0.100098C2.49 0.100098 0 2.6001 0 5.6901C0 6.8801 0.19 7.9801 0.52 9.0001C2.1 14.0001 6.97 16.9901 9.38 17.8101C9.72 17.9301 10.28 17.9301 10.62 17.8101C13.03 16.9901 17.9 14.0001 19.48 9.0001C19.81 7.9801 20 6.8801 20 5.6901C20 2.6001 17.51 0.100098 14.44 0.100098Z" fill="#ED3F3F"/></svg>
              </div>
              <div v-else>
                <svg @click="this.storefav.addfav(this.carid)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
            </div>
            <div class="flex space-x-2 ">
              <div class="flex">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.16676 2.65838C9.22433 2.47584 9.33858 2.31641 9.49294 2.20324C9.64729 2.09007 9.8337 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5573 2.20324C10.7116 2.31641 10.8259 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6317 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3329 8.05589C18.3933 8.24484 18.3903 8.44838 18.3242 8.63542C18.2581 8.82247 18.1325 8.98273 17.9668 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5213 17.187 15.4628 17.3698C15.4044 17.5526 15.2891 17.712 15.1336 17.8246C14.9782 17.9372 14.7908 17.9972 14.5989 17.9958C14.407 17.9944 14.2205 17.9316 14.0668 17.8167L10.0001 14.8417L5.94176 17.7917C5.78802 17.9066 5.60157 17.9694 5.40963 17.9708C5.2177 17.9722 5.03034 17.9122 4.87491 17.7996C4.71948 17.687 4.60412 17.5276 4.54569 17.3448C4.48725 17.162 4.4888 16.9653 4.5501 16.7834L6.1001 12.0084L2.04176 9.06671C1.876 8.95773 1.75047 8.79747 1.68437 8.61042C1.61826 8.42338 1.6152 8.21984 1.67566 8.03089C1.73612 7.84195 1.85678 7.67799 2.0192 7.56408C2.18161 7.45016 2.37686 7.39255 2.5751 7.40005H7.5751L9.16676 2.65838Z" fill="#FBAD39"/></svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.16676 2.65838C9.22433 2.47584 9.33858 2.31641 9.49294 2.20324C9.64729 2.09007 9.8337 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5573 2.20324C10.7116 2.31641 10.8259 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6317 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3329 8.05589C18.3933 8.24484 18.3903 8.44838 18.3242 8.63542C18.2581 8.82247 18.1325 8.98273 17.9668 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5213 17.187 15.4628 17.3698C15.4044 17.5526 15.2891 17.712 15.1336 17.8246C14.9782 17.9372 14.7908 17.9972 14.5989 17.9958C14.407 17.9944 14.2205 17.9316 14.0668 17.8167L10.0001 14.8417L5.94176 17.7917C5.78802 17.9066 5.60157 17.9694 5.40963 17.9708C5.2177 17.9722 5.03034 17.9122 4.87491 17.7996C4.71948 17.687 4.60412 17.5276 4.54569 17.3448C4.48725 17.162 4.4888 16.9653 4.5501 16.7834L6.1001 12.0084L2.04176 9.06671C1.876 8.95773 1.75047 8.79747 1.68437 8.61042C1.61826 8.42338 1.6152 8.21984 1.67566 8.03089C1.73612 7.84195 1.85678 7.67799 2.0192 7.56408C2.18161 7.45016 2.37686 7.39255 2.5751 7.40005H7.5751L9.16676 2.65838Z" fill="#FBAD39"/></svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.16676 2.65838C9.22433 2.47584 9.33858 2.31641 9.49294 2.20324C9.64729 2.09007 9.8337 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5573 2.20324C10.7116 2.31641 10.8259 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6317 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3329 8.05589C18.3933 8.24484 18.3903 8.44838 18.3242 8.63542C18.2581 8.82247 18.1325 8.98273 17.9668 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5213 17.187 15.4628 17.3698C15.4044 17.5526 15.2891 17.712 15.1336 17.8246C14.9782 17.9372 14.7908 17.9972 14.5989 17.9958C14.407 17.9944 14.2205 17.9316 14.0668 17.8167L10.0001 14.8417L5.94176 17.7917C5.78802 17.9066 5.60157 17.9694 5.40963 17.9708C5.2177 17.9722 5.03034 17.9122 4.87491 17.7996C4.71948 17.687 4.60412 17.5276 4.54569 17.3448C4.48725 17.162 4.4888 16.9653 4.5501 16.7834L6.1001 12.0084L2.04176 9.06671C1.876 8.95773 1.75047 8.79747 1.68437 8.61042C1.61826 8.42338 1.6152 8.21984 1.67566 8.03089C1.73612 7.84195 1.85678 7.67799 2.0192 7.56408C2.18161 7.45016 2.37686 7.39255 2.5751 7.40005H7.5751L9.16676 2.65838Z" fill="#FBAD39"/></svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.16676 2.65838C9.22433 2.47584 9.33858 2.31641 9.49294 2.20324C9.64729 2.09007 9.8337 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5573 2.20324C10.7116 2.31641 10.8259 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6317 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3329 8.05589C18.3933 8.24484 18.3903 8.44838 18.3242 8.63542C18.2581 8.82247 18.1325 8.98273 17.9668 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5213 17.187 15.4628 17.3698C15.4044 17.5526 15.2891 17.712 15.1336 17.8246C14.9782 17.9372 14.7908 17.9972 14.5989 17.9958C14.407 17.9944 14.2205 17.9316 14.0668 17.8167L10.0001 14.8417L5.94176 17.7917C5.78802 17.9066 5.60157 17.9694 5.40963 17.9708C5.2177 17.9722 5.03034 17.9122 4.87491 17.7996C4.71948 17.687 4.60412 17.5276 4.54569 17.3448C4.48725 17.162 4.4888 16.9653 4.5501 16.7834L6.1001 12.0084L2.04176 9.06671C1.876 8.95773 1.75047 8.79747 1.68437 8.61042C1.61826 8.42338 1.6152 8.21984 1.67566 8.03089C1.73612 7.84195 1.85678 7.67799 2.0192 7.56408C2.18161 7.45016 2.37686 7.39255 2.5751 7.40005H7.5751L9.16676 2.65838Z" fill="#FBAD39"/></svg>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.16676 1.65838C9.22433 1.47584 9.33858 1.31641 9.49294 1.20324C9.64729 1.09007 9.8337 1.02905 10.0251 1.02905C10.2165 1.02905 10.4029 1.09007 10.5573 1.20324C10.7116 1.31641 10.8259 1.47584 10.8834 1.65838L12.4334 6.42505H17.4334C17.6317 6.41755 17.8269 6.47516 17.9893 6.58908C18.1517 6.70299 18.2724 6.86695 18.3329 7.05589C18.3933 7.24484 18.3903 7.44838 18.3242 7.63542C18.2581 7.82247 18.1325 7.98273 17.9668 8.09171L13.9084 11.0334L15.4584 15.8084C15.5197 15.9903 15.5213 16.187 15.4628 16.3698C15.4044 16.5526 15.2891 16.712 15.1336 16.8246C14.9782 16.9372 14.7908 16.9972 14.5989 16.9958C14.407 16.9944 14.2205 16.9316 14.0668 16.8167L10.0001 13.8417L5.94176 16.7917C5.78802 16.9066 5.60157 16.9694 5.40963 16.9708C5.2177 16.9722 5.03034 16.9122 4.87491 16.7996C4.71948 16.687 4.60412 16.5276 4.54569 16.3448C4.48725 16.162 4.4888 15.9653 4.5501 15.7834L6.1001 11.0084L2.04176 8.06671C1.876 7.95773 1.75047 7.79747 1.68437 7.61042C1.61826 7.42338 1.6152 7.21984 1.67566 7.03089C1.73612 6.84195 1.85678 6.67799 2.0192 6.56408C2.18161 6.45016 2.37686 6.39255 2.5751 6.40005H7.5751L9.16676 1.65838Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <p class="text-gray-500">440+ Reviewer</p>
            </div>
            <br>
            <p class="text-gray-500">{{ this.carid.description }}</p>
            <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 py-6">
              <div class="text-gray-400">Type Car</div>
              <div class="text-gray-600 font-semibold">{{ this.carid.type}}</div>
              <div class="text-gray-400">Capacity</div>
              <div class="text-gray-600 font-semibold">{{ this.carid.people}} Person</div>
              <div class="text-gray-400">Gasoling</div>
              <div class="text-gray-600 font-semibold">{{ this.carid.gasolineLiter}}L</div>
              <div class="text-gray-400">Steering</div>
              <div class="text-gray-600 font-semibold">{{ this.carid.kindOfTransition}}</div>
            </div>
            <div class="mt-auto">
              <div class="flex justify-between items-center">
                <div class="flex items-end space-x-1">
                  <p class="font-bold text-2xl">${{ this.carid.pricePerDay }}/</p>
                  <p class="font-semibold text-gray-400">days</p>
                </div>
                <div>
                  <button class="bg-blue-600 p-2 px-5 rounded text-white font-semibold">Rent Now</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <!-- recommandation -->
        <div class="p-7" id="targetDiv">
          <div class="font-semibold p-3 pb-5 text-gray-400 text-base">Recomendation Car</div>
          <div v-if="this.cars.length > 0" class="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div v-for="(car) in this.cars">
              <CarComponent :car='car'/>
              
            </div>
            
          </div>
          <div v-else class="flex justify-center">
            <Loading/>
          </div>
        </div>
        <div>
        </div>
  
      </div>
  
      <!-- footer -->
      <Footer/>
    </div>
  
  
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  import 'assets/css/main.css';
  import { useMyFavoriteStore,pinia } from '~/store/fav.js';
  
  export default {
    data(){
      return {cars:[], populars:[], car:[], carid:{}, all:{},storefav:useMyFavoriteStore(pinia)}
    },
    mounted(){
      this.getCars();
      this.getPopular();
      this.getCar();
    },
    methods:{
      getCars(){axios.get('https://dm-assignment-commonshare.koyeb.app/api/cars')
    .then((res) => {
      this.cars = res.data.data;
      this.all = res.data.data;
    })},
      getPopular(){axios.get('https://dm-assignment-commonshare.koyeb.app/api/cars/popular')
    .then((res) => {
      this.populars = res.data;
    })},
    getCar(){axios.get(`https://dm-assignment-commonshare.koyeb.app/api/cars/${this.$route.params.id}`)
    .then((res) => {
      this.carid = res.data;
    })},
    search(name){
    const lower = name.toLowerCase();
    this.cars = this.all.filter(obj=>obj.name.toLowerCase().includes(lower))
    var targetDiv = document.getElementById('targetDiv');
    targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },
  filterfav(){
    this.cars = this.storefav.favourites;
    var targetDiv = document.getElementById('targetDiv');
    targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
    }
  }
  </script>

<style>

</style>
