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
      <!-- ads -->
      <Ads/>
      
      <!-- popular -->
      <div class="p-7">
        <div class="font-semibold p-3 pb-5 text-gray-400 text-base">Popular Cars</div>
        <div class="overflow-y-auto">   
          <div v-if="this.populars.length > 0" class="flex gap-4">
                <div v-for="(popular, index)  in this.populars">
                  <CarComponent :car='popular'/>
                </div>
              </div>
          <div v-else class="flex justify-center">
            <Loading/>
          </div>
        </div>
      </div>
      <!-- recommandation -->
      <div class="p-7" id="targetDiv">
        <div class="font-semibold p-3 pb-5 text-gray-400 text-base">Recomendation Car</div>
        <div v-if="this.cars.length > 0" class="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div v-for="(car, index) in this.cars">
            <CarComponent :v-bind='index'  :car='car'/>
            
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
    return {cars:[], populars:[], car:[], all:{},storefav:useMyFavoriteStore(pinia)}
  },
  mounted(){
    this.getCars();
    this.getPopular();
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
