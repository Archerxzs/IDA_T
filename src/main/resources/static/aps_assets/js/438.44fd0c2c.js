"use strict";(self["webpackChunkaminer_demo"]=self["webpackChunkaminer_demo"]||[]).push([[438],{3438:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-container"},[r("article",{staticClass:"article"},[r("ai-help"),r("paper-details",{attrs:{"article-info":t.articleInfo}}),r("author",{attrs:{"author-info":t.authorInfo}})],1)])},i=[],n=r(5972);function l(t){return(0,n.Z)({url:"/article/findArticleByArticleId",method:"get",params:t})}var o=r(8676),s={components:{AiHelp:()=>r.e(860).then(r.bind(r,4860)),PaperDetails:()=>r.e(492).then(r.bind(r,9492)),Author:()=>Promise.all([r.e(45),r.e(741)]).then(r.bind(r,2741))},created(){this.getArticle()},data(){return{articleInfo:{},authorInfo:null}},methods:{getArticle(){l({articleId:this.$route.params.id}).then((t=>{const e=JSON.parse(JSON.stringify(t.data));delete e.scholarList,""!==e.keyWord&&(e.keyWord=e.keyWord.split(/[；]|[;]|[，]|,/)),document.title=e.title,e.showPDF=-1!==o.articleIndex.indexOf(e.title),e.name="pdf/"+e.title+".pdf",this.articleInfo=e,this.authorInfo=t.data.scholarList}))}}},c=s,d=r(1001),u=(0,d.Z)(c,a,i,!1,null,"08f607e2",null),h=u.exports}}]);