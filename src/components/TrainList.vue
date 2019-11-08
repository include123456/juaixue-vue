<template>
    <div>
        <van-row   type="flex" justify="center">
            <van-col v-for="item in items"  v-bind:key="item.key">{{item.images}}</van-col>
        </van-row>
        <van-row  v-for="item in items" type="flex" justify="center" v-bind:key="item.key">
            <van-col  >{{item.images}}</van-col>
        </van-row>
    </div>

</template>
<script>
    export default {
        name:"TrainList",
        data() {
            return {
                items: "[{images:123,size:123},{images:234,size:456}]"
            }
        }, methods: {
            onSearch() {
                this.$http.get('http://yapi.demo.qunar.com/mock/64532/bbyy_employee/user/aboutAs').then(result => {
                    result.toString()
                    this.items = result;
                }), err => {
                    alert(err);
                }

            }

        },
    }
</script>