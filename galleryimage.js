let overlay=document.querySelector(".overlay");
// let imageshow=document.querySelector(".imageviewer");
var img=document.querySelector(".imageviewer img");
let close=document.querySelector(".imageviewer span");

let gallery =document.querySelector("#gallery");
gallery.addEventListener("click",(event)=>
{
    let imagepath=event.target.src;
    if(imagepath!==undefined){

        console.log(event);
        overlay.classList.add('overlayshow');
        // imageshow.classList.add('imageviewershow');
        img.src=imagepath;
    }
})

    close.addEventListener("click", ()=>
{
    overlay.classList.remove('overlayshow');
    // imageshow.classList.remove('imageviewershow');
})