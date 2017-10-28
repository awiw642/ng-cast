angular.module('video-player')

  .controller('appCtrl', function(youTube) {
    this.videos = [];
    this.currentVideo = null;
    var that = this;

    this.selectVideo = function(video) {
      that.currentVideo = video;
    };

    this.results = (videos) => {
      this.videos = videos;
      this.currentVideo = videos[0];
    };

    youTube.search('puppies').then((data) => {this.results(data) });
  })

  .component('app', {

    controller: 'appCtrl',

    templateUrl: 'src/templates/app.html'
  });
