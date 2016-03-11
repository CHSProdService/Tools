javascript: var DevProd = {
    Dev: [/^chs-intradev.chs.gc.ca$/, /^chs-intradev.chs-shc.gc.ca$/, /^isdm-intradev.chs.gc.ca$/, /^isdm-intradev.chs-shc.gc.ca$/, /^intradev.ncr.dfo-mpo.ca$/, /^chswebdev.chs.gc.ca$/, /^coilwebdev.chs.gc.ca$/, /^coilwebdev.chs-shc.gc.ca$/, /^coilwebdev.chs.gc.ca$/, /^coilwebdev.chs-shc.gc.ca$/, /^wwwstg.ncr.dfo-mpo.ca$/, /^wwwdev.ncr.dfo-mpo.ca$/, /^isdmwebdev.chs.gc.ca$/, /^isdmwebdev.chs-shc.gc.ca$/, /^twldev.chs.gc.ca$/, /^twldev.chs.gc.ca$/],
    Prod: [/^wwwintra.chs-shc.gc.ca$/, /^wwwintra.chs-shc.gc.ca$/, /^intra.isdm-gdsi.gc.ca$/, /^intra.isdm-gdsi.gc.ca$/, /^intra.dfo-mpo.gc.ca$/, /^(www.)?charts.gc.ca$/, /^coil.charts.gc.ca$/, /^coil.charts.gc.ca$/, /^coil.chs.gc.ca$/, /^coil.chs-shc.gc.ca$/, /^(www.)?dfo-mpo.gc.ca$/, /^(www.)?dfo-mpo.gc.ca$/, /^(www.)?isdm.gc.ca$/, /^(www.)?isdm.gc.ca$/, /^(www.)?tides.gc.ca$/, /^(www.)?marees.gc.ca$/]
};
var Server1 = "Dev";
var Server2 = "Prod";
for (var s = 0; s < 2; s++) {
    for (var i = 0; i < DevProd[Server1].length; i++) {
        if (DevProd[Server1][i].test(location.host)) {
            location.host = (DevProd[Server2][i].source.slice(1, 8) == "(www.)?" ? DevProd[Server2][i].source.slice(8, -1) : DevProd[Server2][i].source.slice(1, -1));
            break;
        }
    }
    var Server1 = "Prod";
    var Server2 = "Dev";
}
void(0);