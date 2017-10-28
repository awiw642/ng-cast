angular.module('video-player')
  .service('youTube', function($http){
    this.search = function(query) {
      return $http.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            part: 'snippet',
            key: window.YOUTUBE_API_KEY,
            q: query,
            maxResults: 5,
            type: 'video',
            videoEmbeddable: 'true'
          }
        }
      ).then(function successCallback({data}) {
        return data.items;
      }, function errorCallback(response) {
        console.log(response);
      });
    };
  });