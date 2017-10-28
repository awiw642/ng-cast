angular.module('video-player')
  .service('youTube', function($http){
    this.search = function(query, key, maxResults) {
      console.log('It gets to youtube.js');
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: 'Cats',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }).then(function successCallback(data) {
        console.log(data);

      }, function errorCallback(response) {
        console.log(response);
      });
    };
  });






  //
/*
  $http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });*/