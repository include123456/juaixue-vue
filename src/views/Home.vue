<template>
  <div class="home">
    <IndexPage></IndexPage>
    <Banner></Banner>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import IndexPage from '@/components/IndexPage.vue'
export default {
  name: 'Home',
  components: {
    Banner,
    IndexPage
  }
}
</script>
