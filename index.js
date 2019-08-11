$(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 300){
            $('.fixed-top').css('background', 'transparent');
        } else{
            $('.fixed-top').css('background', 'black');
        }
    });

// function chgCol(){
// 	// document.getElementById("MyElement").classList.add('MyClass');
// 	document.getElementById("#navBut").classList
// }
