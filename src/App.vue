<template>
  <div class="profile">
    <img src="/images/link.jpg">
    <h1>Hello Hyrule</h1>
    <ul>
      <li v-html="post">
      </li>
    </ul>
  </div>
</template>

<script>
import post from './data/post.md'

export default {
  data: function() {
    return {
      post: post
    }
  }
}

</script>
