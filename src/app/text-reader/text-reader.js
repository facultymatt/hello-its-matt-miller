export const textReader = {
  template: require('./text-reader.html'),
  /** @ngInject */
  controller($http) {
    $http.get(`text/${this.category}.html`).then(response => {
      this.hello = response.data;
    });
  },
  transclude: true,
  bindings: {
    category: '<'
  }
};
