javascript: var Title = $("#cn-centre-col-inner").children(".span-6")[0].innerText;
var Citation = $("#cn-centre-col-inner").children(".span-6")[1].innerHTML;
if (typeof $("#cn-centre-col-inner").children(".span-6")[0].childNodes[1] !== 'undefined') {
   Citation = Citation.replace(Title, "<a href='" + $("#cn-centre-col-inner").children(".span-6")[0].childNodes[1].href + "'>" + Title + "</a>");
}
Citation.trim() + ", " + (($("div:contains('DOI:')").length || $("div:contains('doi:')").length) == 0 ? "" : ($("div:contains('DOI: ')")[$("div:contains('DOI: ')").length - 1] || $("div:contains('doi: ')")[$("div:contains('doi: ')").length - 1] || $("div:contains('DOI:')")[$("div:contains('DOI:')").length - 1] || $("div:contains('doi:')")[$("div:contains('doi:')").length - 1]).innerText.replace(/doi\s*:\s*(.*?)\s*/g, "DOI: $1") + ".");