/*! Datatables Simplest Edit
 * datatables.net/license
 *
 * @summary     Datatables Simplest Edit
 * @description Edit cells of a datatable by clicking on them
 * @version     0.1
 * @author      Victor Vila
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

//// All your editable cell should have the .editable class

$('#yourTableID tbody').on( 'click', 'td.editable', function () {
  var celula = table.cell( this );
  $(this).removeClass('editable'); // avoid recursive  editing
  $(this).addClass('editingNow'); // lets you attach some style to edit mode
  celula.data( '<input id="editing" type="text" value="' + celula.data() + '" />');
} );

//// Updating

$('#yourTableID tbody').on('change', 'td.editingNow', function ()
{
  var celula = table.cell( this );
  $(this).removeClass('editingNow');
  $(this).addClass('editable');
  celula.data( $('#editing').val() );
  var linha = this.parentElement;
  //// You should create your own function to send an Ajax request
  //// to your server and update the BDD
  yourOwnFunctionToUpdateRow( table.row(linha).data() );
});
