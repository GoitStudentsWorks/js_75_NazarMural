!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=e.parcelRequire0a78;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},e.parcelRequire0a78=s),s("iE7OH").register(JSON.parse('{"EVgbq":"index.32f75bec.js","cX5t3":"amazonLogo.65e47238.png","2t6si":"bookLogo.22ccf33c.png","idSWj":"bookShopLogo.082e3bff.png","5UbS1":"index.b5dd834d.css","1bhX6":"index.b1f5ed45.js"}'));var a=s("bpxeT"),r=s("2TvXO"),c=(a=s("bpxeT"),r=s("2TvXO"),"https://books-backend.p.goit.global/books/");function i(t){return l.apply(this,arguments)}function l(){return(l=t(a)(t(r).mark((function e(n){var o,s;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c).concat(n));case 2:if((o=t.sent).ok){t.next=5;break}throw new Error(o.status);case 5:return t.next=7,o.json();case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}a=s("bpxeT"),r=s("2TvXO");var u="https://books-backend.p.goit.global/books/category?category=";function d(t){return p.apply(this,arguments)}function p(){return(p=t(a)(t(r).mark((function e(n){var o,s;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u).concat(n));case 2:if((o=t.sent).ok){t.next=5;break}throw new Error(o.status);case 5:return t.next=7,o.json();case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}a=s("bpxeT"),r=s("2TvXO");var b=s("6JpON");function k(){t(b).Loading.hourglass({clickToClose:!0,svgColor:"#4F2EE8"})}function f(){t(b).Loading.remove()}function g(){document.getElementById("category-section").scrollIntoView({behavior:"smooth",block:"start"})}var _=document.querySelector(".list-categories"),v=document.querySelector(".books-cards__list");function m(){return(m=t(a)(t(r).mark((function e(n){var o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(v.classList.remove("top-books-list"),v.classList.add("category-books-list"),n.preventDefault(),n.target.classList.contains("category__link-all")&&(h(),n.target.classList.add("current-category"),S(),g()),!n.target.classList.contains("category__link")){t.next=16;break}return k(),h(),o=n.target.textContent,n.target.classList.add("current-category"),y(o),t.next=12,d(o);case 12:L(t.sent),f(),g();case 16:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function h(){var t=document.querySelector(".books-cards__title");t&&t.remove(),function(){document.querySelectorAll(".category__link").forEach((function(t){t.classList.remove("current-category")}));var t=document.querySelector(".category__link-all");t.classList.contains("current-category")&&t.classList.remove("current-category")}(),v.innerHTML=""}function y(t){var e=t.split(" "),n=e.pop(e[e.length-1]),o='<h1 class="books-cards__title">'.concat(e.join(" "),'\n        <span class="books-cards__title-accent"> ').concat(n,"</span></h1>");v.insertAdjacentHTML("beforebegin",o)}function L(t){var e=t.map((function(t){var e=t._id,n=t.book_image,o=t.title,s=t.author;return'\n    <li data-id="'.concat(e,'" class="category-books__item">\n    <a href="" class="category-books__link">\n    <div class="category-books__img-thumb">\n    <img src="').concat(n,'" alt="').concat(o,'" class="category-books__img">\n    <p class="card-overlay">Quick view</p>\n    </div>\n    <h2 class="category-books__title">').concat(o,'</h2>\n    <p class="category-books__author">').concat(s,"</p>\n    </a>\n    </li>")})).join("");v.insertAdjacentHTML("beforeend",e)}_.addEventListener("click",(function(t){return m.apply(this,arguments)}));var x={btnToTop:document.querySelector(".button-up__box")};function w(){window.scrollTo({top:0,behavior:"smooth"})}x.btnToTop.addEventListener("click",(function(){w()})),window.addEventListener("scroll",(function(){window.pageYOffset>0?x.btnToTop.classList.remove("is-hidden"):x.btnToTop.classList.add("is-hidden")}));var E=s("8nrFW");function T(e){var n=document.querySelectorAll(".js-cat-link");t(E)(n).forEach((function(t){t.textContent===e?t.classList.add("current-category"):t.classList.contains("current-category")&&t.classList.remove("current-category")}))}var C={booksCardsList:document.querySelector(".books-cards__list"),booksCardsTitle:null,topBooksCategories:null,booksCardsButton:null};function S(){k(),i("top-books").then((function(t){var e;C.booksCardsList.classList.remove("category-books-list"),C.booksCardsList.classList.add("top-books-list"),C.booksCardsList.innerHTML="",y("Best Sellers Books"),e=t.map((function(t){var e=t.list_name;return'\n    <li class="top-books__item">\n    <h2 class="top-books-title">'.concat(e,'</h2>\n    <ul class="top-books-categories__list">\n                \n    </ul>\n    <div class="top-books__button-box">\n    <button class="top-books__button" data-list_name="').concat(e,'">See More</button>\n    </div>\n    </li>\n    ')})).join(""),C.booksCardsList.insertAdjacentHTML("beforeend",e),C.topBooksCategories=document.querySelectorAll(".top-books-categories__list"),C.booksCardsButton=document.querySelector(".top-books__button"),function(t){var e=0;C.topBooksCategories.forEach((function(n){var o=t[e].books.map((function(t){var e=t._id,n=t.book_image,o=t.title,s=t.author;return'\n          <li data-id="'.concat(e,'" class="category-books__item is-hidden-books">\n          <a href="" class="category-books__link">\n          <div class="category-books__img-thumb">\n          <img src="').concat(n,'" alt="').concat(o,'" loading="lazy" class="category-books__img">\n          <p class="card-overlay">Quick view</p>\n          </div>\n          <h2 class="category-books__title">').concat(o,'</h2>\n          <p class="category-books__author">').concat(s,"</p>\n          </a>\n          </li>")})).join("");n.insertAdjacentHTML("beforeend",o),e++}))}(t),f()})).catch((function(){console.log("Проблема з запитом!")}))}function H(){return(H=t(a)(t(r).mark((function e(n){var o,s;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),n.target.classList.contains("top-books__button")){t.next=3;break}return t.abrupt("return");case 3:return C.booksCardsList.classList.remove("top-books-list"),C.booksCardsList.classList.add("category-books-list"),o=n.target.dataset.list_name,C.booksCardsTitle=document.querySelector(".books-cards__title"),C.booksCardsTitle.remove(),T(o),y(o),C.booksCardsList.innerHTML="",k(),t.next=14,d(o);case 14:s=t.sent,f(),w(),L(s);case 18:case"end":return t.stop()}}),e)})))).apply(this,arguments)}C.booksCardsList.addEventListener("click",(function(t){return H.apply(this,arguments)})),S();a=s("bpxeT"),r=s("2TvXO");var q=document.querySelector(".list-categories");function j(){return(j=t(a)(t(r).mark((function e(){var n,o,s,a,c,l,u,d,p;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("category-list");case 2:for(n=t.sent,o=[],s=!0,a=!1,c=void 0,t.prev=5,l=n[Symbol.iterator]();!(s=(u=l.next()).done);s=!0)d=u.value.list_name,o.push(d);t.next=13;break;case 9:t.prev=9,t.t0=t.catch(5),a=!0,c=t.t0;case 13:t.prev=13,t.prev=14,s||null==l.return||l.return();case 16:if(t.prev=16,!a){t.next=19;break}throw c;case 19:return t.finish(16);case 20:return t.finish(13);case 21:p=o.sort((function(t,e){return t.localeCompare(e)})).map((function(t){return'<li class="category__item"><a href="#category-title" class="js-cat-link category__link">'.concat(t,"</a></li>")})).join(""),q.insertAdjacentHTML("beforeend",p);case 23:case"end":return t.stop()}}),e,null,[[5,9,13,21],[14,,16,20]])})))).apply(this,arguments)}q.insertAdjacentHTML("afterbegin",'<li><a href="#category-title" class="js-cat-link category__link-all current-category">All category</a></li>'),function(){j.apply(this,arguments)}(),s("xpKCW");a=s("bpxeT");var A,O=s("1t1Wn"),B=(r=s("2TvXO"),s("95ECi"));A=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("cX5t3");var M;M=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("2t6si");var R;R=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("idSWj");var N=document.querySelector(".books-cards__list"),F=document.querySelector(".backdrop"),X=document.querySelector(".close-btn"),U=document.querySelector(".book-container"),V=document.querySelector(".modal__btn"),D=document.querySelector(".modal-book-btn__signUp"),J=document.querySelector(".information-about-status"),W=document.body;function I(){return(I=t(a)(t(r).mark((function e(n){var o,s,a,c,l,u;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=!0,"DIV"!==n.target.nodeName&&"P"!==n.target.nodeName&&"H2"!==n.target.nodeName&&"A"!==n.target.nodeName){t.next=28;break}return U.innerHTML="",X.addEventListener("click",K),F.addEventListener("click",P),window.addEventListener("keydown",Y),s=n.target.closest(".category-books__item"),a=s.dataset.id,F.classList.remove("backdrop--hidden"),W.classList.add("modal-open"),t.next=12,i(a);case 12:return c=t.sent,console.log(c.buy_links),U.insertAdjacentHTML("beforeend",Q(c)),t.next=17,(0,B.getBook)();case 17:if(null===(l=t.sent)){t.next=27;break}u=0;case 20:if(!(u<l.length)){t.next=27;break}if(l[u]._id!==a){t.next=24;break}return o=!1,t.abrupt("break",27);case 24:u++,t.next=20;break;case 27:o?(V.textContent="Add to shopping list",J.classList.add("is-hidden")):(V.textContent="Remove from the shopping list",J.classList.remove("is-hidden"));case 28:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=t(a)(t(r).mark((function e(n){var o,s,a,c,l;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=!0,t.next=3,(0,B.getBook)();case 3:return s=t.sent,a=V.dataset.id,t.next=7,i(a);case 7:if(c=t.sent,null===s){t.next=17;break}l=0;case 10:if(!(l<s.length)){t.next=17;break}if(s[l]._id!==a){t.next=14;break}return o=!1,t.abrupt("break",17);case 14:l++,t.next=10;break;case 17:o?((0,B.postBook)(c),V.textContent="Remove from the shopping list",J.classList.remove("is-hidden")):((0,B.deleteBook)(a),V.textContent="Add to shopping list",J.classList.add("is-hidden"));case 18:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function K(){F.classList.add("backdrop--hidden"),W.classList.remove("modal-open")}function Q(e){var n=e._id,o=e.book_image,s=t(O)(e.buy_links,3),a=s[0],r=a.name,c=a.url,i=s[1],l=i.name,u=i.url,d=s[2],p=d.name,b=d.url,k=e.title,f=e.description,g=e.author,_='<img src="'.concat(o,'" alt="').concat(k,'"  class="book-cover"/>\n  <div class="text-container"><h2 class="book-cover__title">').concat(k,'</h2>\n  <p class="book-cover__author">').concat(g,'</p>\n  <p class="book-cover__description">').concat(f||"No description",'</p>\n  <ul class="store-icons">\n  <li class="store-icons__item">\n    <a href="').concat(c,'"\n    target="_blank" \n      class="icon-link"><img\n        src="').concat(t(A),'"\n        alt="').concat(r,'"\n        width="62"\n        height="19"\n        class="store-icon--amazon"\n    /></a>\n  </li>\n  <li class="store-icons__item">\n    <a href="').concat(u,'" target="_blank" \n    class="icon-link" ><img\n        src="').concat(t(M),'"\n        alt="').concat(l,'"\n        width="33"\n        height="32"\n        class="store-icon"\n    /></a>\n  </li>\n  <li class="store-icons__item">\n    <a href="').concat(b,'"\n    target="_blank" class="icon-link"><img\n        src="').concat(t(R),'"\n        alt="').concat(p,'"\n        width="38"\n        height="36"\n        class="store-icon"\n    /></a>\n  </li>\n</ul>\n  </div>');return V.dataset.id="".concat(n),_}function P(t){t.target.classList.contains("backdrop")&&(F.removeEventListener("click",P),F.classList.add("backdrop--hidden"),W.classList.remove("modal-open"))}function Y(t){"Escape"===t.code&&(window.removeEventListener("keydown",Y),F.classList.add("backdrop--hidden"),W.classList.remove("modal-open"))}N.addEventListener("click",(function(t){return I.apply(this,arguments)})),D.addEventListener("click",B.openSignUpFunc),V.addEventListener("click",(function(t){return z.apply(this,arguments)})),s("95ECi"),s("jCI1E"),s("llppj"),s("ghnK3")}();
//# sourceMappingURL=index.32f75bec.js.map
