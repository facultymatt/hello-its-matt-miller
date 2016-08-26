export const photoViewer = {
  template: require('./photo-viewer.html'),
  controller() {
    this.showImage = false;
    this.imgLoadedEvents = {
      done: () => {
        this.showImage = true;
      }
    };
  },
  bindings: {
    category: '<'
  }
};
