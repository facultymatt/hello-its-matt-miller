export const photoViewer = {
  template: require('./photo-viewer.html'),
  /** @ngInject */
  controller($timeout) {
    this.showImage = false;
    this.imgLoadedEvents = {
      done: () => {
        $timeout(() => {
          this.showImage = true;
        }, 100);
      }
    };
  },
  bindings: {
    category: '<'
  }
};
