
const btn=document.querySelector('.btn');
const color=['red','green','blue','pink','black','yellow','orange'];
const body=document.querySelector("body");

btn.addEventListener("click",(e)=>{

    const change=Math.floor(Math.random()*color.length);
    body.style.backgroundColor=color[change]
})