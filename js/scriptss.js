$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    items : 5,
    responsive: {
    0: {
      items: 2
    },

    600: {
      items: 3
    },

    1024: {
      items: 5
    },

    1366: {
      items: 5
    }
  }
})