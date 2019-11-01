<template>
    <div>
        <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch"
        >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                value: 'msg'
            }
        },
        methods: {
            onSearch() {
                this.$http.get('http://yapi.demo.qunar.com/mock/64532/bbyy_employee/user/aboutAs').then(result=> {
                    result.toString()
                    alert(result);
                }),err=>{
                    alert(err);
                }

            }

        },
        name: 'IndexPage',
        props: {
            msg: String
        }
    }
</script>
<style scoped>

</style>