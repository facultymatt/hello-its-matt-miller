const OFFSET = 40;
const EMAIL = 'mattmillerart@gmail.com';
/* eslint angular/document-service: 0 */
export const hello = {
  template: require('./hello.html'),
  /** @ngInject */
  controller($window, $timeout, $state, $document, screenSize) {
    this.email = 'Email';
    this.OFFSET = OFFSET;
    // Show email address and select it
    this.showEmail = $event => {
      this.email = EMAIL;
      $timeout(() => {
        const selection = $window.getSelection();
        const range = document.createRange();
        range.selectNodeContents($event.target);
        selection.removeAllRanges();
        selection.addRange(range);
      });
    };
    // go to state OR scroll based on screen size
    this.goTo = category => {
      if (screenSize.is('xs, sm')) {
        $state.go(category);
      } else {
        const categoryElement = angular.element(document.getElementById(category));
        if (categoryElement.length) {
          $document.scrollToElementAnimated(categoryElement, OFFSET);
        }
      }
    };
  }
};
