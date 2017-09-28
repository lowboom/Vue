<template>
    <div>


        <div class="full-wrap header">
            <div class="sm-navbar">
                <div class="wrap">
                    <div class="sm-icons">
                        <span class="tel"><i></i>40067-40088</span>
                        <a href="javascript:;" class="phone"
                           @mouseover="toggleShow()"
                           @mouseout="toggleShow()"> <i></i></a>
                        <a href="http://weibo.com/p/1005055264039865/home?from=page_100505&mod=TAB&is_all=1" target="_blank"
                           class="weibo"
                           @mouseover="toggleWeibo()"
                           @mouseout="toggleWeibo()"><i></i></a>
                        <a href="javascript:;" class="wx"
                           @mouseover="toggleWeixin()"
                           @mouseout="toggleWeixin()"><i></i></a>
                        <!--<a href="javascript:;" class="qq"><i></i></a>-->
                        <!--<span style="color: #B5B5B5;">温馨提示：市场有风险，投资需谨慎</span>-->
                    </div>
                    <div class="sm-menu">
                        <!--<a class="login" href="www.hongbaodai.com/p2p/user/login.html">立即登录</a>-->
                        <!--<a class="login" href="www.hongbaodai.com/p2p/user/login.html" v-if="get(nickName)">{{nickName}}</a>-->
                        <a class="reg" href="http://www.hongbaodai.com/p2p/user/register.html">注册  </a>
                        <!--<router-link :to="index">注册  </router-link>-->
                        <!-- &nbsp;&nbsp; -->
                        <a href="http://www.hongbaodai.com/p2p/bearClass/bearClass.html" style="margin-right: 5px;">熊粉课堂</a>
                        <span style="display: inline-block;border: 1px solid #B5B5B5;height: 11px;margin-top: 2px;margin-bottom: -2px;"></span>
                        <a href="http://www.hongbaodai.com/p2p/info/disclosure.html" style="margin-left: 5px;">信息披露</a>
                    </div>




                </div>

                <div class="phoneS" v-show="isShow">
                    <div class="phoneL"></div>
                    <div class="phoneR">
                        <h3>红包贷APP</h3>
                        <p style="width: 153px;"><span>下载红包贷 APP,随时随地 ,贴心投资 !</span>
                        <div class="phoneIOS"><a href=""></a></div>
                        <div class="phoneAnd"><a href=""></a></div>
                    </div>

                </div>
                <div class="weiboS" v-show="isWeibo">

                </div>
                <div class="wxS" v-show="isWeixin">

                </div>


            </div>
            <div class="wrap navbar">
                <a href="/" class="navbar-brand">红包贷官网</a>
                <ul class="nav nav-right">
                    <li class="active"><a href="/">首页</a></li>
                    <li><a href="http://www.hongbaodai.com/p2p/loan/enterprise/enterpriseListLoan.html">我要投资</a></li>
                    <li><a href="http://www.hongbaodai.com/p2p/loan/enterprise/raiseLoan.html">我要借款</a></li>
                    <!--<li style="margin-left: 0"><a href=""></a></li>  &lt;!&ndash;新手体验&ndash;&gt;-->
                    <li><a href="javascript:;" id="myaccount">我的账户</a></li>
                    <li><a href="http://www.hongbaodai.com/guidelines.html">新手指引</a></li>
                    <li><a href="http://www.hongbaodai.com/security.html">安全保障</a></li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>


    export default {
        data () {
        return {
            isShow: false,
            isWeibo: false,
            isWeixin: false

        }

        },
        methods: {
            toggleShow: function() {
                this.isShow = !this.isShow
            },
            toggleWeibo: function() {
                this.isWeibo = !this.isWeibo
            },
            toggleWeixin: function() {
                this.isWeixin = !this.isWeixin
            }

        }
    }
</script>

<style scoped>

    /*
*   name: tools;
*   description: 基本工具类;
*/
  /*  @font-face {
        font-family: 'iconfont';
        src: url('fonts/iconfont.eot');
        /!* IE9*!/
        src: url('fonts/iconfont.eot?#iefix') format('embedded-opentype'), /!* IE6-IE8 *!/ url('fonts/iconfont.woff') format('woff'), /!* chrome、firefox *!/ url('fonts/iconfont.ttf') format('truetype'), /!* chrome、firefox、opera、Safari, Android, iOS 4.2+*!/ url('fonts/iconfont.svg#iconfont') format('svg');
        /!* iOS 4.1- *!/
    }*/
    /*
    *   @style: 超出部分 默认为省略号; clip 为直接省略
    */
    .theme-popover-mask {
        z-index: 98;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.4;
        filter: alpha(opacity=40);
        display: none;
    }
    .theme-popover {
        display: none;
        z-index: 99;
        position: fixed;
        top: 50%;
        left: 50%;
        border-radius: 5px;
        border: solid 2px #666;
        background-color: #fff;
        box-shadow: 0 0 10px #666;
        min-width: 320px;
        max-width: 500px;
    }
    .cn-dialog-confirm-text {
        bottom: 0px;
        min-height: 50px;
        display: table;
        vertical-align: middle;
    }
    .theme-poptit {
        border-bottom: none;
        padding: 12px;
        position: relative;
    }
    .theme-popbod {
        padding-top: 5px;
        padding-bottom: 20px;
        color: #444;
        padding-left: 20px;
        padding-right: 20px;
    }
    textarea {
        font-family: 'Microsoft Yahei', "STHeiti", sans-serif;
    }
    .gray {
        background-color: #F8F8F8;
    }
    .header {
        min-width: 1000px;
        background-color: #FFF;/*
  margin-bottom: 13px;*/
        border-bottom: 1px solid  #DDD;
        box-shadow: 0 0 20px 1px rgba(67, 81, 89, 0.1);
    }
    .header .sm-navbar {
        height: 38px;
        background-color: #454646;
        overflow: hidden;
        *zoom: 1;
    }
    .header .sm-navbar:after {
        content: '\20';
        display: block;
        height: 0;
        clear: both;
    }
    .header .sm-navbar .wrap{
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }

    .phoneS{
        position: absolute;
        top: 50px;
        left: 505px;
        margin-top: 3px;
        padding-top: 21px;
        width: 310px;
        height: 172px;
        z-index: 99;
        background-color: #EBEBEB;
        border-radius: 20px;
        display: block;
    }

    .phoneH{
        display: block;
    }
    .phoneL{
        float: left;
        width: 152px;
        height: 150px;
        background-image: url(/dist/img/header.icons.176fda9.png);
        background-repeat: no-repeat;
        background-position: -224px -143px;
        z-index: 10000000;
        /*background-color: red;*/
    }
    .phoneR{
        float: left;
        /*width: 200px;*/
        height: 100px;
        background-repeat: no-repeat;
        background-position: 0px 0px;
        z-index: 10000000;
        /* background-color: yellow; */
        margin-top: -28px;
    }

    .phoneIOS{
        width: 121px;
        height: 27px;
        background-image: url(/dist/img/header.icons.176fda9.png);
        background-repeat: no-repeat;
        background-position: -112px -198px;
        border: 1px solid #2DB1FF;
        margin-bottom: 10px;
    }
    .phoneAnd{
        width: 121px;
        height: 27px;
        background-image: url(/dist/img/header.icons.176fda9.png);
        background-repeat: no-repeat;
        background-position: -112px -198px;
        border: 1px solid #2DB1FF;
    }

    .weiboS{
        position: absolute;
        top: 50px;
        left: 604px;
        margin-top: 3px;
        padding-top: 15px;
        background-color: #EBEBEB;
        width: 164px;
        height: 143px;
        background-image: url(/dist/img/wb-ewm.f8e6539.png);
        background-repeat: no-repeat;
        z-index: 99;
    }

    .weiboHead{
        padding-left: 8px;
    }

    .weiboFooter{
        width: 137px;
        height: 115px;
        background-image: url(/dist/img/header.icons.176fda9.png);
        background-repeat: no-repeat;
        background-position: 24px -139px;
        z-index: 10000000;
    }


    .wxS{
        position: absolute;
        top: 50px;
        left: 640px;
        padding-top: 15px;
        background-color: #EBEBEB;
        width: 165px;
        height: 158px;
        z-index: 99;
        background-image: url(/dist/img/wx-ewm.eeb7a64.png);
        background-repeat: no-repeat;
    }

    /*.weixinHead{
        padding-left: 8px;
    }

    .weixinContent{
        width: 137px;
        height: 115px;
        background-image: url(/dist/img/header.icons.176fda9.png);
        background-repeat: no-repeat;
        background-position: 24px -139px;
        z-index: 10000000;
    }
    .weixinFooter{

    }
*/
    .header .sm-navbar .sm-icons {
        float: left;
        line-height: 14px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .header .sm-navbar .sm-icons .tel,
    .header .sm-navbar .sm-icons .phone,
    .header .sm-navbar .sm-icons .weibo,
    .header .sm-navbar .sm-icons .wx,
    .header .sm-navbar .sm-icons .qq {
        display: inline-block;
        margin-right: 20px;
    }
    .header .sm-navbar .sm-icons .tel i,
    .header .sm-navbar .sm-icons .phone i,
    .header .sm-navbar .sm-icons .weibo i,
    .header .sm-navbar .sm-icons .wx i,
    .header .sm-navbar .sm-icons .qq i {
        display: inline-block;
        margin-right: 8px;
    }
    .header .sm-navbar .sm-icons .tel {
        margin-right: 40px;
        padding-top: 6px;
        font-size: 19px;
        color: #B5B5B5;
    }
    .header .sm-navbar .sm-icons .tel i {
        width: 19px;
        height: 19px;
        background-image: url('../../public/header.icons.png');
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }
    .header .sm-navbar .sm-icons .tel:hover {
        color: #FFF;
    }
    .header .sm-navbar .sm-icons .tel:hover i {
        background-image: url('../../public/header.icons.png');
        background-repeat: no-repeat;
        background-position: -155px 0px;
    }
    .header .sm-navbar .sm-icons .phone {
        width: 12px;
        height: 21px;
        padding-top: 4px;
        background-image: url('../../public/header.icons.png');
        background-repeat: no-repeat;
        background-position: -35px 0px;
    }
    .header .sm-navbar .sm-icons .phone:hover {
        background-image: url('../../public/header.icons.png');
        background-repeat: no-repeat;
        background-position: -185px 0px;
    }
    .header .sm-navbar .sm-icons .weibo {
        width: 22px;
        height: 17px;
        padding-top: 3px;
        background-image: url('../../public/header.icons.png');
        background-repeat: no-repeat;
        background-position: -65px 0px;
    }
    .header .sm-navbar .sm-icons .weibo:hover {
        background-image: url('../../public/header.icons.png');
        background-repeat: no-repeat;
        background-position: -205px 0px;
    }
    .header .sm-navbar .sm-icons .wx {
        width: 23px;
        height: 18px;
        padding-top: 4px;
        background-image: url('../../public/header.icons.png');
        background-repeat: no-repeat;
        background-position: -100px 0px;
    }
    .header .sm-navbar .sm-icons .wx:hover {
        background-image: url('../../public/header.icons.png');
        background-repeat: no-repeat;
        background-position: -240px 0px;
    }
    .header .sm-navbar .sm-icons .qq {
        width: 20px;
        height: 20px;
        padding-top: 4px;
        background: url('/commons/images/qq.png') no-repeat;
    }
    .header .sm-navbar .sm-icons .qq:hover {
        background: url('/commons/images/qq_hover.png') no-repeat;
    }
    .header .sm-navbar .sm-menu {
        position: relative;
        float: right;
        padding-top: 10px;
    }
    .header .sm-navbar .sm-menu a {
        display: inline-block;
        margin-left: 20px;
        line-height: 22px;
        font-size: 14px;
        color: #B5B5B5;
        text-decoration: none;
    }
    .header .sm-navbar .sm-menu a:hover {
        color: #FFF;
        text-decoration: none;
    }
    .header .sm-navbar .sm-menu a.login {
        /*display: none;*/
        color: #4DA1FD;
    }
    .header .sm-navbar .sm-menu a.reg {
        /*display: none;*/
        color: #FDC953;
    }
    .header .sm-navbar .sm-menu a.newmenus {
        position: relative;
    }
    .header .sm-navbar .sm-menu a.newmenus:after {
        position: absolute;
        content: "\20";
        top: 10px;
        right: -15px;
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-top-color: #B5B5B5;
    }
    .header .sm-navbar .sm-menu a.newmenus.up:after {
        top: 5px;
        border: 5px solid transparent;
        border-bottom-color: #B5B5B5;
    }
    .header .sm-navbar .sm-menu a.messages {
        position: absolute;
        left: -40px;
        width: 22px;
        height: 22px;
        background-image: url(/commons/images/xiaoxi.png);
    }
    .header .sm-navbar .sm-menu a.messages.xx:after {
        content: '\20';
        position: absolute;
        top: 2px;
        right: -2px;
        width: 6px;
        height: 6px;
        background-color: #FF4E00;
        border-radius: 50%;
    }
    .header .navbar {
        height: 74px;
        margin-bottom: 0;
        background-color: transparent;
        border: none;
        box-sizing: content-box;
        margin-top: 0;
    }
    .header .navbar .navbar-brand {
        /*position: relative;*/
        display: inline-block;
        top: 0;
        width: 372px;
        height: 72px;
        padding: 0;
        text-indent: -9999em;
        /*background-image: url(/images/p2pImg/header.icons.gif);*/
        background-image: url(../../public/slogan-UP.gif);
        /* background-size: contain; */
        background-repeat: no-repeat;
        background-position: 1px 0;
        margin-top: 0;
        /* border: 1px solid red; */
    }


    .header .navbar .navbar-brand.newyear-logo {
        background-image: url(/images/p2pImg/newlogo.gif);
        background-position: 0 0;
    }
    .header .navbar .nav-active {
        /*position: absolute;*/
        display: inline-block;
        top: 0;
        right: -55px;
        width: 46px;
        height: 34px;
        background-image: url(/images/p2pImg/active-1.gif);
        background-position: 0 0;
        position: relative;
        min-height: 50px;
    }
    .wrap {
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
    .header .navbar .nav{
        float: right;
    }
    .header .navbar .nav li {
        margin-left: 19px;
        display: inline-block;
    }
    .header .navbar .nav li.active,
    .header .navbar .nav li:hover {
        border-bottom: 3px solid  #4DA1FD;
    }
    .header .navbar .nav li.active a,
    .header .navbar .nav li:hover a {
        color: #4DA1FD;
        -webkit-text-stroke: .015em #4DA1FD;
        text-stroke: .015em #4DA1FD;
    }
    .header .navbar .nav li a {
        padding: 29px 3px 18px;
        line-height: 21px;
        color: #5E5E5E;
        background-color: transparent;
        border-bottom: 3px solid transparent;
        -webkit-text-stroke: .015em #5E5E5E;
        text-stroke: .015em #5E5E5E;
        text-decoration: none;
    }
    .header .navbar .nav li a:hover {
        color: #4DA1FD;
        background-color: transparent;
        -webkit-text-stroke: .015em #4DA1FD;
        text-stroke: .015em #4DA1FD;
    }
    .place {
        width: 100%;
        color: #666;
        padding-bottom: 1em;
        clear: both;
        line-height: 14px;
    }
    .place a {
        color: #666;
    }

    .index-tel {
        position: absolute;
        top: 50px;
        left: 50px;
        width: 324px;
        height: 190px;
        margin-left: -162px;
        background-color: #EBEBEB;
        border-radius: 10px;
        z-index: 99;
    }
    .index-tel .icon-close {
        display: none;
        position: absolute;
        top: 5px;
        right: 5px;
        width: 16px;
        height: 16px;
        background-image: url('/images/p2pImg/header.icons.png');
        background-repeat: no-repeat;
        background-position: -335px -45px;
        cursor: pointer;
    }
    .index-tel.index-fixed {
        position: fixed;
        top: auto;
        bottom: 50px;
    }
    .index-tel.index-fixed .arrow {
        position: absolute;
        top: 70px;
        left: auto;
        right: -20px;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-left-color: #EBEBEB;
    }
    .index-tel .arrow {
        position: absolute;
        top: -20px;
        left: 50%;
        width: 0;
        height: 0;
        margin-left: -5px;
        border: 10px solid transparent;
        border-bottom-color: #EBEBEB;
    }
    .index-tel .index-tel-code {
        position: absolute;
        top: 35px;
        left: 25px;
        width: 138px;
        height: 142px;
        background-image: url('/images/p2pImg/header.icons.png');
        background-repeat: no-repeat;
        background-position: -235px -150px;
    }
    .index-tel .index-tel-app {
        position: absolute;
        top: 15px;
        left: 170px;
    }
    .index-tel .index-tel-app .h4 {
        font-weight: 700;
    }
    .index-tel .index-tel-app .appbtn {
        display: block;
        width: 124px;
        height: 30px;
        margin-top: 6px;
        border: 1px solid #2DB1FF;
    }
    .index-tel .index-tel-app .appbtn.iphone {
        background-image: url('/images/p2pImg/header.icons.png');
        background-repeat: no-repeat;
        background-position: -108px -196px;
    }
    .index-tel .index-tel-app .appbtn.android {
        background-image: url('/images/p2pImg/header.icons.png');
        background-repeat: no-repeat;
        background-position: -108px -151px;
    }
    .index-tel .index-tel-app .appbtn:hover {
        background-color: #FFF;
    }
    .header-wx {
        position: absolute;
        top: 50px;
        left: 10px;
        width: 166px;
        height: 172px;
        margin-left: -85px;
        padding: 2px;
        background-color: #EBEBEB;
        border: 1px solid  #EBEBEB;
        border-radius: 3px;
        background: url('/commons/images/wx-ewm.png') no-repeat;
        z-index: 99;
        box-sizing: content-box;
    }
    .header-wx:after {
        content: '\20';
        position: absolute;
        top: -21px;
        left: 50%;
        width: 0;
        height: 0;
        margin-left: -12px;
        border: 10px solid transparent;
        border-bottom-color: #EBEBEB;
    }
    .header-wx.right {
        position: absolute;
    }
    .header-wx.right:after {
        top: 72px;
        right: -21px;
        left: initial;
        border-bottom-color: transparent;
        border-left-color: #EBEBEB;
    }
    .header-qq {
        position: absolute;
        top: 50px;
        left: 10px;
        width: 166px;
        height: 172px;
        margin-left: -85px;
        padding: 2px;
        background-color: #EBEBEB;
        border: 1px solid  #EBEBEB;
        border-radius: 3px;
        background: url('/commons/images/qq_ewm.png') no-repeat;
        z-index: 99;
        box-sizing: content-box;
    }
    .header-qq:after {
        content: '\20';
        position: absolute;
        top: -21px;
        left: 50%;
        width: 0;
        height: 0;
        margin-left: -12px;
        border: 10px solid transparent;
        border-bottom-color: #EBEBEB;
    }
    .header-qq.right {
        position: absolute;
    }
    .header-qq.right:after {
        top: 70px;
        right: -21px;
        left: initial;
        border-bottom-color: transparent;
        border-left-color: #EBEBEB;
    }
    .header-weibo {
        position: absolute;
        top: 50px;
        left: 10px;
        width: 166px;
        height: 154px;
        margin-left: -85px;
        padding: 2px;
        background-color: #EBEBEB;
        border: 1px solid  #EBEBEB;
        border-radius: 3px;
        background: url('/commons/images/wb-ewm.png') no-repeat;
        z-index: 99;
        box-sizing: content-box;
    }
    .header-weibo:after {
        content: '\20';
        position: absolute;
        top: -21px;
        left: 50%;
        width: 0;
        height: 0;
        margin-left: -12px;
        border: 10px solid transparent;
        border-bottom-color: #EBEBEB;
    }
    .header-weibo.right {
        position: absolute;
    }
    .header-weibo.right:after {
        top: 45px;
        right: -21px;
        left: initial;
        border-bottom-color: transparent;
        border-left-color: #EBEBEB;
    }
    .close {
        float: right;
        font-size: 21px;
        font-weight: bold;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        filter: alpha(opacity=80);
        opacity: .8;
    }
    .cn-dialog-confirm {
        font-size: 14px;
    }
    .cn-dialog-confirm-text {
        width: 100%;
    }
    .cn-dialog-confirm-btn {
        width: 100%;
        padding-top: 10px;
        text-align: center;
    }
    .cn-dialog-confirm-btn button {
        padding-left: 15px;
        padding-right: 15px;
        margin-right: 5px;
        margin-left: 5px;
    }
    .wait-img {
        padding: 30px 30px 25px;
    }
    .wait-img img {
        width: 50px;
    }
    .callback .wait-img {
        padding: 9px 30px 8px;
    }
    .callback .status {
        display: inline-block;
        width: 86px;
        height: 86px;
    }
    .callback .status.success {
        background-image: url(/images/p2pImg/callback.icons.png);
        background-repeat: no-repeat;
        background-position: 0 0;
    }
    .callback .status.fail {
        width: 112px;
        background-image: url(/images/p2pImg/callback.icons.png);
        background-repeat: no-repeat;
        background-position: 0 -100px;
    }
    .cookie-tips {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #FAE4DC;
        z-index: 999;
        box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
    }
    .cookie-tips p {
        line-height: 50px;
    }
    .cookie-tips p a.close-tips {
        margin-left: 20px;
        color: #F00;
    }
    .menu-tips {
        position: absolute;
        top: 50px;
        z-index: 99;
    }
    .menu-tips:after {
        content: "\20";
        position: absolute;
        top: -20px;
        left: 50%;
        width: 0;
        height: 0;
        margin-left: -10px;
        border: 10px solid transparent;
        border-bottom-color: #F1F1F1;
    }
    .menu-tips ul {
        padding: 5px 0;
        background-color: #F1F1F1;
        border-radius: 5px;
    }
    .menu-tips ul li {
        width: 100px;
        line-height: 36px;
    }
    .menu-tips ul li a {
        display: inline-block;
        width: 100px;
        text-align: center;
        line-height: 36px;
        color: #656565;
    }
    .menu-tips ul li:hover {
        background-color: #FFF;
    }
    .menu-tips ul li:hover a {
        color: #4DA1FD;
    }
    /*Certificate of code*/


    .f_b_min{
        width:477.5px;
        height:30px;
        margin:10px auto 0;
        margin-left: 270px;

    }
    .f_min_pic,.f_min_pic2,.f_min_pic3,.f_min_pic4,.f_min_pic5{
        width:83.5px;
        height:100%;
        overflow: hidden;
        position: relative;
        float: left;
        margin-right:12px;
    }
    .f_min_pic div,.f_min_pic2 div,.f_min_pic3 div,.f_min_pic4 div,.f_min_pic5 div{
        position:absolute;
        top:0;
    }
    .f_min_pic div{
        left:0;
    }
    .f_min_pic2 div{
        left:-97px;
    }
    .f_min_pic3 div{
        left:-197px;
    }
    .f_min_pic4 div{
        left:-297px;
    }
    .f_min_pic5 div{
        left:-396px;
    }
    .f_min_pic:hover .f_pic_l{top:-46px;}
    .f_min_pic:hover .f_pic_an{display: none;}
    .f_min_pic2:hover .f_pic_l{top:-46px;}
    .f_min_pic2:hover .f_pic_an{display: none;}
    .f_min_pic3:hover .f_pic_l{top:-46px;}
    .f_min_pic3:hover .f_pic_an{display: none;}
    .f_min_pic4:hover .f_pic_l{top:-46px;}
    .f_min_pic4:hover .f_pic_an{display: none;}
    .f_min_pic5:hover .f_pic_l{top:-46px;}
    .f_min_pic5:hover .f_pic_an{display: none;}
</style>
