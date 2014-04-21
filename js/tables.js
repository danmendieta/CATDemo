function drawTable2() {
        var datos = new google.visualization.DataTable();
        datos.addColumn('string', 'Fecha');
        datos.addColumn('string', 'Concepto');
        datos.addColumn('number', 'Cargo');
        datos.addColumn('number', 'Abono');
        datos.addColumn('number', 'Saldo');
        datos.addRows([
          ['18/03/2014','Desposito en ventanilla',1000,5000,3500],
          ['15/03/2014','Desposito en ventanilla',1000,5000,3500],
          ['13/03/2014','Desposito en ventanilla',1000,5000,3500],
          ['12/03/2014','Desposito en ventanilla',1000,5000,3500],
          ['08/03/2014','Desposito en ventanilla',1000,5000,3500],
          ['07/03/2014','Desposito en ventanilla',1000,5000,3500],
          ['01/03/2014','Desposito en ventanilla',1000,5000,3500]

        ]);


        var table = new google.visualization.Table(document.getElementById('table_div2'));
        table.draw(datos, {showRowNumber: true, pageSize: 10});
      }



		     var visualization;

         google.setOnLoadCallback(drawTable2);

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Cuentas de Ahorro');
        data.addColumn('number', 'Saldo Actual');
        data.addColumn('number', 'Transito');
        data.addColumn('number', 'Pignoración Garantía');
        data.addColumn('number', 'Pignoración Cobranza');
        data.addColumn('number', 'Saldo Disponible');
        data.addRows([
          ['Despositos Vista',10000,1000,5000,3500,500],
          ['Ahorro Infantil',10000,1000,5000,3500,500],
          ['Cuenta Ahorro',10000,1000,5000,3500,500],
          ['Ahorro Infantil Plus',10000,1000,5000,3500,500],
          ['Cuenta Uno',10000,1000,5000,3500,500]

        ]);

    // Note: This sample shows the select event.
    // The select event is a generic select event,
    // for selecting rows, columns, and cells.
    // However, in this example, only rows are selected.
    // Read more here: http://code.google.com/apis/visualization/documentation/gallery/table.html#Events
    
    function drawVisualization() {
      visualization = new google.visualization.Table(document.getElementById('table'));
      visualization.draw(data, null);
    
      // Add our selection handler.
      google.visualization.events.addListener(visualization, 'select', selectHandler);
    }
    
    // The selection handler.
    // Loop through all items in the selection and concatenate
    // a single message from all of them.
    function selectHandler() {
      var selection = visualization.getSelection();
      var message = '';
      for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        if (item.row != null && item.column != null) {
          var str = data.getFormattedValue(item.row, item.column);
          message += '{row:' + item.row + ',column:' + item.column + '} = ' + str + '\n';
        } else if (item.row != null) {
          var str = data.getFormattedValue(item.row, 0);
          message += '{row:' + item.row + ', (no column, showing first)} = ' + str + '\n';
        } else if (item.column != null) {
          var str = data.getFormattedValue(0, item.column);
          message += '{(no row, showing first), column:' + item.column + '} = ' + str + '\n';
        }
      }
      if (message == '') {
        message = 'nothing';
      }
      $('#table_div2').show();
      //alert('You selected ' + message);
      //alertaaa();
      //$('#myModalLabel').text(str );
      $('#tittleTabla').text('Cuenta: '+str );
      //$('#myModal').modal('show');

        
    }
    
    

    google.setOnLoadCallback(drawVisualization);






   
