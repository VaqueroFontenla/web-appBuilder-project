define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {

    return declare([BaseWidget], {


      baseClass: 'jimu-widget-A',
      i: 0,

      _onPublishClick: function() {
        this.publishData({
          message: 'Soy el widget A'
        });
        this.i++;
        this.pubInfoNode.innerHTML = 'informacion enviada' = this.i;
      },

    });
  });