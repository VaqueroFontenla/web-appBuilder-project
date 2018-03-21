define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {

    return declare([BaseWidget], {


      baseClass: 'jimu-widget-B',
      startup: function() {
        this.inherited(arguments);
        this.fechDataByName('widgetA');
      },
      onReceiveData: function(name, widgetId, data, historyData) {
        if (name != 'widgetA') {
          return;
        }
        var msg = '<div style="margin:10px;">' +
          '<p> Recibimos datos de : </p>' + name +
          '<p> Identificador : </p>' + widgetId +
          '<p> Mensaje : </p>' + data + '</div>';

        this.messageNode.innerHTML += msg;

      }


    });
  });