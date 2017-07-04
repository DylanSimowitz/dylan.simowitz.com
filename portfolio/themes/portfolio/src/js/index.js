import '../css/main.scss';
// import 'scroll-restoration-polyfill';
import Barba from 'barba.js';
import $ from 'jquery';
import Isotope from 'isotope-layout';
import home from './home';

const $content= document.querySelector('.content');
const $loader = document.querySelector('#container-loader');
// history.scrollRestoration = 'manual';

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 400, function() {
      _this.done();
    });
  }
});

Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

window.addEventListener('load', () => {
  Barba.Pjax.start();
})

home.init()
