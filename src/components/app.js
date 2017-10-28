angular.module('video-player')

  .component('app', {


    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];

      this.selectVideo = function(video) {
        let videoPassedBack = JSON.stringify(video, null, '\t');
        console.log('this works');
        this.currentVideo = video;
        let currentVideoNow = JSON.stringify(this.currentVideo, null, '\t');
        console.log('Equality Check: ' + _.isEqual(videoPassedBack, currentVideoNow));

      };

      this.searchResults = function() {

      };
    },

    templateUrl: 'src/templates/app.html'
  });
