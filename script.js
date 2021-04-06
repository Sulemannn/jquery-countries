function getCountries() {

    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: function(data, statuts, response) {

            console.log(data);
        }
    });
}

$(function (){

    getCountries();
})
