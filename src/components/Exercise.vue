<template>
  <div class="row container col-md-12">
       <button class="btn btn-primary col-md-2 offset-2" @click="exercisesHiragana">Hiragana</button>
       <button class="btn btn-primary col-md-2 offset-1" @click="exercisesKatakana">Katakana</button>
       <button class="btn btn-primary col-md-2 offset-1" @click="exercisesBoth">Hiragana and Katakana</button>
        <div v-show="showExercise" class="col-md-6 offset-3">
          <p> Current Score: {{ currentScore }}</p>
          <p> High Score: {{highScore}}</p>
          <p>What is the romaji for</p>
          <h3 for="answer">{{ kana.kana }}</h3>
          <input type="text" @keyup.enter="checkAnswer" name="answer" v-model="answer">
        </div>

  </div>
</template>


<script>
import hiragana from "@/assets/constants/hiragana";
import katakana from "@/assets/constants/katakana";

export default{
  data() {
    return {
      katakana: katakana,
      hiragana: hiragana,
      currentScore: 0,
      highScore:0,
      previousIndex: 0,
      kanaList : [],
      showExercise: false,
      kana: { kana: "",
        romaji: [""]},
      answer: ""
    }
  },
  methods: {
    exercisesKatakana () {
      this.kanaList = katakana;
      this.startExercises();
    },
    exercisesHiragana(){
      this.kanaList = hiragana;
      this.startExercises();
    },
    exercisesBoth(){
      this.kanaList = hiragana.concat(katakana);
      this.startExercises();
    },
    startExercises(){
      this.showExercise = true;
      this.currentScore = 0;
      this.previousIndex = this.generateRandomNumber(0, this.kanaList.length-1, null);
      this.kana = this.kanaList[this.previousIndex];
    },
    checkAnswer(){
      if(this.answer.length > 0 && this.kana.romaji.includes(this.answer.toLowerCase().replace(/\s/g,''))){
        this.previousIndex = this.generateRandomNumber(0, this.kanaList.length-1, this.previousIndex);
        this.kana = this.kanaList[this.previousIndex];
        this.currentScore++;
      }else {
        this.currentScore = 0;
      }
        this.answer = "";

    },
    generateRandomNumber(min, max, except) {
      let nb = Math.round(Math.random() * (max - min)) + min;
      return (except && nb == except) ?  this.generateRandomNumber(min, max, except) : nb;
    },
  },
  watch:{
    currentScore: function (val) {
      if(this.highScore < val){
        this.highScore = val;
      }
    }
  }
}
</script>