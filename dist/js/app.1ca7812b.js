(function(){"use strict";var t={8985:function(t,e,s){var a=s(144),o=s(998),n=s(6232),r=s(5550),i=s(9223),l=s(4324),c=s(5808),u=s(4525),p=s(6195),d=s(982),m=s(4611),f=s(3059),h=s(6975),g=s(7953),v=function(){var t=this,e=t._self._c;return e(o.Z,{attrs:{id:"inspire"}},[e(h.Z,{staticClass:"yellow",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(u.Z,[e(p.km,[e(p.V9),e(p.oZ)],1)],1),e(i.Z),e(c.Z,{attrs:{dense:""}},[e(d.Z,t._l(t.items,(function(s,a){return e(u.Z,{key:a,attrs:{to:s.link,link:"",color:"black"}},[e(m.Z,{attrs:{color:"black"}},[e(l.Z,{attrs:{color:"black black--text"},domProps:{textContent:t._s(s.icon)}})],1),e(p.km,{attrs:{color:"black"}},[e(p.V9,{attrs:{color:"black--text"},domProps:{textContent:t._s(s.text)}})],1)],1)})),1)],1)],1),e(n.Z,{staticClass:"black",attrs:{app:""}},[e(r.Z,{staticClass:"white--text",on:{click:function(e){t.drawer=!t.drawer}}}),e(g.qW,{staticClass:"font-weight-bold yellow--text"},[t._v(" Movie Reviews App FInal")])],1),e(f.Z,[e("router-view")],1)],1)},Z=[],y={data:()=>({items:[{text:"Home",icon:"mdi-home",link:"/"},{text:"Add Post",icon:"mdi-plus",link:"/add-post"},{text:"About",icon:"mdi-information",link:"/about"}],drawer:null})},b=y,_=s(1001),w=(0,_.Z)(b,v,Z,!1,null,null,null),k=w.exports,x=s(6190),C=s(9582),P=s(4886),$=s(266),F=s(2150),O=s(1234),j=s(5125),T=s(1713),A=s(8088),E=s(2648),B=function(){var t=this,e=t._self._c;return e(F.Z,[e(T.Z,{attrs:{"no-gutters":""}},[e($.Z,{staticClass:"mx-auto",attrs:{sm:"10"}},[e(C.Z,{staticClass:"pa-5"},[e(P.EB,[t._v("Add New Post")]),e(i.Z),e(j.Z,{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(A.Z,{attrs:{label:"Title","prepend-icon":"mdi-note",rules:t.rules},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),e(A.Z,{attrs:{label:"Category","prepend-icon":"mdi-format-list-text",rules:t.rules},model:{value:t.post.category,callback:function(e){t.$set(t.post,"category",e)},expression:"post.category"}}),e(E.Z,{attrs:{label:"Content","prepend-icon":"mdi-pen",rules:t.rules},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}}),e(O.Z,{attrs:{rules:t.rules,"show-size":"",counter:"",multiple:"",label:"Select Image"},on:{change:t.selectFile}}),e(x.Z,{staticClass:"mt-3",attrs:{type:"submit",color:"yellow"}},[t._v("Post")])],1)],1)],1)],1)],1)},D=[],S=(s(7658),s(594));const I="/api/posts/";class q{static async getAllPost(){const t=await S.Z.get(I);return t.data}static async getPostByID(t){const e=await S.Z.get(`${I}/${t}`);return e.data}static async addPost(t){const e=await S.Z.post(I,t);return e.data}static async updatePost(t,e){const s=await S.Z.patch(`${I}/${t}`,e);return s.data}static async deletePost(t){const e=await S.Z["delete"](`${I}/${t}`);return e.data}}var M={data(){return{rules:[t=>!!t||"This Field is required"],post:{title:"",category:"",content:"",image:""},image:""}},methods:{selectFile(t){this.image=t[0]},async submitForm(){const t=new FormData;if(t.append("image",this.image),t.append("title",this.post.title),t.append("category",this.post.category),t.append("content",this.post.content),this.$refs.form.validate()){const e=await q.addPost(t);this.$router.push({name:"home",params:{message:e.message}})}}}},N=M,z=(0,_.Z)(N,B,D,!1,null,null,null),H=z.exports,L=s(1338),V=s(5495),Q=function(){var t=this,e=t._self._c;return e(F.Z,[e(T.Z,{attrs:{"no-gutters":""}},[e($.Z,{staticClass:"pa-4 mx-auto",attrs:{sm:"10"}},[e(C.Z,{staticClass:"pa-2"},[e(L.Z,{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function({hover:s}){return[e(C.Z,{staticClass:"mx-auto",class:{"on-hover":s},attrs:{elevation:s?16:2}},[e(V.Z,{attrs:{src:`/${t.post.image}`}})],1)]}}])}),e("v-card-action",{staticClass:"pb-0"},[e(T.Z,{staticClass:"mt-1 mx-1"},[e($.Z,{attrs:{sm:"2"}},[e(x.Z,{attrs:{small:"",outlined:"",color:"primary"}},[t._v(t._s(t.post.category))])],1),e($.Z,{staticClass:"d-flex justify-end",attrs:{sm:"10"}},[e(x.Z,{attrs:{color:"success",text:"",to:{name:"edit-Post",params:{id:t.post._id}}}},[t._v(" Edit ")]),e(x.Z,{attrs:{color:"red",text:""},on:{click:function(e){return t.removePost(t.post._id)}}},[t._v(" Delete ")])],1)],1)],1),e(P.Qq,{staticClass:"headline"},[e("h3",[t._v(t._s(t.post.title))])]),e(P.ZB,{staticClass:"grey--text"},[e("p",[t._v(t._s(t.post.content))]),e("p",[t._v(t._s(t.post.created))])])],1)],1)],1)],1)},R=[],U={data(){return{post:{}}},async created(){const t=await q.getPostByID(this.$route.params.id);this.post=t},methods:{async removePost(t){const e=await q.deletePost(t);this.$router.push({name:"home",params:{message:e.message}})}}},W=U,G=(0,_.Z)(W,Q,R,!1,null,null,null),J=G.exports,K=function(){var t=this,e=t._self._c;return e(F.Z,[e(T.Z,{attrs:{"no-gutters":""}},[e($.Z,{staticClass:"mx-auto",attrs:{sm:"10"}},[e(C.Z,{staticClass:"pa-5"},[e(P.EB,[t._v("Edit Post")]),e(i.Z),e(j.Z,{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.updateForm.apply(null,arguments)}}},[e(A.Z,{attrs:{label:"Title","prepend-icon":"mdi-note",rules:t.rules},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),e(A.Z,{attrs:{label:"Category","prepend-icon":"mdi-format-list-text",rules:t.rules},model:{value:t.post.category,callback:function(e){t.$set(t.post,"category",e)},expression:"post.category"}}),e(E.Z,{attrs:{label:"Content","prepend-icon":"mdi-pen",rules:t.rules},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}}),e(V.Z,{attrs:{src:`/${t.post.image}`,width:"120"}}),e(O.Z,{attrs:{"show-size":"",counter:"",multiple:"",label:"Select Image"},on:{change:t.selectFile}}),e(x.Z,{staticClass:"mt-3",attrs:{type:"submit",color:"yellow"}},[t._v("Update Post")])],1)],1)],1)],1)],1)},X=[],Y={data(){return{rules:[t=>!!t||"This Field is required"],post:{title:"",category:"",content:"",image:""},image:""}},async created(){const t=await q.getPostByID(this.$route.params.id);this.post=t},methods:{selectFile(t){this.image=t[0]},async updateForm(){const t=new FormData;if(t.append("image",this.image),t.append("title",this.post.title),t.append("category",this.post.category),t.append("content",this.post.content),t.append("old_image",this.post.image),this.$refs.form.validate()){const e=await q.updatePost(this.$route.params.id,t);this.$router.push({name:"home",params:{message:e.message}})}}}},tt=Y,et=(0,_.Z)(tt,K,X,!1,null,null,null),st=et.exports,at=s(8345),ot=s(1653),nt=function(){var t=this,e=t._self._c;return e(F.Z,[null!=this.$route.params.message?e(ot.Z,{attrs:{"close-text":"Close Alert",color:"green accent-4",dark:"",dismissible:""}},[t._v(" "+t._s(this.$route.params.message)+" ")]):t._e(),e(T.Z,{attrs:{"no-gutters":""}},t._l(t.posts,(function(s){return e($.Z,{key:t.posts._id,staticClass:"pa-3",attrs:{sm:"4"}},[e(C.Z,{staticClass:"pa-1",attrs:{to:{name:"post",params:{id:s._id}}}},[e(V.Z,{attrs:{height:"250",src:`${s.image}`}}),e(x.Z,{staticClass:"ml-4 mt-3",attrs:{small:"",outlined:"",color:"indigo"}},[t._v(" "+t._s(s.category)+" ")]),e(P.EB,{staticClass:"headline"},[t._v(" "+t._s(s.title)+" ")]),e(P.ZB,{staticClass:"py-0"},[e("p",[t._v(" "+t._s(s.content.substring(0,100)+"...")+" ")])])],1)],1)})),1)],1)},rt=[],it={name:"Home",data(){return{posts:[]}},async created(){this.posts=await q.getAllPost()}},lt=it,ct=(0,_.Z)(lt,nt,rt,!1,null,null,null),ut=ct.exports;a.ZP.use(at.ZP);const pt=[{path:"/",name:"home",component:ut},{path:"/edit-post/:id",name:"edit-Post",component:st},{path:"/add-post",name:"add-post",component:H},{path:"/post/:id",name:"post",component:J},{path:"/about",name:"about",component:()=>s.e(443).then(s.bind(s,2099))}],dt=new at.ZP({mode:"history",base:"/",routes:pt});var mt=dt,ft=s(8864);a.ZP.use(ft.Z);var ht=new ft.Z({});a.ZP.config.productionTip=!1,new a.ZP({router:mt,vuetify:ht,render:t=>t(k)}).$mount("#app")}},e={};function s(a){var o=e[a];if(void 0!==o)return o.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,a,o,n){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],n=t[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(i=!1,n<r&&(r=n));if(i){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,o,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/about.9905e25d.js"}}(),function(){s.miniCssF=function(t){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";s.l=function(a,o,n,r){if(t[a])t[a].push(o);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==e+n){i=p;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",e+n),i.src=a),t[a]=[o];var d=function(e,s){i.onerror=i.onload=null,clearTimeout(m);var o=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(s)})),e)return e(s)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={143:0};s.f.j=function(e,a){var o=s.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise((function(s,a){o=t[e]=[s,a]}));a.push(o[2]=n);var r=s.p+s.u(e),i=new Error,l=function(a){if(s.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,o[1](i)}};s.l(r,l,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,n,r=a[0],i=a[1],l=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var u=l(s)}for(e&&e(a);c<r.length;c++)n=r[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},a=self["webpackChunkclient"]=self["webpackChunkclient"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(8985)}));a=s.O(a)})();
//# sourceMappingURL=app.1ca7812b.js.map