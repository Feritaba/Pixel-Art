const INPUT_WIDTH = $('#inputWidth');
const INPUT_HEIGHT = $('#inputHeight');
const GRID_SIZE = $('#sizePicker');
const TABLE = document.getElementById('pixelCanvas');
const TABLE_CLICK = $('#pixelCanvas');
const COLOR_PICKER = $('#colorPicker');

GRID_SIZE.submit(function makeGrid(e) {

 	//remove all children if user pressed submit before
	while (TABLE.firstChild) {
		TABLE.removeChild(TABLE.firstChild);
	}

	//make table with height and width that user entered
	for (h = 1 ; h <= INPUT_HEIGHT.val() ; h++) {
		let tr = document.createElement('tr');
		for (w = 1 ; w <= INPUT_WIDTH.val() ; w++) {
			let td = document.createElement('td');
			tr.appendChild(td);
			$(td).css( 'background-color' , 'rgb(255, 255, 255)');
		}
		TABLE.append(tr);
	}
	e.preventDefault();
});

//when user click on table cells, apply color or make it white
TABLE_CLICK.click('td' , function(e) {
   	const BGC = $(e.target).css('background-color');
   	if(BGC === 'rgb(255, 255, 255)') {
    	$(e.target).css('background-color', COLOR_PICKER.val());
    }
    else if ( BGC !== COLOR_PICKER.val()){
      $(e.target).css('background-color', COLOR_PICKER.val());
    }
});