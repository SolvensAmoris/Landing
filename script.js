const botones=document.querySelectorAll("a");

botones.forEach(b=>{

b.addEventListener("mouseenter",()=>{

b.style.boxShadow="0 0 25px gold";

});

b.addEventListener("mouseleave",()=>{

b.style.boxShadow="none";

});

});
