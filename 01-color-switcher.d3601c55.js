const t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.setAttribute("disabled","disabled"),t.stopBtn.removeAttribute("disabled")})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.stopBtn.setAttribute("disabled","disabled"),t.startBtn.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.d3601c55.js.map
