(function($) {
  jQuery(".desktop-currency .dropdown-currency").hide();
  jQuery(".desktop-currency .popup-title span").click(function(){
    if(jQuery(this).parent().next().is(":visible")){
      jQuery(this).addClass("active");
    }else{
      jQuery(this).removeClass("active");
    }
    jQuery(this).parent().next().toggle(400);
  });

  jQuery( ".header-links .icons" ).append( '<i class="fa fa-user"></i>' );
  jQuery(".header-links .cusstom-link").hide();
  jQuery(".header-links .icons i").addClass("accordion-show");
  jQuery(".header-links .icons i").click(function(){
    if(jQuery(this).parent().next().is(":visible")){
      jQuery(this).addClass("accordion-show");
    }else{
      jQuery(this).removeClass("accordion-show");
    }
    jQuery(this).parent().next().toggle(400);
  });

  jQuery('#search-top .icon-search').click(function(){
    jQuery('#search-top').addClass('active');
    jQuery('#search-top .search-form').fadeIn('300');
    jQuery('#search-top .search-form .inputbox').focus().css("color","#000");
  });
  jQuery('#search-top .search-close').click(function(){
    jQuery('#search-top').removeClass('active');
    jQuery('#search-top .search-form').fadeOut('300');
  });

  if (jQuery(window).width() < 992) {
    jQuery('.typo-header-cart a#cartToggle').click(function(){
      jQuery('#dropdown-cart').addClass('active');
      jQuery('body').addClass('show-cart');
    });
    jQuery('.close-cart i').click(function(){
      jQuery('#dropdown-cart').removeClass('active');
      jQuery('body').removeClass('show-cart');
    });

  }
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 200) {
      jQuery("#back-top").fadeIn()
    } else {
      jQuery("#back-top").fadeOut()
    }
  });
  jQuery( ".footer-top h3.module-title" ).append( '<i class="fa fa-angle-down"></i>' );
  jQuery(".footer-top .content").hide();
  jQuery(".footer-top h3.module-title i").addClass("accordion-show");
  jQuery(".footer-top h3.module-title i").click(function(){
    if(jQuery(this).parent().next().is(":visible")){
      jQuery(this).addClass("accordion-show");
    }else{
      jQuery(this).removeClass("accordion-show");
    }
    jQuery(this).parent().next().toggle(400);
  });



  $(document).ready(function(){
    $(window).load(function() {
      $('#loading').hide();
    });
  });

  $(document).ready(function(){
    $('.up-qty').click(function(){
      quantity =$('#quantity').val();
      $('#quantity').val(parseInt(quantity) + 1);
    });
    $('.down-qty').click(function(){
      quantity =$('#quantity').val();
      if(quantity > 1)
        $('#quantity').val(parseInt(quantity) - 1);
    });
  });

})(jQuery);