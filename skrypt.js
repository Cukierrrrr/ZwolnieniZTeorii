//historia
function nadHistorii(){
    var xd =  document.getElementById("historia");
    xd.style.cursor = "pointer";
    xd.style.transform = "scale(1.1)";
}
function zaHistorii(){
    var xd =  document.getElementById("historia");
    xd.style.cursor = "default";
    xd.style.transform = "scale(1)";
}
function naprawaH(){
    document.getElementById("historia").addEventListener("click", Historia);
    document.getElementById("historia").removeEventListener("mouseout", naprawaH);
}
function powHistoria(){
    var xd =  document.getElementById("historia");
    xd.style.position = 'static';
    xd.style.width = '30%';
    xd.style.height = 'calc(30vh * 0.8)';
    xd.style.transform = "scale("+window.innerWidth/xd.offsetWidth+", "+window.innerHeight/xd.offsetHeight+")";
    xd.style.translate = String(window.innerWidth/2-xd.offsetWidth/2-xd.offsetLeft+2) + 'px -' + String((document.getElementById("licznik1").offsetHeight+document.getElementById("licznik2").offsetHeight-window.scrollY)/2+12) + 'px';
    document.getElementById('powrothis').style.transform = "scale(1)";
    document.getElementById('nazwahis').style.transform = "scale(1)";
    document.getElementById('nazwahis').style.left = "0";
    document.getElementById('powrothis').style.left = "0";
    document.getElementById('powrothis').style.top = "0";
    document.getElementById('powrothis').style.transition = '250ms';
    xd.style.transition = '250ms';
    xd.style.transform = "scale(1)";
    xd.style.translate = '0px 0px';
    console.log('xd');
    xd.style.zIndex = '1';
    xd.style.borderRadius = '30px';
    xd.style.overflowY = 'hidden';
    document.querySelector('body').style.overflowY = 'scroll';
    document.getElementById("powrothis").style.opacity = '0';
    document.getElementById("powrothis").removeEventListener("click", powHistoria);
    document.getElementById("historia").removeEventListener("scroll", scrollHistoria)
    xd.addEventListener("mouseover", nadHistorii);
    xd.addEventListener("mouseout", zaHistorii);
    xd.addEventListener("mouseout", naprawaH);
}
function scrollHistoria(){
    document.getElementById("powrothis").style.top = document.getElementById("historia").scrollTop + 34 + 'px';
}
function Historia(){
    var xd =  document.getElementById("historia");
    xd.removeEventListener("mouseover", nadHistorii);
    xd.removeEventListener("mouseout", zaHistorii);
    xd.removeEventListener("click", Historia);
    xd.style.cursor = "default";
    xd.style.transform = "scale("+window.innerWidth/xd.offsetWidth+", "+window.innerHeight/xd.offsetHeight+")";;
    xd.style.translate = String(window.innerWidth/2-xd.offsetWidth/2-xd.offsetLeft+2) + 'px -' + String((document.getElementById("licznik1").offsetHeight+document.getElementById("licznik2").offsetHeight-window.scrollY)/2+12) + 'px';
    xd.style.zIndex = '2';
    xd.style.borderRadius = '0';
    document.querySelector('body').style.overflowY = 'hidden';
    xd.style.transition = '0ms';
    setTimeout(function(){
        xd.style.transform = "scale(1)";
        xd.style.translate = '0px';
        xd.style.position = 'fixed';
        xd.style.top = 0;
        xd.style.left = '-1.65vw';
        xd.style.width = '100vw';
        xd.style.height = '100vh';
        document.getElementById('powrothis').style.transition = '0ms';
        document.getElementById('powrothis').style.transform = "scale(4.94, 4.2)";
        document.getElementById('nazwahis').style.transform = "scale(4.94, 4.2)";
        document.getElementById('nazwahis').style.left = "0.75vw";
        document.getElementById('powrothis').style.left = "4vw";
        document.getElementById('powrothis').style.top = "1.8vw";
        xd.style.overflowY = 'scroll';
    },250)
    document.getElementById("powrothis").style.opacity = '1';
    document.getElementById("powrothis").addEventListener("click", powHistoria);
    document.getElementById("historia").addEventListener("scroll", scrollHistoria)
}
document.getElementById("historia").addEventListener("mouseover", nadHistorii)
document.getElementById("historia").addEventListener("mouseout", zaHistorii)
document.getElementById("historia").addEventListener("click", Historia);
//jubileusz
function nadJubileusz(){
    var xd =  document.getElementById("jubileusz");
    xd.style.cursor = "pointer";
    xd.style.transform = "scale(1.1)";
}
function zaJubileusz(){
    var xd =  document.getElementById("jubileusz");
    xd.style.cursor = "default";
    xd.style.transform = "scale(1)";
}
function naprawaJ(){
    document.getElementById("jubileusz").addEventListener("click", Jubileusz);
    document.getElementById("jubileusz").removeEventListener("mouseout", naprawaJ);
}
function powJubileusz(){
    var xd =  document.getElementById("jubileusz");
    xd.style.position = 'static';
    xd.style.width = '30%';
    xd.style.height = 'calc(30vh * 0.8)';
    xd.style.transform = "scale("+window.innerWidth/xd.offsetWidth+", "+window.innerHeight/xd.offsetHeight+")";
    xd.style.translate = '8px -' + String((document.getElementById("licznik1").offsetHeight+document.getElementById("licznik2").offsetHeight-window.scrollY)/2+12) + 'px';
    document.getElementById('powrotjub').style.transform = "scale(1)";
    document.getElementById('nazwajub').style.transform = "scale(1)";
    document.getElementById('nazwajub').style.left = "0";
    document.getElementById('powrotjub').style.left = "0";
    document.getElementById('powrotjub').style.top = "0";
    document.getElementById('powrotjub').style.transition = '250ms';
    xd.style.transition = '250ms';
    xd.style.transform = "scale(1)";
    xd.style.translate = '0px 0px';
    xd.style.zIndex = '1';
    xd.style.borderRadius = '30px';
    xd.style.overflowY = 'hidden';
    document.querySelector('body').style.overflowY = 'scroll';
    document.getElementById("powrotjub").style.opacity = '0';
    document.getElementById("powrotjub").removeEventListener("click", powJubileusz);
    document.getElementById("jubileusz").removeEventListener("scroll", scrollJubileusz)
    xd.addEventListener("mouseover", nadJubileusz);
    xd.addEventListener("mouseout", zaJubileusz);
    xd.addEventListener("mouseout", naprawaJ);
}
function scrollJubileusz(){
    document.getElementById("powrotjub").style.top = document.getElementById("jubileusz").scrollTop + 34 + 'px';
}
function Jubileusz(){
    var xd =  document.getElementById("jubileusz");
    xd.removeEventListener("mouseover", nadJubileusz)
    xd.removeEventListener("mouseout", zaJubileusz)
    xd.removeEventListener("click", Jubileusz)
    xd.style.cursor = "default";
    xd.style.transform = "scale("+window.innerWidth/xd.offsetWidth+", "+window.innerHeight/xd.offsetHeight+")";
    xd.style.translate = '8px -' + String((document.getElementById("licznik1").offsetHeight+document.getElementById("licznik2").offsetHeight-window.scrollY)/2+12) + 'px';
    xd.style.zIndex = '2';
    xd.style.borderRadius = '0';
    document.querySelector('body').style.overflowY = 'hidden';
    xd.style.transition = '0ms';
    setTimeout(function(){
        xd.style.transform = "scale(1)";
        xd.style.translate = '0px';
        xd.style.position = 'fixed';
        xd.style.top = 0;
        xd.style.left = '-1.65vw';
        xd.style.width = '100vw';
        xd.style.height = '100vh';
        document.getElementById('powrotjub').style.transition = '0ms';
        document.getElementById('powrotjub').style.transform = "scale(4.94, 4.2)";
        document.getElementById('nazwajub').style.transform = "scale(4.94, 4.2)";
        document.getElementById('nazwajub').style.left = "0.75vw";
        document.getElementById('powrotjub').style.left = "4vw";
        document.getElementById('powrotjub').style.top = "1.8vw";
        xd.style.overflowY = 'scroll';
    },250)
    document.getElementById("powrotjub").style.opacity = '1';
    document.getElementById("powrotjub").addEventListener("click", powJubileusz);
    document.getElementById("jubileusz").addEventListener("scroll", scrollJubileusz)
}
document.getElementById("jubileusz").addEventListener("mouseover", nadJubileusz)
document.getElementById("jubileusz").addEventListener("mouseout", zaJubileusz)
document.getElementById("jubileusz").addEventListener("click", Jubileusz);
//zdjęcia
function nadZdjecia(){
    var xd =  document.getElementById("zdiecia");
    xd.style.cursor = "pointer";
    xd.style.transform = "scale(1.1)";
}
function zaZdjecia(){
    var xd =  document.getElementById("zdiecia");
    xd.style.cursor = "default";
    xd.style.transform = "scale(1)";
}
function naprawaZ(){
    document.getElementById("zdiecia").addEventListener("click", Zdjecia);
    document.getElementById("zdiecia").removeEventListener("mouseout", naprawaZ);
}
function powZdjecia(){
    var xd =  document.getElementById("zdiecia");
    xd.style.position = 'static';
    xd.style.width = '30%';
    xd.style.height = 'calc(30vh * 0.8)';
    xd.style.transform = "scale("+window.innerWidth/xd.offsetWidth+", "+window.innerHeight/xd.offsetHeight+")";
    xd.style.translate = String(window.innerWidth/2-xd.offsetWidth/2-xd.offsetLeft) + 'px -' + String((document.getElementById("licznik1").offsetHeight+document.getElementById("licznik2").offsetHeight-window.scrollY)/2+12) + 'px';
    document.getElementById('powrotzdj').style.transform = "scale(1)";
    document.getElementById('nazwazdj').style.transform = "scale(1)";
    document.getElementById('nazwazdj').style.left = "0";
    document.getElementById('powrotzdj').style.left = "0";
    document.getElementById('powrotzdj').style.top = "0";
    document.getElementById('powrotzdj').style.transition = '250ms';
    xd.style.transition = '250ms';
    xd.style.transform = "scale(1)";
    xd.style.translate = '0px 0px';
    console.log('xd');
    xd.style.zIndex = '1';
    xd.style.borderRadius = '30px';
    xd.style.overflowY = 'hidden';
    document.querySelector('body').style.overflowY = 'scroll';
    document.getElementById("powrotzdj").style.opacity = '0';
    document.getElementById("powrotzdj").removeEventListener("click", powZdjecia);
    document.getElementById("zdiecia").removeEventListener("scroll", scrollZdjecia)
    xd.addEventListener("mouseover", nadZdjecia);
    xd.addEventListener("mouseout", zaZdjecia);
    xd.addEventListener("mouseout", naprawaZ);
}
function scrollZdjecia(){
    document.getElementById("powrotzdj").style.top = document.getElementById("zdiecia").scrollTop + 34 + 'px';
}
function Zdjecia(){
    var xd =  document.getElementById("zdiecia");
    xd.removeEventListener("mouseover", nadZdjecia)
    xd.removeEventListener("mouseout", zaZdjecia)
    xd.removeEventListener("click", Zdjecia)
    xd.style.cursor = "default";
    xd.style.transform = "scale("+window.innerWidth/xd.offsetWidth+", "+window.innerHeight/xd.offsetHeight+")";
    xd.style.translate = String(window.innerWidth/2-xd.offsetWidth/2-xd.offsetLeft) + 'px -' + String((document.getElementById("licznik1").offsetHeight+document.getElementById("licznik2").offsetHeight-window.scrollY)/2+12) + 'px';
    xd.style.zIndex = '2';
    xd.style.borderRadius = '0';
    document.querySelector('body').style.overflowY = 'hidden';
    xd.style.transition = '0ms';
    setTimeout(function(){
        xd.style.transform = "scale(1)";
        xd.style.translate = '0px';
        xd.style.position = 'fixed';
        xd.style.top = 0;
        xd.style.left = '-1.65vw';
        xd.style.width = '100vw';
        xd.style.height = '100vh';
        document.getElementById('powrotzdj').style.transition = '0ms';
        document.getElementById('powrotzdj').style.transform = "scale(4.94, 4.2)";
        document.getElementById('nazwazdj').style.transform = "scale(4.94, 4.2)";
        document.getElementById('nazwazdj').style.left = "0.75vw";
        document.getElementById('powrotzdj').style.left = "4vw";
        document.getElementById('powrotzdj').style.top = "1.8vw";
        xd.style.overflowY = 'scroll';
    },250)
    document.getElementById("powrotzdj").style.opacity = '1';
    document.getElementById("powrotzdj").addEventListener("click", powZdjecia);
    document.getElementById("zdiecia").addEventListener("scroll", scrollZdjecia)
}
document.getElementById("zdiecia").addEventListener("mouseover", nadZdjecia)
document.getElementById("zdiecia").addEventListener("mouseout", zaZdjecia)
document.getElementById("zdiecia").addEventListener("click", Zdjecia);
