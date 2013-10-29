(function ( $ ) {

  
  $.fn.photoStack = function(options) {

    var settings = $.extend({
      
      max_count: 5,
      item_selector: 'li',
      image_selector: 'img'
      
    },options);
    
    $(this).css('display', 'block');
    $(this).css('margin', '0');
    $(this).css('padding', '0');
    $(this).css('list-style-type', 'none');
    $(this).css('position', 'relative');
    
    var width = $(this).width();
    var count_items = $(this.selector+' '+ settings.item_selector).size();
    
    var item_width = Math.round(width / count_items);
    
    $(this.selector +' '+ settings.image_selector).css('width', '100%');
    $(this.selector +' '+ settings.image_selector).css('height', 'auto');
    $(this.selector +' '+ settings.image_selector).css('border', '5px solid white');
    $(this.selector +' '+ settings.image_selector).css('box-shadow', '0px 0px 10px 2px rgba(66, 66, 66, 1)');
    
    
    var c = 0;
    
    $(this.selector+' '+ settings.item_selector).each(function() {
      
      $(this).css('width', item_width+'px');
      $(this).css('height', 'auto');
      $(this).css('display', 'block');
      $(this).css('position','absolute' );
      
      var left = c* item_width;
      
      if (c == 0) { left = left + 20; }
        
      if (c == count_items-1) { left = left -20; }
        
      $(this).css('left',left);
      
      var top = Math.floor((Math.random()*50));
      
      top = top + 20;
      
      $(this).css('top', top+'px');
      
      var degree = 0;
      
      while(degree == 0) {
        
        degree = Math.floor((Math.random()*10)) - 5;
      }
      
      
        
      $(this).css('transform','rotate('+ degree +'deg)');
      $(this).css('-moz-transform','rotate('+ degree +'deg)');
      $(this).css('webkit-transform','rotate('+ degree +'deg)');
      
      c++;
    });
    
    
    return this;

};

}( jQuery ));