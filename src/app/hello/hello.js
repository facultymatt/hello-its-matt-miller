const OFFSET = 40;
const EMAIL = 'mattmillerart@gmail.com';
export const hello = {
  template: require('./hello.html'),
  controller($window, $timeout, $state, $document, screenSize) {
    this.email = 'Email';
    this.OFFSET = OFFSET;
    // Show email address and select it 
    this.showEmail = function($event) {
      this.email = EMAIL;
      $timeout(() => {
        var selection = $window.getSelection();
        var range = document.createRange();
        range.selectNodeContents($event.target);
        selection.removeAllRanges();
        selection.addRange(range);
      });
    }
    // go to state OR scroll based on screen size
    this.goTo = (category) => {
      if (screenSize.is('xs, sm')) {
        $state.go(category);
      } else {
        var categoryElement = angular.element(document.getElementById(category));
        if (categoryElement.length) {
          $document.scrollToElementAnimated(categoryElement, OFFSET);
        }
      }
    }
  }
};
