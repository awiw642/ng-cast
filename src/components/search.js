angular.module('video-player')

  .controller('searchCtrl', function(youTube) {
    this.handleSearch = () => {
      youTube.search(this.searchInput).then((data) => {
        this.results(data);
      });
    };
  })

  .component('search', {
    bindings: {
      results: '<'
    },

    controller: 'searchCtrl',

    templateUrl: 'src/templates/search.html'
  });



