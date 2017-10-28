angular.module('video-player')

  .component('search', {
    controller: function(youTube) {

      this.result = function() {
        youTube.search();
      };

      this.youtubeSearch = function() {
        console.log('Calling this youtube search');
        youTube.search('cats', window.YOUTUBE_API_KEY, 5);
      };

    },

    templateUrl: 'src/templates/search.html'
  });
