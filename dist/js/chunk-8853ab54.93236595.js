(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8853ab54"],{"13d5":function(e,t,r){"use strict";var n=r("23e7"),i=r("d58f").left,a=r("a640"),s=r("ae40"),c=a("reduce"),o=s("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!o},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(e,t,r){var n=r("c6b6"),i=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"1f9d":function(e,t,r){},5319:function(e,t,r){"use strict";var n=r("d784"),i=r("825a"),a=r("7b0b"),s=r("50c4"),c=r("a691"),o=r("1d80"),u=r("8aa5"),l=r("14c3"),d=Math.max,p=Math.min,v=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var m=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=n.REPLACE_KEEPS_$0,_=m?"$":"$0";return[function(r,n){var i=o(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,n):t.call(String(i),r,n)},function(e,n){if(!m&&x||"string"===typeof n&&-1===n.indexOf(_)){var a=r(t,e,this,n);if(a.done)return a.value}var o=i(e),v=String(this),f="function"===typeof n;f||(n=String(n));var g=o.global;if(g){var E=o.unicode;o.lastIndex=0}var k=[];while(1){var $=l(o,v);if(null===$)break;if(k.push($),!g)break;var I=String($[0]);""===I&&(o.lastIndex=u(v,s(o.lastIndex),E))}for(var y="",w=0,R=0;R<k.length;R++){$=k[R];for(var C=String($[0]),T=d(p(c($.index),v.length),0),L=[],S=1;S<$.length;S++)L.push(h($[S]));var F=$.groups;if(f){var A=[C].concat(L,T,v);void 0!==F&&A.push(F);var P=String(n.apply(void 0,A))}else P=b(C,v,T,L,F,n);T>=w&&(y+=v.slice(w,T)+P,w=T+C.length)}return y+v.slice(w)}];function b(e,r,n,i,s,c){var o=n+e.length,u=i.length,l=g;return void 0!==s&&(s=a(s),l=f),t.call(c,l,(function(t,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(o);case"<":c=s[a.slice(1,-1)];break;default:var l=+a;if(0===l)return t;if(l>u){var d=v(l/10);return 0===d?t:d<=u?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):t}c=i[l-1]}return void 0===c?"":c}))}}))},6619:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.recipe?r("div",[r("div",{staticClass:"recipe-header mt-3 mb-4"},[r("h1",[e._v(e._s(e.recipe.title))]),r("img",{staticClass:"center recipe-image",attrs:{src:e.recipe.image}}),e.recipe.hasWatched&&!this.$route.params.private?r("div",[r("img",{staticClass:"icon-img",attrs:{src:this.$root.store.iconsLinks.watched}}),r("label",[e._v("You already watched this recipe")])]):e._e()]),r("div",{staticClass:"recipe-body"},[r("b-row",{staticClass:"about-row"},[this.$route.params.private?e._e():r("b-col",[r("img",{staticClass:"icon-img like-icon more-icon",attrs:{src:this.likeIcon},on:{click:function(t){return e.addToFavorites()}}}),r("label",[e._v(e._s(e.likeText))])]),r("b-col",[r("img",{staticClass:"icon-img more-icon",attrs:{src:this.$root.store.iconsLinks.readyInMinutes}}),e._v(" "+e._s(e.recipe.readyInMinutes)+" min ")]),r("b-col",[e._v(" "+e._s(e.recipe.servings)+" "),r("img",{staticClass:"icon-img more-icon",attrs:{src:this.$root.store.iconsLinks.dishes}})]),this.$route.params.private?e._e():r("b-col",[e._v(" "+e._s(e.recipe.aggregateLikes)+" "),r("img",{staticClass:"icon-img more-icon",attrs:{src:this.$root.store.iconsLinks.thumbs_up}})]),r("b-col",[e.recipe.vegan?r("img",{staticClass:"icon-img",attrs:{src:this.$root.store.iconsLinks.vegan}}):e._e(),e.recipe.vegan?e._e():r("img",{staticClass:"icon-img",attrs:{src:this.$root.store.iconsLinks.notvegan}}),e.recipe.vegetarian?r("img",{staticClass:"icon-img",attrs:{src:this.$root.store.iconsLinks.vegetarian}}):e._e(),e.recipe.vegetarian?e._e():r("img",{staticClass:"icon-img",attrs:{src:this.$root.store.iconsLinks.notvegetarian}}),e.recipe.glutenFree?r("img",{staticClass:"icon-img",attrs:{src:this.$root.store.iconsLinks.glutenFree}}):e._e(),e.recipe.glutenFree?e._e():r("img",{staticClass:"icon-img",attrs:{src:this.$root.store.iconsLinks.gluten}})])],1),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapped"},[r("h3",[e._v("Ingredients:")]),r("ul",e._l(e.recipe.extendedIngredients,(function(t,n){return r("li",{key:n+"_"+t.id},[e._v(" "+e._s(t.original)+" ")])})),0)]),r("div",{staticClass:"wrapped"},[r("h3",[e._v("Instructions:")]),r("ol",e._l(e.recipe._instructions,(function(t){return r("li",{key:t.number},[e._v(" "+e._s(t.step)+" ")])})),0)])])],1)]):e._e()])},i=[],a=(r("99af"),r("d81d"),r("13d5"),r("b0c0"),r("ac1f"),r("5319"),r("2909")),s=(r("96cf"),r("1da1")),c={data:function(){return{recipe:null,likeIcon:this.$root.store.iconsLinks.notFavorite,likeText:"Add to Favorites"}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,i,s,c,o,u,l,d,p,v,f,g,h,m,x,_,b,E,k;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,t.prev=1,!e.$route.params["private"]){t.next=8;break}return t.next=5,e.axios.get(e.$root.store.server_domain+"/users/"+e.$route.params.recipeId,{params:{recipe_id:e.$route.params.recipeId}});case 5:r=t.sent,t.next=11;break;case 8:return t.next=10,e.axios.get(e.$root.store.server_domain+"/recipes/"+e.$route.params.recipeId,{params:{recipe_id:e.$route.params.recipeId}});case 10:r=t.sent;case 11:200!==r.status&&e.$router.replace("/NotFound"),t.next=18;break;case 14:return t.prev=14,t.t0=t["catch"](1),e.$router.replace("/NotFound"),t.abrupt("return");case 18:if(n=r.data,i=n.id,s=n.title,c=n.image,o=n.readyInMinutes,u=n.aggregateLikes,l=n.glutenFree,d=n.vegan,p=n.vegetarian,v=n.hasWatched,f=n.hasFavorited,g=n.servings,h=n.analyzedInstructions,m=n.instructions,x=n.extendedIngredients,_=n.recipeOwner,b=n.timePreparedInFamily,E=e.$route.params["private"]?m:h.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,t){return[].concat(Object(a["a"])(e),Object(a["a"])(t))}),[]),k={instructions:m,_instructions:E,analyzedInstructions:h,extendedIngredients:x,aggregateLikes:u,readyInMinutes:o,image:c,title:s,servings:g,vegan:d,vegetarian:p,glutenFree:l,hasWatched:v,hasFavorited:f,recipeOwner:_,timePreparedInFamily:b,id:i},e.recipe=k,e.recipe.hasFavorited&&e.changeToLikeIcon(),e.$route.params["private"]){t.next=27;break}return t.next=26,e.axios.post(e.$root.store.server_domain+"/users/watched",{recipe_id:e.recipe.id});case 26:r=t.sent;case 27:t.next=31;break;case 29:t.prev=29,t.t1=t["catch"](0);case 31:case"end":return t.stop()}}),t,null,[[0,29],[1,14]])})))()},beforeDestroy:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{changeToLikeIcon:function(){this.likeIcon=this.$root.store.iconsLinks.favorite,this.likeText="Favorited!"},addToFavorites:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.post(e.$root.store.server_domain+"/users/favorites",{recipe_id:e.recipe.id});case 2:r=t.sent,201==r.status&&(e.recipe.hasFavorited=!0,e.changeToLikeIcon());case 4:case"end":return t.stop()}}),t)})))()}}},o=c,u=(r("a201"),r("2877")),l=Object(u["a"])(o,n,i,!1,null,"751c8044",null);t["default"]=l.exports},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),i=r("9f7f"),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=o||l||u;d&&(c=function(e){var t,r,i,c,d=this,p=u&&d.sticky,v=n.call(d),f=d.source,g=0,h=e;return p&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(f="(?: "+f+")",h=" "+h,g++),r=new RegExp("^(?:"+f+")",v)),l&&(r=new RegExp("^"+f+"$(?!\\s)",v)),o&&(t=d.lastIndex),i=a.call(p?r:d,h),p?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:o&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),l&&i&&i.length>1&&s.call(i[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),e.exports=c},"99af":function(e,t,r){"use strict";var n=r("23e7"),i=r("d039"),a=r("e8b5"),s=r("861d"),c=r("7b0b"),o=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),p=r("b622"),v=r("2d00"),f=p("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",m=v>=51||!i((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),x=d("concat"),_=function(e){if(!s(e))return!1;var t=e[f];return void 0!==t?!!t:a(e)},b=!m||!x;n({target:"Array",proto:!0,forced:b},{concat:function(e){var t,r,n,i,a,s=c(this),d=l(s,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(a=-1===t?s:arguments[t],_(a)){if(i=o(a.length),p+i>g)throw TypeError(h);for(r=0;r<i;r++,p++)r in a&&u(d,p,a[r])}else{if(p>=g)throw TypeError(h);u(d,p++,a)}return d.length=p,d}})},"9f7f":function(e,t,r){"use strict";var n=r("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a201:function(e,t,r){"use strict";var n=r("1f9d"),i=r.n(n);i.a},ac1f:function(e,t,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},d58f:function(e,t,r){var n=r("1c0b"),i=r("7b0b"),a=r("44ad"),s=r("50c4"),c=function(e){return function(t,r,c,o){n(r);var u=i(t),l=a(u),d=s(u.length),p=e?d-1:0,v=e?-1:1;if(c<2)while(1){if(p in l){o=l[p],p+=v;break}if(p+=v,e?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;e?p>=0:d>p;p+=v)p in l&&(o=r(o,l[p],p,u));return o}};e.exports={left:c(!1),right:c(!0)}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),a=r("b622"),s=r("9263"),c=r("9112"),o=a("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var f=a(e),g=!i((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),h=g&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return t=!0,null},r[f](""),!t}));if(!g||!h||"replace"===e&&(!u||!l||p)||"split"===e&&!v){var m=/./[f],x=r(f,""[e],(function(e,t,r,n,i){return t.exec===s?g&&!i?{done:!0,value:m.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),_=x[0],b=x[1];n(String.prototype,e,_),n(RegExp.prototype,f,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}d&&c(RegExp.prototype[f],"sham",!0)}},d81d:function(e,t,r){"use strict";var n=r("23e7"),i=r("b727").map,a=r("1dde"),s=r("ae40"),c=a("map"),o=s("map");n({target:"Array",proto:!0,forced:!c||!o},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-8853ab54.93236595.js.map