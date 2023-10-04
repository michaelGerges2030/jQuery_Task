$('.openIcn').click(function(){
    $('.open').animate({left:'0px'}, "slow")
})

$('.close').click(function(){
    $('.open').animate({left:'-260px'}, "slow")
})

$('.detail h2').click(function(e){
    $(e.target).next().slideToggle();
    $('.detail p').not($(e.target).next()).slideUp();
    // Another solution
    // $('.detail p').not($(e.target).next()).hide();
})

$('textarea').keyup(function () { 
   let textLength = $(this).val().length;
   if (textLength < 100){
    $('.charsNum').text(100 - textLength);
   }
   else {
    $('.charsNum').text("Your available character finished ");
   }
});

let endDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(()=>{
    let dateNow = new Date().getTime();

    let timeDiff = endDate - dateNow;
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff %( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff %( 1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((timeDiff %( 1000 * 60)) / 1000);

document.querySelector('.days').innerHTML= (days < 10 ? `0${days}` : days ) + " D";
document.querySelector('.hours').innerHTML= (hours < 10 ? `0${hours}` : hours) + " H";
document.querySelector('.minutes').innerHTML= (minutes < 10 ? `0${minutes}` : minutes) +" M";
document.querySelector('.seconds').innerHTML= (seconds < 10 ? `0${seconds}` : seconds) +" S";

if (datediff <=0 ){
    clearInterval(counter);
}
}, 1000)