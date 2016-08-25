export const homeButton = {
  template: require('./home-button.html'),
  controller() {
    this.size = this.size ? this.size : 'lg';
    this.class = 'btn-' + this.size;
  },
  bindings: {
    size: '@',
    category: '<'
  }
};
