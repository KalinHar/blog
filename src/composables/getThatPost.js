import { ref } from 'vue'

const getThatPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts/' + id)
        if (!data.ok) {
          throw Error('no post')
        }
        post.value = await data.json()
      }
      catch (err) {
        error.value = err.message
      }
    }
    return { post, error, load }
}

export default getThatPost