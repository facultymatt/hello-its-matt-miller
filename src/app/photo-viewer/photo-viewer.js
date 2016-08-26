export const photoViewer = {
  template: require('./photo-viewer.html'),
  controller($timeout) {
    $timeout(() => {
      this.showImage = true;
    }, 100);
  },
  bindings: {
    category: '<'
  }
};
