const button =document.getElementById("button-share");
const share =document.getElementById("share-info")

button.addEventListener("click",()=>{
    if(share.style.display == "none") share.style.display = `flex`;
    else share.style.display = `none`;
})