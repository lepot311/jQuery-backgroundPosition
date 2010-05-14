var isIE = $.browser.msie ? true : false

function debug(trace){
  $('#debug').text(String(trace))
}

$.fn.extend({
  backgroundPosition: function(kwargs) {
    if (isIE) {
      if (kwargs.x && kwargs.y) {
        this.css('background-position-x', kwargs.x)
            .css('background-position-y', kwargs.y)
      } else if (kwargs.x) {
        this.css('background-position-x', kwargs.x)
      } else if (kwargs.y) {
        this.css('background-position-y', kwargs.y)
      }
      return [this.css('background-position-x'), this.css('background-position-y')]
    } else {
      if (kwargs.x && kwargs.y) {
        this.css('background-position', kwargs.x+' '+kwargs.y )
      } else if (kwargs.x) {
        this.css('background-position', kwargs.x+' '+String(this.css('background-position')).split(' ')[1])
      } else if (kwargs.y) {
        this.css('background-position', String(this.css('background-position')).split(' ')[0]+' '+kwargs.y)
      }
      return String(this.css('background-position')).split(' ')
    }
  }
})