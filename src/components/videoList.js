angular.module('video-player')

  .component('videoList', {
    bindings: {
      videos: '<',
      currentVideo: '=',
      onClick: '<'
    },

    controller: function() {
      console.log('Video List: ', this.onClick);
    },

    templateUrl: 'src/templates/videoList.html'
  });
