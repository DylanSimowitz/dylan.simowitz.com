import Barba from 'barba.js';
import $ from 'jquery';
import Isotope from 'isotope-layout';

let iso;

export default Barba.BaseView.extend({
  namespace: '/',
  onEnter: function() {
    const $grid = this.container.querySelector('.grid');
    iso = new Isotope($grid, {
      itemSelector: '.project',
      masonry: {
        gutter: 5,
        fitWidth: true,
      },
    })
  },
  onEnterCompleted: function() {

  },
  onLeave: function() {
  },
  onLeaveCompleted: function() {
    iso.destroy()
  }
});
