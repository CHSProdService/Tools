javascript:
/*-- Vairables to hold the information you would like to fill in --*/
var speciesEng = "[SPECIES ENG]";
var speciesFra = "[SPECIES FRA]";
var statusEng = "[STATUS ENG]";
var statusFra = "[STATUS FRA]";

/*-- Survey closing date yyyy/mm/dd 00:00:00 am/pm --*/
var endDate = "2018/01/01 00:00:00 AM";

/*-----------------------------------------------------*/
/*-- Changes the text in the main survey information --*/
/*-----------------------------------------------------*/
$('#NameEng').text($('#NameEng').text().replace('[SPECIES ENG]', speciesEng));
$('#DescriptionEng').text($('#DescriptionEng').text().replace('[SPECIES ENG]', speciesEng));
$('#DescriptionEng').text($('#DescriptionEng').text().replace('[STATUS ENG]', statusEng));
$('#NameFra').text($('#NameFra').text().replace('[SPECIES FRA]', speciesFra));
$('#DescriptionFra').text($('#DescriptionFra').text().replace('[SPECIES FRA]', speciesFra));
$('#DescriptionFra').text($('#DescriptionFra').text().replace('[STATUS FRA]', statusFra));
/*-----------------------------------------------------*/

/*----------------------------------------------*/
/*-- Changes the text in individual questions --*/
/*----------------------------------------------*/
$('#TextEng').text($('#TextEng').text().replace('[SPECIES ENG]', speciesEng));
$('#TextEng').text($('#TextEng').text().replace('[STATUS ENG]', statusEng));
$('#TextFra').text($('#TextFra').text().replace('[SPECIES FRA]', speciesFra));
$('#TextFra').text($('#TextFra').text().replace('[STATUS FRA]', statusFra));
/*----------------------------------------------*/

/*-- Sets the end date --*/
$('#End').val(endDate);

/*-- Makes sure survey is public --*/
$('#IsPublic').prop('checked', true);

/*-- Submits the changed data --*/
$('input:submit').click();