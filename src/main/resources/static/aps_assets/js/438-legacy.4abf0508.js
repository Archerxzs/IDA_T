"use strict";(self["webpackChunkaminer_demo"]=self["webpackChunkaminer_demo"]||[]).push([[438],{43438:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("article",{staticClass:"article"},[n("ai-help"),n("paper-details",{attrs:{"article-info":t.articleInfo}}),n("author",{attrs:{"author-info":t.authorInfo}})],1)])},i=[],a=(n(41539),n(78783),n(33948),n(38862),n(74916),n(23123),n(68309),n(25972));function o(t){return(0,a.Z)({url:"/article/findArticleByArticleId",method:"get",params:t})}var l=n(28676),c={components:{AiHelp:function(){return n.e(860).then(n.bind(n,84860))},PaperDetails:function(){return n.e(613).then(n.bind(n,10613))},Author:function(){return Promise.all([n.e(45),n.e(741)]).then(n.bind(n,62741))}},created:function(){this.getArticle()},data:function(){return{articleInfo:{},authorInfo:null}},methods:{getArticle:function(){var t=this;o({articleId:this.$route.params.id}).then((function(e){var n=JSON.parse(JSON.stringify(e.data));delete n.scholarList,""!==n.keyWord&&(n.keyWord=n.keyWord.split(/[；]|[;]|[，]|,/)),document.title=n.title,n.showPDF=-1!==l.articleIndex.indexOf(n.title),n.name="pdf/"+n.title+".pdf",t.articleInfo=n,t.authorInfo=e.data.scholarList}))}}},u=c,s=n(1001),f=(0,s.Z)(u,r,i,!1,null,"08f607e2",null),d=f.exports}}]);