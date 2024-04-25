const prev_btn=document.querySelector(".prev_arrow");
const next_btn=document.querySelector(".next_arrow");
const slider=document.querySelectorAll(".slider");
const  vedio=document.querySelector(".vedio")
const numberofSlides=slider.length;
var slidenumber=0;

next_btn.addEventListener('click', ()=>
{
    slider.forEach((slider)=>
    {
        slider.classList.remove("active");

      });
    slidenumber++;
    if(slidenumber>(numberofSlides-1))
    {
        slidenumber=0;
    }
    // slider.style.transform=translate("900px");
  
    slider[slidenumber].classList.add("active");
});



prev_btn.addEventListener('click', ()=>
{
    slider.forEach((slider)=>
    {
        slider.classList.remove("active");

      });
    slidenumber--;
    if(slidenumber<0)
    {
        slidenumber=numberofSlides-1;
    }
    // slider.style.transform=translate("900px");
    console.log("hello")
    slider[slidenumber].classList.add("active");
});
var playslider;
var repeater =()=>
{
    playslider=setInterval(function(){
        slider.forEach((slider)=>
        {
            slider.classList.remove("active");
    
          });
        slidenumber++;
        if(slidenumber>(numberofSlides-1))
        {
            slidenumber=0;
        }
        // slider.style.transform=translate("900px");
      
        slider[slidenumber].classList.add("active");

    },6000);
}
repeater();
