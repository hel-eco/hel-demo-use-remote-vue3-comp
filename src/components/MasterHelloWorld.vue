<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <RemoteComp name="hel remote vue3 comp" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import comps from 'hel-tpl-remote-vue3-comps-ts'

console.log('see RemoteHelloWorld', comps.HelloWorld.name)
console.log('see RemoteHelloWorld', comps.HelloWorld)

export default defineComponent({
  name: 'ProjHelloWorld',
  components: {
    RemoteComp: comps.HelloWorld
  },
  props: {
    msg: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
