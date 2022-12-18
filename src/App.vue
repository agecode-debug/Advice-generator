

<template>
  <div class="bg-dgBlue rounded-base w-112 flex content-center flex-col flex-wrap px-8 pt-12 box-content mobile:px-5 mobile:w-80">
    <label class="font-manrope text-nGreen tracking-label text-center text-base mb-6">ADVICE #{{advice.id}}</label>
    <h2 class="font-manrope font-extrabold text-quote text-lCyan text-center mb-8">"{{advice.advice}}"</h2>
    <DividerDesktop class="mx-auto mobile:hidden" />
    <DividerMobile class="mx-auto desktop:hidden tablet:hidden" />
    <button @click="getAdvice" class="transition ease-in-out delay-150 bg-nGreen w-14 h-14 flex content-center justify-center flex-wrap rounded-full mx-auto relative top-bottom hover:drop-shadow-button"><IconDice /></button>
  </div>
  <!-- <div class="font-manrope">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="#">Your Name Here</a>.
  </div> -->
</template>

<script setup>
import DividerDesktop from './components/icons/DividerDesktop.vue'
import DividerMobile from './components/icons/DividerMobile.vue'
import IconDice from './components/icons/IconDice.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios';

const advice = ref({})

onMounted(() => getAdvice())

async function getAdvice() {
  axios.get("https://api.adviceslip.com/advice").then(res => {
    advice.value = res.data.slip
    console.log(res.data.slip)
  })
}
</script>