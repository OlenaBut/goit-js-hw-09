const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,d.disabled=!1,o=setInterval((()=>{colorRandom=`#${Math.floor(16777215*Math.random()).toString(16)}`,e.style.background=colorRandom}),1e3)})),d.addEventListener("click",(function(){t.disabled=!1,d.disabled=!0,clearInterval(o)}));let o=null;
//# sourceMappingURL=01-color-switcher.bdf6e0d8.js.map