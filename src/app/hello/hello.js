const OFFSET = 40; // needs to sync with css
const EMAIL = 'mattmillerart@gmail.com';
const HELP_HTML = ' <small>copied to clipboard</small>';
const START_HTML = 'Email';
const ACTIVE_CLASS = 'hello-active';
const DELAY = 3000;
/* eslint angular/document-service: 0 */
export const hello = {
  template: require('./hello.html'),
  /** @ngInject */
  controller($window, $timeout, $state, $document, screenSize, clipboard) {
    this.emailDisplay = START_HTML;
    this.OFFSET = OFFSET;
    this.doShowCredits = false;
    // Show email address and select it
    this.showEmail = $event => {
      const elem = angular.element($event.target);
      elem.addClass(ACTIVE_CLASS);
      // copy email to clipboard
      clipboard.copyText(EMAIL);
      // message user
      this.emailDisplay = EMAIL + HELP_HTML;
      // highlight selection
      $timeout(() => {
        this.emailDisplay = START_HTML;
        elem.removeClass(ACTIVE_CLASS);
      }, DELAY);
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
    // set display of credits
    this.showCredits = (doShow = true) => {
      this.doShowCredits = doShow;
    };
  }
};
