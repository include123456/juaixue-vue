<template>
    <div>
       <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image"  style="width: auto;height: auto"/>
            </van-swipe-item>
        </van-swipe>
    </div>

</template>
<script>
    export default {
        name:'Banner',
        props: {
            msg: String
        },data() {
            return {
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ]
            }
        }
    }
</script>
<style scoped>

</style>