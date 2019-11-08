<template>
    <div>
        <van-row   type="flex" justify="center">
            <van-col v-for="item in items"  v-bind:key="item.key">{{item}}</van-col>
        </van-row>
        <van-row  v-for="item in items" type="flex" justify="center" v-bind:key="item.key">
            <van-col  >{{item}}</van-col>
        </van-row>
    </div>

</template>
<script>
    export default {
        name:"TrainList",
        data() {
            return {
                items: ['a', 'b', 'c']
            }
        }, methods: {
            onSearch() {
                this.$http.get('http://yapi.demo.qunar.com/mock/64532/bbyy_employee/user/aboutAs').then(result => {
                    result.toString()
                }), err => {
                    alert(err);
                }

            }

        },
    }
</script>