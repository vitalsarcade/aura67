const n=[720,1080,1440,2160];function t(t){if(0===t)return 0;if("number"==typeof t)return t;const e="undefined"!=typeof window?window.screen:void 0;if(!e)return 0;const i=Math.min(e.width||0,e.height||0),o=Math.max(i,i*(window.devicePixelRatio||1));return o<600?0:n.find(n=>o<=n+1)??Math.round(o)}const e=["auto",720,1080,0];export{e as O,t};
//# sourceMappingURL=resolution-D5UUhnDU.js.map
