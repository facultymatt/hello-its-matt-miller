export const textReader = {
  template: require('./text-reader.html'),
  /** @ngInject */
  controller() {
    this.hello = require(`./../../text/${this.category}.html`);
  },
  transclude: true,
  bindings: {
    category: '<'
  }
};
