angular.module('video-player')

  .component('videoList', {
    bindings: {
      data: '<'
    },

    controller: function() {
      console.log('Video List: ', this);
    },

    templateUrl: 'src/templates/videoList.html'
  });
