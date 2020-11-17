<template>
  <div class="row container col-md-12">
    <button class="btn btn-primary col-md-2 offset-5" @click="showRef = !showRef">{{ displayMessage }}</button>
  <!--  <button @click="showRefH = !showRefH">{{ displayMessageH }}</button>
    <button @click="showRefK = !showRefK">{{ displayMessageK }}</button>-->
    <br/><br/>
    <img v-show="showRef" src="../assets/kanas2.png" class="img-fluid"/>
  <!--  <ul v-show="showRefH">
      <li v-for="h in hiragana" :key="h.kana">{{ h.kana }} : {{ h.romaji[0] }}</li>
    </ul>
    <ul v-show="showRefK">
      <li v-for="k in katakana" :key="k.kana">{{ k.kana }} : {{ k.romaji[0] }}</li>
    </ul>-->
  </div>
</template>

<script>
import katakana from "@/assets/constants/katakana";
import hiragana from "@/assets/constants/hiragana";

export default {
  data(){
    return{
      katakana: katakana,
      hiragana: hiragana,
      showRef: false,
      showRefH: false,
      showRefK: false
    }
  },
  computed:{
    displayMessage(){
      return this.showRef ? "Hide kana table" : "Show kana table";
    },
    displayMessageH(){
      return this.showRefH ? "Hide hiragana table" : "Show hiragana table";
    },
    displayMessageK(){
      return this.showRefK ? "Hide katakana table" : "Show katakana table";
    }
  }
}
</script>