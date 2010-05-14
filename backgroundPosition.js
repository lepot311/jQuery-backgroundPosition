var isIE = $.browser.msie ? true : false

function debug(trace){
  $('#debug').text(String(trace))
}

$.fn.extend({
  backgroundPosition: function(kwargs) {
    if (isIE) {
      if (kwargs.x && kwargs.y) {
        this.css('background-position-x', kwargs.x+'px')
            .css('background-position-y', kwargs.y+'px')
      } else if (kwargs.x) {
        this.css('background-position-x', kwargs.x+'px')
      } else if (kwargs.y) {
        this.css('background-position-y', kwargs.y+'px')
      }
      return [this.css('background-position-x'), this.css('background-position-y')]
    } else {
      if (kwargs.x && kwargs.y) {
        this.css('background-position', kwargs.x+'px '+kwargs.y+'px')
      } else if (kwargs.x) {
        // console.log(this[0])
        // var lastx = this.css('background-position')
        this.css('background-position', kwargs.x+'px '+String(this.css('background-position')).split(' ')[1])
      } else if (kwargs.y) {
        this.css('background-position', String(this.css('background-position')).split(' ')[0]+' '+kwargs.y+'px')
      }
      return String(this.css('background-position')).split(' ')
    }
  }
})