export const textReader = {
  template: require('./text-reader.html'),
  controller() {
    this.hello = require(`./../../text/${this.category}.html`);
  },
  transclude: true,
  bindings: {
    category: '<'
  }
};
