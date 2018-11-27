<template>
  <div id="app">
  	<el-container>
  		<Board></Board>
  	</el-container>
  </div>
</template>

<script>
import Board from './components/monitor-board/board'

export default {
  name: 'app',
  components: {
    Board
  },
  data: function () {
    return {
      texts: [],
      images: [{
        src: './1.jpg',
        x: 0,
        y: 0,
        w: 100,
        h: 100
      }, {
        src: './1.jpg',
        x: 0,
        y: 0,
        w: 100,
        h: 100
      }]
    }
  },
  methods: {
    addText () {
      this.texts.push({
        value: '',
        x: 0,
        y: 0,
        w: 100,
        h: 100
      })
    },
    onResizstop (left, top, width, height) {
      console.log(1111, left, top, width, height)
    },
    onDragstop (left, top) {
      console.log(222, left, top)
    },
    onActivated () {
      console.log(1111)
    }
  }
}
</script>

<style>
  .active {
    border: 1px dashed black;
  }
  body {
  	padding: 20px;
  }
  h2 {
    opacity: 0.3;
    padding: 0 0 0 20px;
    z-index: -1;
  }
  .dragHandle {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    font-size: 20px;
    background-color: lightgrey;
  }
  .vdr {
    background: white;
  }
</style>
