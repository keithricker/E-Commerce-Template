(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[9],{102:function(t,e,n){},122:function(t,e,n){},136:function(t,e,n){"use strict";n.r(e);n(2);var c=n(32),r=(n(44),n(82)),a=(n(102),n(45)),s=n(12),i=Object(c.b)(null,(function(t){return{clearItem:function(e){return t(Object(a.c)(e))},reduceItemQuantity:function(e){return t(Object(a.d)(e))},addItem:function(e){return t(Object(a.a)(e))}}}))((function(t){var e=t.cartItem,n=t.clearItem,c=t.addItem,r=t.reduceItemQuantity,a=e.name,i=e.imageUrl,u=e.price,o=e.quantity;return Object(s.jsxs)("div",{className:"checkout-item",children:[Object(s.jsx)("div",{className:"checkout-column image-container",children:Object(s.jsx)("img",{src:i,alt:"item"})}),Object(s.jsx)("span",{className:"checkout-column name",children:a}),Object(s.jsxs)("span",{className:"checkout-column quantity",children:[Object(s.jsx)("span",{className:"arrow",onClick:function(){return r(e)},children:"\u276e"}),Object(s.jsx)("span",{className:"value",children:o}),Object(s.jsx)("span",{className:"arrow",onClick:function(t){return c(e)},children:"\u276f"})]}),Object(s.jsxs)("span",{className:"checkout-column price",children:["$",u]}),Object(s.jsx)("div",{className:"checkout-column remove-button",onClick:function(t){return function(t,e){var c=t.target.parentNode;Object.assign(c.style,{transition:"all 0.5s","min-height":"0px",height:"0px",opacity:"0",padding:"0px"}),window.setTimeout((function(){n(e)}),500)}(t,e)},children:"\u2715"})]})})),u=n(103),o=n.n(u),l=n(104),d=n.n(l),j=function(t){var e=t.price,n=100*e;return Object(s.jsx)(o.a,{label:"Pay Now",name:"Widgets Unlimited, Inc.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(e),amount:n,panelLabel:"Pay Now",token:function(t){console.log(t),d()({url:"payment",method:"post",data:{amount:n,token:t}}).then((function(t){alert("Payment Successful")})).catch((function(t){console.log("Payment Error: ",JSON.parse(t)),alert("There was an error with your transaction. Please be sure to use the provided test credit card.")}))},stripeKey:"pk_test_xYtLS9QFqAO646nlSGWbkVK600VgjaWS2v"})};n(122),e.default=Object(c.b)((function(t){return{cartItems:Object(r.b)(t),total:Object(r.d)(t)}}))((function(t){var e=t.cartItems,n=t.total;return Object(s.jsxs)("div",{className:"checkout-page",children:[e.map((function(t){return Object(s.jsx)(i,{cartItem:t},t.id)})),Object(s.jsxs)("div",{className:"total",children:[Object(s.jsx)("span",{class:"total-text",children:"TOTAL:\xa0"}),Object(s.jsxs)("span",{class:"total-amount",children:["$",n]})]}),Object(s.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(s.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"]}),Object(s.jsx)(j,{price:n})]})}))},82:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return u}));var c=n(44),r=function(t){return t.cart},a=Object(c.a)([r],(function(t){return t.cartItems})),s=Object(c.a)([r],(function(t){return t.hidden})),i=Object(c.a)([a],(function(t){return t.reduce((function(t,e){return t+e.quantity}),0)})),u=Object(c.a)([a],(function(t){return t.reduce((function(t,e){return t+e.quantity*e.price}),0)}))}}]);
//# sourceMappingURL=9.a62ea5bf.chunk.js.map