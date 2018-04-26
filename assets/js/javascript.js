var $Form = $('form'), $Container = $('#container');
$Container.hide();
$Form.on('submit', function(oEvent){
    var Url, Movie, Data;
    var apiKey = "(1aa25ebe)";
    oEvent.preventDefault();
Movie = $Form.find('input').val();
    Url = 'https://www.omdbapi.com/?t=' + Movie + "&r=json&apikey=" + apiKey;
    $.ajax(Url, {
        complete: function(oXHR, p_sStatus){
            Data = $.parseJSON(oXHR.responseText);
            console.log(Data);

			if (Data.Response === "False") {
				$Container.hide();
			} else {
				$Container.find('.title').text(Data.Title);
				$Container.find('.plot').text(Data.Plot);
				$Container.find('.poster').html('<img src="' + Data.Poster + '"/>');
				$Container.find('.year').text(Data.Year);
				$Container.show();
			}
        }
    });
});
