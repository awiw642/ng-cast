angular.module('video-player')

  .component('videoList', {
    bindings: {
      videos: '<',
      currentVideo: '=',
      onClick: '<'
    },

    templateUrl: 'src/templates/videoList.html'
  });
