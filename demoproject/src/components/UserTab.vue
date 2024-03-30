<template>
  <div class="demo">
    <h2>求和:{{$store.state.sum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <button @click="addOdd">奇数加</button>
    <button @click="addLater">等等加</button>
  </div>
</template>

<script>
export default {
  name: "UserTab",
  data() {
    return {
      name: "王潇",
      age: 18,
      sum: 0,
      n: 1,
    };
  },
  methods:{
    add(){
      // console.log(123)
      // this.sum += this.n
      this.$store.commit("JIA",this.n)
    },
    reduce(){
      // this.sum -= this.n
      this.$store.commit("JIAN",this.n)
    },
    addOdd(){
      // this.sum += this.n
      if(this.$store.state.sum %2){
        this.$store.dispatch("jia",this.n)
      }
    },
    addLater(){
      // this.sum += this.n
      setTimeout(()=>{
        this.$store.dispatch("jia",this.n)
      },3000)
    },
  },
  mounted(){
     console.log(this)
  }
  
};
</script>

<style>
.demo {
  /* background-color: red; */
  border: 2px solid red;
}
</style>