$(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 300){
            $('.fixed-top').css('background', 'transparent');
        } else{
            $('.fixed-top').css('background', 'black');
        }
    });

function mobNavBackground(x) {
  $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 100){
            $('.fixed-top').css('background', 'transparent');
        } else{
            $('.fixed-top').css('background', 'black');
        }
    });
}

var x = window.matchMedia("(max-width: 620px)")
mobNavBackground(x) // Call listener function at run time
x.addListener(mobNavBackground) // Attach listener function on state changes

// function mobNavColClose(x) {
 
// }

// var z = window.matchMedia("(max-width: 620px)")
// mobNavColClose(z) // Call listener function at run time
// z.addListener(mobNavColClose) // Attach listener function on state changes

