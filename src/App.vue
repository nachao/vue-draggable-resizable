<template>
  <div id="app">
  	<el-container>
  		<Board></Board>
  	</el-container>
    <!-- <button @click="addText">添加文本</button> -->
    <!-- <li v-for="item in texts">{{ item.value }}</li> -->
    <!-- <button>上传图片</button> -->
    <li></li>
    <!-- <div style="height: 500px; width: 500px; margin: 20px; border: 1px solid red; position: relative;">
      <VueDraggableResizable :x="50" :y="50" :w="400" :h="400" :parent="true">
        <p>Component</p>
      </VueDraggableResizable>
    </div>
    <div style="height: 500px; width: 500px; margin: 20px; border: 1px solid red; position: relative;">
      <h2>Grid 30x30</h2>
      <VueDraggableResizable :x="50" :y="50" :w="400" :h="400" :grid="[30, 30]" :parent="true">
      <p>Component</p>
      </VueDraggableResizable>
    </div>
    <div style="height: 500px; width: 500px; margin: 20px; border: 1px solid red; position: relative;">
      <h2>Custom handler</h2>
      <VueDraggableResizable :x="50" :y="50" :w="150" :h="50" :parent="true" :resizable="false" :dragHandle="'.dragHandle'">
        <p>Component</p>
        <input>
        <span class="dragHandle">
          =
        </span>
      </VueDraggableResizable>
    </div> -->
    {{ texts }}
    {{ images }}
    <div style="height: 2000px; width: 2000px; margin: 20px; border: 1px solid red; position: relative;">
      <h2>Grid 30x30 and handler</h2>
      <template v-for="item in texts">
        <VueDraggableResizable
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :parent="true"
          :grid="[30, 30]"
          :resizable="true"
          :active="true"
          :dragHandle="'.dragHandle'"
          @resizestop="onResizstop"
          @dragstop="onDragstop">
          <input v-model="item.value">
          <p>1111</p>
          <span class="dragHandle">=</span>
        </VueDraggableResizable>
      </template>
      <template v-for="item in images">
        <VueDraggableResizable
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :parent="true"
          :resizable="true"
          :active="true"
          @activated="onActivated"
          @resizestop="onResizstop"
          @dragstop="onDragstop">
          <!-- <i style="display: block; width: 100%; height: 100%; background: red; position: absolute; left: 0px; top: 0px; z-index: 2;"></i> -->
          123
          <!-- <p>1111</p> -->
          <!-- <span class="dragHandle">=</span> -->
        </VueDraggableResizable>
      </template>
    </div>
  </div>
</template>

<script>
import VueDraggableResizable from './components/vue-draggable-resizable'
import Board from './components/monitor-board/board'

export default {
  name: 'app',
  components: {
    VueDraggableResizable,
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
