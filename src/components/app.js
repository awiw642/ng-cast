angular.module('video-player')

  .component('app', {
    controller: function() {
      this.data = window.exampleVideoData;
      console.log(this.data);
      console.log(this, 'this');
    },

    templateUrl: 'src/templates/app.html'
  });
