<template>
  <div class="profile">
    <img src="/images/link.jpg">
    <h1>Hello Hyrule</h1>
    <ul>
      <li @click="klik">{{ post.title }} - {{ post.author }}
      <li v-html="post.__content">
      </li>
    </ul>
  </div>
</template>

<script>
import post from './data/post.md'

const getBundle = () => {
  import(/* webpackChunkName: "lodash" */ "lodash").then( _ => {
    console.log("imported", _);
  })
}


export default {
  data: function() {
    return {
      post: post
    }
  },
  methods: {
    klik() {
      console.log('Clicked')
      getBundle()
    }
  }
}

</script>
