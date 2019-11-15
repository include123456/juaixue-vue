<template>
    <div>
        <form action="/">
            <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    show-action
            />
        </form>
    </div>
</template>

<script>
    import {Row, Col, Icon, Cell, CellGroup, Search} from 'vant';

    export default {
        data() {
            return {
                value: ""
            }
        },
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Search.name]: Search
        }, method: {
            onCancel: function () {
                alert(1);
            }, onSearch: function () {

            }
        }
    };
</script>

<style lang="less">
</style>