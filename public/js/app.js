const btn = document.querySelector('.btn-custom') 
const barsAnimation = document.querySelector('.btn-bar1')
const barsAnimation1 = document.querySelector('.btn-bar2')
const barsAnimation2 = document.querySelector('.btn-bar3')
const Menu = document.querySelector('.container-custom')
const li = document.querySelector('li')
const soundBeep = document.querySelector('.toggle-light')
const audio = document.getElementById('audio')
const logo = document.querySelector('.logo')
AOS.init({
    duration: 600,
    delay: 40
}
    
);

let lightMode = localStorage.getItem('lightMode')
    console.log(lightMode);
const enableLightmode = () => {
    document.body.classList.add("lightmode")
    localStorage.setItem('lightMode' , "enabled")
    soundBeep.classList.remove("toggle-light")
    soundBeep.classList.add("toggle-sun")
    logo.classList.add("logoinvert")
}
const disableLightmode = () => {
    document.body.classList.remove("lightmode")
    localStorage.setItem('lightMode' , null)
    soundBeep.classList.remove("toggle-sun")
    soundBeep.classList.add("toggle-light")
    logo.classList.remove("logoinvert")
}
if(lightMode === "enabled"){
    enableLightmode();
}
soundBeep.addEventListener('click' , () => {
    lightMode = localStorage.getItem("lightMode")
    if (lightMode !== "enabled") {
        enableLightmode();
        console.log(lightMode);
    } else {
        disableLightmode();
        console.log(lightMode);
    }
    audio.play();
   

})

btn.addEventListener('click' , ()=> {
    if (barsAnimation1.style.transform == "translateX(-100%)" && barsAnimation2.style.transform == "translateY(-15px) rotate(-50deg)") {
        barsAnimation.style.transform = "translateY(0) rotate(0)"
        barsAnimation2.style.transform = "translateY(0) rotate(0)"
        barsAnimation1.style.transform = "translateX(0) "
        barsAnimation1.style.width = "50px"
        li.style.display = "none"
    }else{
        barsAnimation.style.transform = "translateY(15px) rotate(50deg)"
        barsAnimation2.style.transform = "translateY(-15px) rotate(-50deg)"
        barsAnimation1.style.transform = "translateX(-100%)  "
        barsAnimation1.style.width = "0px"
        li.style.display = "none"

    }
    Menu.classList.toggle('toggle')
    
})

$(document).ready(function(){
    $('.btn-custom').click(function(){
        $('#li1').fadeIn(1000)
        $('#li2').fadeIn(5000)
        $('#li4').fadeIn(8000)
        $('#li3').fadeIn(9000)

    })
})



$(document).ready(function () {
    $(window).on('load' , function(){
        $('.loading-wrapper').fadeOut(3000)
    })
})

$('form').on('submit' , (e) => {
    e.preventDefault();

    const Email = $('#Email').val().trim();
    const Name = $('#Name').val().trim()
    const Message = $('#Message').val().trim()
    console.log("hamid");

    const data = {
        Email,
        Name,
        Message
    }

    $.post('/email',data, function () {
        console.log('data transferred successfully');
    })

})