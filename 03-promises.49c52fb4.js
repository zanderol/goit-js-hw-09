!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=i);var r=i("iU1Pc"),l=document.querySelector(".form");function a(e){var n=e.position,o=e.delay,t=Math.random()>.3;return new Promise((function(e,i){setTimeout((function(){console.log(o),t?e({position:n,delay:o}):i({position:n,delay:o})}),o)}))}l.addEventListener("submit",(function(n){n.preventDefault();for(var o=Number(l.elements.delay.value),t=Number(l.elements.step.value),i=Number(l.elements.amount.value),u=0;u<i;u+=1)a({i:u,delay:o}).then((function(n){var o=n.i,t=n.delay;e(r).Notify.success("Fulfilled promise ".concat(o+1," in ").concat(t,"ms"))})).catch((function(n){var o=n.i,t=n.delay;e(r).Notify.failure("Rejected promise ".concat(o+1," in ").concat(t,"ms"))})),o+=t}))}();
//# sourceMappingURL=03-promises.49c52fb4.js.map