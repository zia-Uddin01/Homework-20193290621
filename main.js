// sticky Navigation

let navbar=$(".navbar");

$(window).scroll(function(){
    let oTop=$(".section-2").offset().top-window.innerHeight;
    if($(window).scrollTop() > oTop){
        bavbar.addClass("sticky");
    }else{
        navbar.removeClass("sticky");
    }
});

// Counter Animation

let nCounter=function(section){
    $(section).each(function(){
        $(this).animate({
            counter:$(this).text()
         },
         { 
            duration:400,
            easing:"swing",
            step:function(value){
                $(this).text(Math.cell(value));
            }
         }
        
        
        );
    });
}


let a=0;
$(window).scroll(function(){
    let oTop=$(".numbers").offset().top-window.innerHeight;
    if(a==0 && $(window).scrollTop()>=oTop){
        a++;
        nCounter(".rect>h1")
    }
})
   