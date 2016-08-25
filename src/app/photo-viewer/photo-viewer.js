const objectFitImages = require('object-fit-images');

export const photoViewer = {
  template: require('./photo-viewer.html'),
  controller() {
    // var oneImage = document.querySelector('img.photo-viewer-image');
    // console.log(oneImage);
    // objectFitImages(oneImage, {watchMQ: true});
  },
  bindings: {
    category: '<'
  }
};
