function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequire7bc7=i);var l=i("eWCmQ");const r=document.querySelector(".form");function s({position:e,delay:o}){const n=Math.random()>.3;return new Promise(((t,i)=>{setTimeout((()=>{console.log(o),n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}r.addEventListener("submit",(function(o){o.preventDefault();let n=Number(r.elements.delay.value),t=Number(r.elements.step.value),i=Number(r.elements.amount.value);for(let o=0;o<i;o+=1)s({i:o,delay:n}).then((({position:n,delay:t})=>{e(l).Notify.success(`Fulfilled promise ${o+1} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(l).Notify.failure(`Rejected promise ${o+1} in ${t}ms`)})),n+=t}));
//# sourceMappingURL=03-promises.8f958e57.js.map