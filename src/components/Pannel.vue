<template>
  <draggable
  v-model="pannels"
  :options="{group:'pannel'}"
  @start="drag=true"
  @end="drag=false"
  >
    <transition-group>
      <div v-for="pannel in pannels"
      :key="pannel.id"
      class="pannel">
        {{pannel.msg}}
      </div>
    </transition-group>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'Pannel',
  components: {
    draggable
  },
  data () {
    return {
      msg: 'hey',
      pannels: [
        {
          id: 'hoge',
          msg: 'hoge'
        },
        {
          id: 'fuga',
          msg: 'fuga'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pannel {
  width: 100px;
  height: 100px;
  background-color: lightcoral;
}
</style>
