export const textReader = {
  template: require('./text-reader.html'),
  controller($http) {
    this.hello = 'Hello Matt the ' + this.category;
    $http.get('text/' + this.category + '.html').then((response) => {
      this.hello = response.data;
    });
  },
  transclude: true,
  bindings: {
    category: '<'
  }
};
