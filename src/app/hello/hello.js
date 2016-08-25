export const hello = {
  template: require('./hello.html'),
  controller($window, $timeout) {
    this.email = 'Email';
    this.showEmail = function($event) {
      this.email = 'mattmillerart@gmail.com';
      $timeout(() => {
        var selection = $window.getSelection();
        var range = document.createRange();
        range.selectNodeContents($event.target);
        selection.removeAllRanges();
        selection.addRange(range);
      });
    }
  }
};
