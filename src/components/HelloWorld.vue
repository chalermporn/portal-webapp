<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="primary">Primary</button>
  </div>
</template>

<script>
import { Button } from "ant-design-vue";
export default {
  name: "HelloWorld",
  components: {
    Button
  },
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
