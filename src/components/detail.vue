<template>
    <div class="artical">
        <my-header :name="type_name"></my-header>
        <!--{{ displayedItems }}-->
        <ul>
            <div class="content">

                <div class="main">
                    <div class="zhong">
                        <li v-if="articas" v-for="( artical, index) in articas">
                            <!--<div class="title">{{artical.BT}}</div>
                            <div class="second">
                                <span>{{artical.FBSJ}}</span>
                                <span>{{artical.WZLY}}</span>
                                <span>{{artical.ZZ}}</span>
                            </div>
                            <div class="content" v-html="artical.NR">
                            </div>-->
                            <div class="position" v-if="artical">
                                <span>您当前所在的位置：熊粉课堂 > {{type_name}} > {{ artical && artical.BT }}</span>
                            </div>
                            <div class="title">
                                <h3 class="titleArticle">{{artical.BT}}</h3>
                                <span class="fbTime">{{artical.FBSJ}}</span>
                                <span class="comeFrom">{{artical.WZLY}}</span>
                                <span class="author" style="padding-right:0">{{artical.ZZ}}</span>
                            </div>
                            <div class="text NRtext" v-html="artical.NR">
                            </div>

                        </li>
                        <div class="detailFooter">
                            <span>总结起来，要是投资者近期短期没有大额支出，而且闲置资金比较多，且资金持有人工作繁忙平时没有时间管理理财账户，或者对互联网金融了解不深，最好去选中一些
                                    靠谱平台长期标，要是你短期内有资金使用计划，那就选择短期模式。无论是短期标还是长期标，都有自身的有事和薄弱环节，投资者可根据自己的习惯和资产闲置情况权衡好其中的利弊之后再选择
                            </span>
                        </div>
                        <div class="pic">
                            <button @click="window.history.back()" class="goBack">返回列表</button>
                        </div>
                        <div class="floatRight" style="color: #5B5B5B;">
                            <span v-for="page in lastPage">上一篇：<a :href="get_page_url(page)" style="color: #5B5B5B;">{{page.BT}}</a></span>
                            <span v-show="page in lastPage">上一篇：<a href="/" style="color: #5B5B5B;">没有了</a></span>
                        </div>
                        <div class="floatRight" style="color: #5B5B5B;">
                            <span v-for="page in nextPage">下一篇：<a :href="get_page_url(page)" style="color: #5B5B5B;">{{page.BT}}</a></span>
                            <span v-show="page in nextPage">上一篇：<a href="/" style="color: #5B5B5B;">没有了</a></span>
                        </div>



                    </div>
                </div>
            </div>



        </ul>

        <my-footer></my-footer>
    </div>
</template>

<script>

let isInitialRender = true

import MyHeader from "./header.vue"
import MyFooter from "./footer.vue"

function get_type(query) {
    for(const name in query) {
        if (name.startsWith("type@")) {
            return name.slice(5)
        }
    }
}
// 状态转显示名
const typeName = {
    'hot': '最热',
    'new': '最新',
    '1': '网络借贷之事普及专栏',
    '2': '风险教育专栏',
    '3': '互联网金融资讯',
    '4': '投资课堂',
    '5': '银行课堂',
    '6': '贷款课堂',
    '7': '股票课堂',
    '8': '基金课堂',
    '9': '外汇课堂',
    '10': '信用卡课堂'
};
// url名转状态
const nameType = {
    'hot': 'hot',
    'new': 'new',
    'WLJD': '1',
    'FXJY': '2',
    'HLWJR': '3',
    'TZKT': '4',
    'YHKT': '5',
    'DKKT': '6',
    'GPKT': '7',
    'JJKT': '8',
    'WHKT': '9',
    'XYKKT': '10'
};
// 状态转url名
const statusType = {
    'hot': 'hot',
    'new': 'new',
    '1': 'WLJD',
    '2': 'FXJY',
    '3': 'HLWJR',
    '4': 'TZKT',
    '5': 'YHKT',
    '6': 'DKKT',
    '7': 'GPKT',
    '8': 'JJKT',
    '9': 'WHKT',
    '10': 'XYKKT'
}
// /type991
export default {
    name: 'item-list',
    preFetch: function(store, route) {
        const param = /([A-Za-z]+)(\d+)/.exec(route.params.type);
        if (param && param.length > 2) {
            const type = param[1];
            const id = param[2];
            const params = {
                id: id,
                type: nameType[type]
            }
            return store.dispatch('GET_ARTICAL', params)
        }


    },

    components:{
        MyHeader,
        MyFooter

    },
    created() {
        if (!isInitialRender) {
            this.loadData()
        }
    },
    data () {

        const item = isInitialRender ? this.$store.state.item: {}
        const data = {
            loading: false,
            transition: 'slide-up',
            displayedItems: item,
            articas: item && item.body && item.body.pageData, /*&& item.body.pageData.data*/
            lastPage: item && item.body && item.body.lastPage,
            nextPage: item && item.body && item.body.nextPage
        }
        isInitialRender = false
        return data
    },
    computed: {
        'type_name': function() {
            const param = /([A-Za-z]+)(\d+)/.exec(this.$store.state.route.params.type);
            const type = param[1];
            return typeName[nameType[type]];
        }
    },
    methods: {
        loadData: function () {
            const param = /([A-Za-z]+)(\d+)/.exec(this.$store.state.route.params.type);
            if (param && param.length > 2) {
                const type = param[1];
                const id = param[2];
                const params = {
                    id: id,
                    type: nameType[type]
                }
                return this.$store.dispatch('GET_ARTICAL', params)
            }
        },
        get_page_url(data) {
//            console.log(data)
//            return data && "/" + statusType[data['SSLX']] + data['WZZX_ID'];
            return data && "/" + statusType[data['SSLX']] + data['WZZX_ID'];
        }
    }
}
</script>

<style scoped>
    .content{
        width: 100%;
        background: #f5f5f5;
        position: relative;
        /*top: -89px;*/
        /*padding-top: 75px;*/
    }
    .main{
        width: 1200px;
        margin: 0 auto;
    }
    .position {
        width: 100%;
        height: 62px;
        line-height: 62px;
        /*margin-top: 90px;*/
        color: #BABABA;
        font-size: 14px;
    }
    .zhong{
        width: 100%;
        background: #FFF;
        overflow: hidden;
    }
    ul{
        list-style: none;
        width: 100%;
        background: #f5f5f5;
        position: relative;
        /*top: -89px;*/
        /*padding-top: 75px;*/
    }
    .title{
        width: 100%;
        /* height: 102px; */
        border-bottom: 2px solid #b1cbc8;
        text-align: center;
        padding-top: 61px;
        padding-bottom: 24px;
    }
    .title h3{
        /*margin-bottom: 14px;*/
        font-size: 24px;
        color: #5A5A5A;
        width: 100%;
        margin-top: -17px;
        margin-bottom: 22px;
        position: relative;
        font-family: inherit;
        line-height: 1.1;
        font-weight: 400;
    }
    .title span{
        padding-right:72px;
        font-size:14px;
        color:#BABABA;
    }
    .text{
        /*text-indent: 2em;*/
        margin-left: 50px;
        font-size: 14px;
        color: #7F7F7F;
        line-height: 24px;
        margin-top: 27px;
        margin-right: 50px;
        /*padding: 30px 35px;*/
    }

    .detailFooter{
        padding: 0 51px;
        text-indent: 2em;
        color: rgb(51, 51, 51);
        font-family: 'Hiragino Sans GB', 'Microsoft Yahei', 宋体;
        white-space: normal;
        line-height: 2em;
        background-color: rgb(255, 255, 255);
    }

    .pic{
        width: 100%;
        margin-top: 52px;
        margin-bottom: 10px;
    }
    .goBack{
        margin-left: 1025px;
        height: 36px;
        width: 86px;
    }
    .floatRight{
        margin-left: 750px;
        display: block;
        float: right;
        margin-bottom: 13px;
        margin-right: 50px;
        font-size: 14px;
        color: #5B5B5B;
    }
    .floatRight a{
        text-decoration:none;
    }

</style>
