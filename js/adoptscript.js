let position=0;
let cardwidth=330;
let slider=document.getElementById("slider");
function nextSlide()
{
    position = position -cardwidth;
    if(position <= -(slider.scrollWidth -1000))
{
    position=0;
}
slider.style.transform=
`translateX(${position}px)`;
}
function previousSlide()
{
    position = position+cardwidth;
    if(position>0)
{
    position=-(slider.scrollWidth-1000);
}
slider.style.transform=
`translateX(${position}px)`;
}
const openButton = document.querySelectorAll(".open");
const closeButton = document.querySelectorAll(".close");
const info = document.querySelectorAll(".info");
openButton.forEach(button => {
    button.addEventListener("click",()=>{
        button.nextElementSibling.classList.add("open");
    });
});
closeButton.forEach(button=>
{
button.addEventListener("click",() =>{
    button.closest(".info").classList.remove("open");
});
});