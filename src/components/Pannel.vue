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
      class="pannel"
      :style="pannel.style">
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
          style: {
            backgroundColor: 'lightcoral'
          }
        },
        {
          id: 'fuga',
          style: {
            backgroundColor: 'lightblue'
          }
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
  transition: all 0.5s ease;
  /* background-color: lightcoral; */
  box-sizing: border-box;
  border: 3px solid #222;
  margin-bottom: 2px;
}
</style>
