const enterBtn=document.getElementById("enterBtn");
enterBtn.addEventListener("click",()=>{
  localStorage.setItem("visited","true");
  window.location.href="app.html";
});
