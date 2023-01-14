<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { WordCloud } from '@antv/g2plot'

// 渲染WordCloud
let wordCloud
onMounted(() => {
  wordCloud = new WordCloud('wordcloud-container', {
    data: [
      {
        name: 'a-name',
        value: 12,
      },
      {
        name: 'b-name',
        value: 12,
      },
      {
        name: 'vanlee',
        value: 998,
      },
    ],
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [14, 35],
      rotation: 0,
    },
    // 返回值设置成一个 [0, 1) 区间内的值，
    // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
    random: () => 0.5,
  })
  wordCloud.render()
})

onBeforeUnmount(() => {
  wordCloud.destroy()
})
</script>

<template>
  <div id="wordcloud-container"></div>
</template>
