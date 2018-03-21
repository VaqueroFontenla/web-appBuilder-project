define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {
    var contadorApertura = 0;
    var contadorCierre = 0;
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-customwidget-ciclovida',


      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function() {
        this.inherited(arguments);
        console.log('postCreate');

        alert("Estado postCreate")
      },

      startup: function() {
        this.inherited(arguments);
        console.log('startup');

        alert("Estado startup")
      },

      onOpen: function() {
        console.log('onOpen');

        contadorApertura = contadorApertura + 1;
        alert("Estado on Open\n", "Numero de aperturas : " + contadorApertura);
      },

      onClose: function() {
        console.log('onClose');
        contadorCierre = contadorCierre + 1;
        alert("Estado on Close\n", "Numero de cierres : " + contadorCierre);
      },

      onMinimize: function() {
        console.log('onMinimize');

        alert("Estado onMinimize");
      },

      onMaximize: function() {
        console.log('onMaximize');

        alert("Estado onMaximize");
      },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      resize: function() {
        console.log('resize');

        alert("Estado resize");
      }

      //methods to communication between widgets:

    });
  });