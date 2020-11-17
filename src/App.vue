<template>
  <h1>Kana to Romaji</h1>
  <h3>Train your hiragana and katakana</h3>
  <Exercise/>
  <hr>
  <Reference></Reference>
</template>

<script>
import Exercise from "@/components/Exercise";
import Reference from "@/components/Reference";

export default {
  name: 'App',
  components: {
    Exercise,
    Reference
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
