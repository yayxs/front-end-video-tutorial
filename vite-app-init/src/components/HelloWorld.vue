<template>
  <section>
    <h1>{{ msg }}</h1>
    <button @click="handleCountAddClick">count is: {{ count }}</button>
    <hr />
    <section style="border: 1px solid red; width: 500px; height: 200px">
      <input type="text" v-model="currIptVal" />
    </section>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      currIptVal: "currIptVal",
      count: 0,
      info: {
        name: "infoName",
      },
      listArr: [],
    };
  },
  methods: {
    handleCountAddClick() {
      // console.log(this);
      // let { count, msg } = this;
      // count++;
      this.count++;
    },
  },
};
</script>
