<template>
  <div class="home">
    <IndexPage></IndexPage>
    <Banner></Banner>
    <TrainList></TrainList>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import IndexPage from '@/components/IndexPage.vue'
import TrainList from '@/components/TrainList.vue'
export default {
  name: 'Home',
  components: {
    Banner,
    IndexPage,
    TrainList
  }
}
</script>
