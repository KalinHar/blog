<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="!posts.length">Loading...</div>
    <PostsList :posts="posts" />
  </div>
</template>

<script>
import PostsList from '../components/PostsList.vue'
import getPosts from '../composables/getPosts'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { PostsList },
  setup() {
    const {posts, error, load } = getPosts()
    load()

    return { posts, error }
  }
}
</script>
