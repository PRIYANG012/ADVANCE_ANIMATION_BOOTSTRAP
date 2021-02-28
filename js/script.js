jQuery(function() { 
    lightbox.option({
       
        'wrapAround':true
    })

    $(window).scroll(function(){
        let position =$(this).scrollTop();


        if(position>=350){
            $('.gallery').addClass('change');
        }
        else{
            $('.gallery').removeClass('change');

        }
    })



    $('.places-accordion').click(function(event){
        if(event.target.id.split('_')[0]=='button'){
            $('#placedisplay1').attr('src','/images/'+event.target.id.split('_')[1]+'-1.jpg')
            $('#placedisplay2').attr('src','/images/'+event.target.id.split('_')[1]+'-2.jpg')
            
        };

    })



    $('.hamburger-menu').click(function() {
        $('.navigation').toggleClass('change');
    });
})