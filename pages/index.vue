<template>
  <div class="home-container">
    <VastArticleItem v-for="item in articleLists" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, useFetch, ref } from '@nuxtjs/composition-api'

import { IArticleItem } from '../types/index'
export default defineComponent({
  setup() {
    const articleLists = ref<IArticleItem[]>([])

    useFetch(() => {
      return (
        fetch('http://101.201.148.180:3009/api/v1/article?offset=0&limit=10')
          .then((response) => response.json())
          // .then((data: IArticleItem[]) => {
          .then((resData) => {
            // console.log('resData==', resData)
            articleLists.value = resData.data
          })
      )
    })
    // const ctx: any = useContext()

    // useFetch(async () => {
    //   posts.value = await ctx.$http
    //     .$get('https://jsonplaceholder.typicode.com/posts')
    //     .then((posts) => {
    //       console.log(posts)
    //       return posts.slice(0, 20)
    //     })
    // })

    return { articleLists }
  },
})
</script>
