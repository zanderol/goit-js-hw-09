!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=i);var r=i("iU1Pc"),l=document.querySelector(".form");l.addEventListener("submit",(function(n){var o=function(n){var o,l,a,u;(o={i:n,delay:t},l=o.position,a=o.delay,u=Math.random()>.3,new Promise((function(e,n){setTimeout((function(){console.log(a),u?e({position:l,delay:a}):n({position:l,delay:a})}),a)}))).then((function(o){o.position;var t=o.delay;e(r).Notify.success("Fulfilled promise ".concat(n+1," in ").concat(t,"ms"))})).catch((function(o){o.position;var t=o.delay;e(r).Notify.failure("Rejected promise ".concat(n+1," in ").concat(t,"ms"))})),t+=i};n.preventDefault();for(var t=Number(l.elements.delay.value),i=Number(l.elements.step.value),a=Number(l.elements.amount.value),u=0;u<a;u+=1)o(u)}))}();
//# sourceMappingURL=03-promises.fecf0faa.js.map
