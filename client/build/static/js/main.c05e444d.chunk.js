(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,n){},116:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(35),s=n.n(a),i=n(24),o=n(13),u=n(60),l=(n(73),n(38)),d=n(39),j=n(45),b=n(43),p=n(14),O=(n(74),n(5)),m=n(26),f=(n(75),n(40)),h=n(1),x=Object(p.g)((function(e){var t=e.title,n=e.imageUrl,c=e.icon,r=e.size,a=e.history,s=e.linkUrl,i=e.match;return r+""==="undefined"&&(r="small"),Object(h.jsxs)("div",{className:"".concat(r," menu-item"),children:[Object(h.jsx)("img",{className:"background-image",alt:t,src:n,loading:"lazy"}),Object(h.jsxs)("div",{className:"content",onClick:function(){return a.push("".concat(i.url).concat(s))},children:[Object(h.jsx)("span",{children:Object(h.jsx)(f.a,{icon:c})}),Object(h.jsx)("h1",{className:"title",children:Object(h.jsx)("a",{href:"#",children:t.toUpperCase()})})]})]})})),v=n(15),g=Object(v.a)([function(e){return e.directory}],(function(e){return e.sections})),y=(n(80),["id"]),w=Object(o.b)((function(e){return{directorySections:g(e)}}))((function(e){var t=e.directorySections;return Object(h.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(m.a)(e,y);return console.log(n),Object(h.jsx)(x,Object(O.a)({},n),t)}))})})),C=(n(81),function(e){return console.log(e),Object(h.jsx)("div",{className:"homepage",children:Object(h.jsx)(w,{})})}),N=function(e){return e.shop},S=Object(v.a)([N],(function(e){return e.collections})),I=Object(v.a)([S],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),k=function(e){return Object(v.a)([S],(function(t){return t?t[e]:null}))},E=Object(v.a)([N],(function(e){return e.isFetching})),T=Object(v.a)([N],(function(e){return!!e.collections})),U=(n(82),"TOGGLE_CART_HIDDEN"),_="ADD_ITEM",L="REDUCE_QUANTITY",A="CLEAR_ITEM_FROM_CART",F="CLEAR_CART",R=function(){return{type:U}},H=function(e){return{type:_,payload:e}},P=(n(83),["children","isGoogleSignIn","inverted","className"]),G=function(e){var t=e.children,n=(e.isGoogleSignIn,e.inverted),c=e.className,r=Object(m.a)(e,P);return Object(h.jsx)("button",Object(O.a)(Object(O.a)({className:"".concat(n?"inverted":""," ").concat(c||""," custom-button")},r),{},{children:t}))},D=(n(84),n(51).faCartPlus),q=Object(o.b)(null,(function(e){return{addItem:function(t){return e(H(t))}}}))((function(e){var t=e.item,n=e.addItem,c=0,r=t.name,a=t.price,s=t.imageUrl;return Object(h.jsxs)("div",{className:"collection-item","data-id":t.id,children:[Object(h.jsx)("div",{className:"imageWrapper",children:Object(h.jsx)("img",{className:"image",src:s,alt:r,loading:"lazy"})}),Object(h.jsxs)("div",{className:"collection-footer",children:[Object(h.jsx)("span",{className:"name",children:r}),Object(h.jsx)("span",{className:"price",children:a})]}),Object(h.jsxs)(G,{onClick:function(){return function(e){var r=document.querySelector('[data-id="'.concat(t.id,'"] .custom-button .button-text'));c++,r.innerHTML='ADD TO CART  &nbsp;<span style="text-transform:lowercase">amount: '.concat(c,"</span>"),n(e)}(t)},inverted:!0,children:[Object(h.jsx)("span",{children:Object(h.jsx)(f.a,{icon:D})}),Object(h.jsx)("span",{className:"button-text",children:"ADD TO CART"})]})]})})),M=function(e){var t=e.title,n=e.items;return Object(h.jsxs)("div",{className:"collection-preview",children:[Object(h.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(h.jsx)("div",{className:"preview",children:n.map((function(e){return Object(h.jsx)(q,{item:e},e.id)}))})]})},z=["id"],W=Object(o.b)((function(e,t){return{collections:t.collection?[k(t.collection.routeName)(e)]:I(e)}}))((function(e){var t=e.collections,n=t.count;return Object(h.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,c=Object(m.a)(e,z);return c.items=c.items.slice(0,4),c.count=n,Object(h.jsx)(M,Object(O.a)({},c),t)}))})})),V=Object(o.b)((function(e,t){return{collection:k(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,n=e.match;return console.log("collection",t),console.log("match",n),Object(h.jsx)(W,{collection:t})})),K={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},Y=n(4),B=n.n(Y),Q=n(28),$=n(34),J=(n(121),n(86),function(){var e=Object(Q.a)(B.a.mark((function e(t,n){var c,r,a,s;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=ee.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,a=t.email,s=new Date,e.prev=9,e.next=12,c.set(Object(O.a)({displayName:r,email:a,createdAt:s},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}()),X=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,c=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:c}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})};$.a.initializeApp({apiKey:"AIzaSyBmkAZLsK9nHRibcKYMA74sQ1uWjKuVMYc",authDomain:"crown-db-90fc9.firebaseapp.com",databaseURL:"https://crown-db-90fc9.firebaseio.com",projectId:"crown-db-90fc9",storageBucket:"crown-db-90fc9.appspot.com",messagingSenderId:"1053207512331",appId:"1:1053207512331:web:a7bc1128af8132eb3dce0e"});var Z=$.a.auth(),ee=$.a.firestore(),te=new $.a.auth.GoogleAuthProvider;te.setCustomParameters({prompt:"select_account"});var ne=function(){return{type:K.FETCH_COLLECTIONS_START}},ce=function(e){return{type:K.FETCH_COLLECTIONS_SUCCESS,payload:e}},re=function(e){return{type:K.FETCH_COLLECTIONS_FAILURE,payload:e}},ae=(n(88),["isLoading"]),se=function(e){return function(t){var n=t.isLoading,c=Object(m.a)(t,ae);return n?Object(h.jsx)("div",{className:"spinner-overlay",children:Object(h.jsx)("div",{className:"spinner-container"})}):Object(h.jsx)(e,Object(O.a)({},c))}},ie=se(W),oe=se(V),ue=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionsStart)()}},{key:"render",value:function(){var e=this.props,t=e.match,n=e.isCollectionFetching,c=e.isCollectionsLoaded;return Object(h.jsxs)("div",{className:"shop-page",children:[Object(h.jsx)(p.b,{exact:!0,path:"".concat(t.path),render:function(e){return Object(h.jsx)(ie,Object(O.a)({isLoading:n},e))}}),Object(h.jsx)(p.b,{path:"".concat(t.path,"/:collectionId"),render:function(e){return Object(h.jsx)(oe,Object(O.a)({isLoading:!c},e))}})]})}}]),n}(r.a.Component),le=Object(v.b)({isCollectionFetching:E,isCollectionsLoaded:T}),de=Object(o.b)(le,(function(e){return{fetchCollectionsStart:function(){return e(ne())}}}))(ue);n(89);n.p;var je,be,pe,Oe,me,fe,he,xe,ve,ge,ye,we,Ce,Ne,Se,Ie=function(e){return e.cart},ke=Object(v.a)([Ie],(function(e){return e.cartItems})),Ee=Object(v.a)([Ie],(function(e){return e.hidden})),Te=Object(v.a)([ke],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ue=Object(v.a)([ke],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),_e=["title","titleId"];function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function Ae(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Fe(e,t){var n=e.title,r=e.titleId,a=Ae(e,_e);return c.createElement("svg",Le({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),je||(je=c.createElement("g",null)),be||(be=c.createElement("g",null)),pe||(pe=c.createElement("g",null)),Oe||(Oe=c.createElement("g",null)),me||(me=c.createElement("g",null)),fe||(fe=c.createElement("g",null)),he||(he=c.createElement("g",null)),xe||(xe=c.createElement("g",null)),ve||(ve=c.createElement("g",null)),ge||(ge=c.createElement("g",null)),ye||(ye=c.createElement("g",null)),we||(we=c.createElement("g",null)),Ce||(Ce=c.createElement("g",null)),Ne||(Ne=c.createElement("g",null)),Se||(Se=c.createElement("g",null)))}var Re=c.forwardRef(Fe),He=(n.p,n(90),Object(o.b)((function(e){return{itemCount:Te(e)}}),(function(e){return{toggleCartHidden:function(){return e(R())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(h.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(h.jsx)(Re,{className:"shopping-icon"}),Object(h.jsx)("span",{className:"item-count",children:n})]})}))),Pe=(n(91),function(e){var t=e.item,n=t.imageUrl,c=t.price,r=t.name,a=t.quantity;return Object(h.jsxs)("div",{className:"cart-item",children:[Object(h.jsx)("img",{src:n,alt:"item"}),Object(h.jsxs)("div",{className:"item-details",children:[Object(h.jsx)("span",{className:"name",children:r}),Object(h.jsxs)("span",{className:"price",children:[a," x $",c]})]})]})}),Ge=(n(92),Object(p.g)(Object(o.b)((function(e){return{cartItems:ke(e)}}),(function(e){return{toggle:function(){return e(R())}}}))((function(e){var t=e.cartItems,n=e.history,c=e.toggle;return Object(h.jsxs)("div",{className:"cart-dropdown",children:[Object(h.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(h.jsx)(Pe,{item:e},e.id)})):Object(h.jsx)("span",{className:"empty-message",children:"Your cart is empty."})}),t.length?Object(h.jsx)(G,{onClick:function(){n.push("/checkout"),c()},children:"GO TO CHECKOUT"}):null]})})))),De=Object(v.a)([function(e){return e.user}],(function(e){return e.currentUser})),qe="GOOGLE_SIGN_IN_START",Me="EMAIL_SIGN_IN_START",ze="SIGN_IN_SUCCESS",We="SIGN_IN_FAILURE",Ve="CHECK_USER_SESSION",Ke="SIGN_OUT_START",Ye="SIGN_OUT_SUCCESS",Be="SIGN_OUT_FAILURE",Qe="SIGN_UP_START",$e="SIGN_UP_SUCCESS",Je="SIGN_UP_FAILURE",Xe=function(e){return{type:We,payload:e}},Ze=function(e){var t=e.user,n=e.additionalData;return{type:$e,payload:{user:t,additionalData:n}}},et=Object(v.b)({currentUser:De,hidden:Ee}),tt=Object(o.b)(et,(function(e){return{signOutStart:function(){return e({type:Ke})}}}))((function(e){var t=e.currentUser,n=e.hidden,c=e.signOutStart;return Object(h.jsxs)("div",{className:"header clearfix",children:[Object(h.jsx)("div",{className:"branding",children:Object(h.jsx)(i.b,{to:"/",children:Object(h.jsx)("h2",{children:"Widgets Unlimited"})})}),Object(h.jsxs)("div",{className:"options",children:[Object(h.jsx)("div",{className:"option",children:Object(h.jsx)(i.b,{to:"/shop",children:"SHOP"})}),Object(h.jsx)("div",{className:"option",children:Object(h.jsx)(i.b,{to:"/contact",children:"CONTACT"})}),t?Object(h.jsx)("div",{className:"option",onClick:c,children:"SIGN OUT"}):Object(h.jsx)("div",{className:"option",children:Object(h.jsx)(i.b,{to:"/signin",children:"SIGN IN"})}),Object(h.jsx)(He,{})]}),n?null:Object(h.jsx)(Ge,{})]})})),nt=(n(93),n(30)),ct=n(44),rt=(n(94),n(95),["handleChange","label"]),at=function(e){var t=e.handleChange,n=e.label,c=Object(m.a)(e,rt);return Object(h.jsxs)("div",{className:"group",children:[Object(h.jsx)("input",Object(O.a)({className:"form-input",onChange:t},c)),n?Object(h.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})},st=Object(o.b)(null,(function(e){return{googleSignInStart:function(){return e({type:qe})},emailSignInStart:function(t,n){return e({type:Me,payload:{email:t,password:n}})}}}))((function(e){var t=e.googleSignInStart,n=e.emailSignInStart,r=Object(c.useState)({email:"",password:""}),a=Object(ct.a)(r,2),s=a[0],i=a[1],o=s.email,u=s.password,l=function(){var e=Object(Q.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n(o,u);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.value,c=t.name;i(Object(O.a)(Object(O.a)({},s),{},Object(nt.a)({},c,n)))};return Object(h.jsxs)("div",{className:"sign-in",children:[Object(h.jsx)("h3",{children:"I already have an account"}),Object(h.jsx)("span",{children:"Sign in with your email and password"}),Object(h.jsxs)("form",{onSubmit:l,children:[Object(h.jsx)(at,{name:"email",type:"email",handleChange:d,value:o,label:"email",required:!0}),Object(h.jsx)(at,{name:"password",type:"password",value:u,handleChange:d,label:"password",required:!0}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)(G,{type:"submit",children:"Sign In"}),Object(h.jsx)(G,{type:"button",onClick:t,className:"google-sign-in",children:" Sign In With Google "})]})]})]})})),it=(n(96),Object(o.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:Qe,payload:e}}(t))}}}))((function(e){var t=e.signUpStart,n=Object(c.useState)({displayName:"",email:"",password:"",confirmPassword:""}),r=Object(ct.a)(n,2),a=r[0],s=r[1],i=a.displayName,o=a.email,u=a.password,l=a.confirmPassword,d=function(){var e=Object(Q.a)(B.a.mark((function e(n){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),u===l){e.next=4;break}return alert("passwords do not match"),e.abrupt("return");case 4:t({displayName:i,email:o,password:u});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,c=t.value;s(Object(O.a)(Object(O.a)({},a),{},Object(nt.a)({},n,c)))};return Object(h.jsxs)("div",{className:"sign-up",children:[Object(h.jsx)("h3",{className:"title",children:"I do not have an account"}),Object(h.jsx)("span",{children:"Sign up with your email and password"}),Object(h.jsxs)("form",{className:"sign-up-form",onSubmit:d,children:[Object(h.jsx)(at,{type:"text",name:"displayName",value:i,onChange:j,label:"Display Name",required:!0}),Object(h.jsx)(at,{type:"email",name:"email",value:o,onChange:j,label:"Email",required:!0}),Object(h.jsx)(at,{type:"password",name:"password",value:u,onChange:j,label:"Password",required:!0}),Object(h.jsx)(at,{type:"password",name:"confirmPassword",value:l,onChange:j,label:"Confirm Password",required:!0}),Object(h.jsx)(G,{type:"submit",children:"Sign Up"})]})]})}))),ot=function(){return Object(h.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(h.jsx)(st,{}),Object(h.jsx)(it,{})]})},ut=(n(97),Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:A,payload:e}}(t))},reduceItemQuantity:function(t){return e(function(e){return{type:L,payload:e}}(t))},addItem:function(t){return e(H(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,r=e.reduceItemQuantity,a=t.name,s=t.imageUrl,i=t.price,o=t.quantity;return Object(h.jsxs)("div",{className:"checkout-item",children:[Object(h.jsx)("div",{className:"checkout-column image-container",children:Object(h.jsx)("img",{src:s,alt:"item"})}),Object(h.jsx)("span",{className:"checkout-column name",children:a}),Object(h.jsxs)("span",{className:"checkout-column quantity",children:[Object(h.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276e"}),Object(h.jsx)("span",{className:"value",children:o}),Object(h.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(h.jsxs)("span",{className:"checkout-column price",children:["$",i]}),Object(h.jsx)("div",{className:"checkout-column remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),lt=n(61),dt=n.n(lt),jt=n(62),bt=n.n(jt),pt=function(e){var t=e.price,n=100*t;return Object(h.jsx)(dt.a,{label:"Pay Now",name:"Widgets Unlimited, Inc.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),bt()({url:"payment",method:"post",data:{amount:n,token:e}}).then((function(e){alert("Payment Successful")})).catch((function(e){console.log("Payment Error: ",JSON.parse(e)),alert("There was an error with your transaction. Please be sure to use the provided test credit card.")}))},stripeKey:"pk_test_xYtLS9QFqAO646nlSGWbkVK600VgjaWS2v"})},Ot=(n(115),Object(o.b)((function(e){return{cartItems:ke(e),total:Ue(e)}}))((function(e){var t=e.cartItems,n=e.total;return Object(h.jsxs)("div",{className:"checkout-page",children:[t.map((function(e){return Object(h.jsx)(ut,{cartItem:e},e.id)})),Object(h.jsx)("div",{className:"total",children:Object(h.jsxs)("span",{children:["TOTAL: $",n]})}),Object(h.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(h.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"]}),Object(h.jsx)(pt,{price:n})]})}))),mt=(n(116),function(){return Object(h.jsxs)("div",{id:"contact-page",className:"page",children:[Object(h.jsx)("h2",{children:"Widgets Unlimited is pleased to serve you!"}),Object(h.jsx)("h4",{children:"1-800-WID-GETS"}),Object(h.jsx)("p",{children:Object(h.jsx)("img",{className:"image",src:"https://blog.hubspot.com/hubfs/Customer%20Care.jpg",loading:"lazy"})}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Sales:"})," sales@windgets-ul.com"]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Customer Support:"})," support@windgets-ul.com"]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Press:"})," media@windgets-ul.com"]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Human Resources:"})," hr@windgets-ul.com"]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Engineering:"})," tech@windgets-ul.com"]})]})}),ft=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.checkUserSession)()}},{key:"componentWillUnmount",value:function(){console.log("component unmounting"),this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)(tt,{}),Object(h.jsxs)(p.d,{children:[Object(h.jsx)(p.b,{exact:!0,path:"/",component:C}),Object(h.jsx)(p.b,{path:"/shop",component:de}),Object(h.jsx)(p.b,{exact:!0,path:"/contact",component:mt}),Object(h.jsx)(p.b,{exact:!0,path:"/checkout",component:Ot}),Object(h.jsx)(p.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(h.jsx)(p.a,{to:"/"}):Object(h.jsx)(ot,{})}})]})]})}}]),n}(r.a.Component),ht=Object(o.b)((function(e){return{currentUser:De(e)}}),(function(e){return{checkUserSession:function(){return e({type:Ve})}}}))(ft),xt=n(25),vt=n(42),gt=(n(117),n(63)),yt=n.n(gt),wt={currentUser:null},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ze:return Object(O.a)(Object(O.a)({},e),{},{currentUser:t.payload,error:null});case Ye:return Object(O.a)(Object(O.a)({},e),{},{currentUser:null,error:null});case We:case Be:case Je:return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});default:return e}},Nt=n(64),St=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(O.a)(Object(O.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Nt.a)(e),[Object(O.a)(Object(O.a)({},t),{},{quantity:1})])},It=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(O.a)(Object(O.a)({},e),{},{quantity:e.quantity-1}):e}))},kt={hidden:!0,cartItems:[]},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(O.a)(Object(O.a)({},e),{},{hidden:!e.hidden});case _:return Object(O.a)(Object(O.a)({},e),{},{cartItems:St(e.cartItems,t.payload)});case L:return Object(O.a)(Object(O.a)({},e),{},{cartItems:It(e.cartItems,t.payload)});case A:return Object(O.a)(Object(O.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case F:return Object(O.a)(Object(O.a)({},e),{},{cartItems:[]});default:return e}},Tt=n(51),Ut=Tt.faCloudSunRain,_t=Tt.faUserFriends,Lt=Tt.faPlay,At=Tt.faMarker,Ft={sections:[{title:"weather",imageUrl:"/weatherwidget.png",icon:Ut,id:1,linkUrl:"shop/weather"},{title:"social",imageUrl:"/kidshugging.png",icon:_t,id:2,linkUrl:"shop/social"},{title:"music",imageUrl:"/musicwidget.png",icon:Lt,id:3,linkUrl:"shop/music"},{title:"finance",imageUrl:"/stockwidget.png",icon:Tt.faChartLine,id:4,linkUrl:"shop/finance",size:"large"},{title:"productivity",imageUrl:"/pic.png",icon:At,id:5,linkUrl:"shop/productivity",size:"large"}]},Rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ht={collections:null,isFetching:!1},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.FETCH_COLLECTIONS_START:return Object(O.a)(Object(O.a)({},e),{},{isFetching:!0});case K.FETCH_COLLECTIONS_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{isFetching:!1,collections:t.payload});case K.FETCH_COLLECTIONS_FAILURE:return Object(O.a)(Object(O.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},Gt={key:"root",storage:yt.a,whitelist:["cart"]},Dt=Object(xt.b)({user:Ct,cart:Et,directory:Rt,shop:Pt}),qt=Object(vt.a)(Gt,Dt),Mt=n(9),zt=B.a.mark(Kt),Wt=B.a.mark(Yt),Vt=B.a.mark(Bt);function Kt(){var e,t,n;return B.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,console.log("fetchCollectionsAsync was fired");case 2:return c.prev=2,e=ee.collection("collections"),c.next=6,e.get();case 6:return t=c.sent,c.next=9,Object(Mt.b)(X,t);case 9:return n=c.sent,c.next=12,Object(Mt.c)(ce(n));case 12:c.next=18;break;case 14:return c.prev=14,c.t0=c.catch(2),c.next=18,Object(Mt.c)(re(c.t0.message));case 18:case"end":return c.stop()}}),zt,null,[[2,14]])}function Yt(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.d)(K.FETCH_COLLECTIONS_START,Kt);case 2:case"end":return e.stop()}}),Wt)}function Bt(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.a)([Object(Mt.b)(Yt)]);case 2:case"end":return e.stop()}}),Vt)}var Qt=B.a.mark(ln),$t=B.a.mark(dn),Jt=B.a.mark(jn),Xt=B.a.mark(bn),Zt=B.a.mark(pn),en=B.a.mark(On),tn=B.a.mark(mn),nn=B.a.mark(fn),cn=B.a.mark(hn),rn=B.a.mark(xn),an=B.a.mark(vn),sn=B.a.mark(gn),on=B.a.mark(yn),un=B.a.mark(wn);function ln(e){var t,n,c,r,a,s;return B.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,c=t.password,r=t.displayName,i.prev=1,i.next=4,Z.createUserWithEmailAndPassword(n,c);case 4:return a=i.sent,s=a.user,i.next=8,J(s,{displayName:r});case 8:return i.next=10,Object(Mt.c)(Ze({user:s,additionalData:{displayName:r}}));case 10:i.next=16;break;case 12:return i.prev=12,i.t0=i.catch(1),i.next=16,Object(Mt.c)((o=i.t0,{type:Je,payload:o}));case 16:case"end":return i.stop()}var o}),Qt,null,[[1,12]])}function dn(e){var t,n,c;return B.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.user,c=t.additionalData,r.next=3,bn(n,c);case 3:case"end":return r.stop()}}),$t)}function jn(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.signOut();case 3:return e.next=5,Object(Mt.c)({type:Ye});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Mt.c)((t=e.t0,{type:Be,payload:t}));case 11:case"end":return e.stop()}var t}),Jt,null,[[0,7]])}function bn(e,t){var n,c;return B.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Mt.b)(J,e,t);case 3:return n=r.sent,r.next=6,n.get();case 6:return c=r.sent,r.next=9,Object(Mt.c)((a=Object(O.a)({id:c.id},c.data()),{type:ze,payload:a}));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(Mt.c)(Xe(r.t0));case 15:case"end":return r.stop()}var a}),Xt,null,[[0,11]])}function pn(){var e,t;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.signInWithPopup(te);case 3:return e=n.sent,t=e.user,n.next=7,bn(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(Mt.c)(Xe(n.t0));case 13:case"end":return n.stop()}}),Zt,null,[[0,9]])}function On(e){var t,n,c,r,a;return B.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.email,c=t.password,s.prev=1,s.next=4,Z.signInWithEmailAndPassword(n,c);case 4:return r=s.sent,a=r.user,s.next=8,bn(a);case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(Mt.c)(Xe(s.t0));case 14:case"end":return s.stop()}}),en,null,[[1,10]])}function mn(){var e;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=Z.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,bn(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(Mt.c)(Xe(t.t0));case 14:case"end":return t.stop()}}),tn,null,[[0,10]])}function fn(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.d)(qe,pn);case 2:case"end":return e.stop()}}),nn)}function hn(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.d)(Me,On);case 2:case"end":return e.stop()}}),cn)}function xn(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.d)(Ve,mn);case 2:case"end":return e.stop()}}),rn)}function vn(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.d)(Ke,jn);case 2:case"end":return e.stop()}}),an)}function gn(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.d)(Qe,ln);case 2:case"end":return e.stop()}}),sn)}function yn(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.d)($e,dn);case 2:case"end":return e.stop()}}),on)}function wn(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.a)([Object(Mt.b)(fn),Object(Mt.b)(hn),Object(Mt.b)(xn),Object(Mt.b)(vn),Object(Mt.b)(gn),Object(Mt.b)(yn)]);case 2:case"end":return e.stop()}}),un)}var Cn=B.a.mark(In),Nn=B.a.mark(kn),Sn=B.a.mark(En);function In(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.c)({type:F});case 2:case"end":return e.stop()}}),Cn)}function kn(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.d)(Ye,In);case 2:case"end":return e.stop()}}),Nn)}function En(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.a)([Object(Mt.b)(kn)]);case 2:case"end":return e.stop()}}),Sn)}var Tn=B.a.mark(Un);function Un(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Mt.a)([Object(Mt.b)(Bt),Object(Mt.b)(wn),Object(Mt.b)(En)]);case 2:case"end":return e.stop()}}),Tn)}var _n=n(65),Ln=Object(_n.a)(),An=[Ln];var Fn=Object(xt.d)(qt,xt.a.apply(void 0,An));Ln.run(Un);var Rn=Object(vt.b)(Fn);s.a.render(Object(h.jsx)(o.a,{store:Fn,children:Object(h.jsx)(i.a,{children:Object(h.jsx)(u.a,{persistor:Rn,children:Object(h.jsx)(ht,{})})})}),document.getElementById("root"))},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.c05e444d.chunk.js.map