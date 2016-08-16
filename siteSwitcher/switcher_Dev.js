javascript: var SiteVersion = "Dev";
var Sites = [
		//      INTERNET      //
    { //	ISDM
        Dev: ["isdmwebdev.chs.gc.ca"],
        Stg: [],
        Prod: ["isdm.gc.ca", "gdsi.gc.ca", "isdm-gdsi.gc.ca", "meds.dfo-mpo.gc.ca", "sdmm.dfo-mpo.gc.ca", "meds-sdmm.dfo-mpo.gc.ca"]
	},
    { //	CHS
        Dev: ["chswebdev.chs.gc.ca"],
        Stg: [],
        Prod: ["charts.gc.ca", "chs.gc.ca", "shc.gc.ca", "chs-shc.gc.ca"]
	},
    { //	COIL
        Dev: ["coilwebdev.chs.gc.ca", "coilwebdev.chs-shc.gc.ca"],
        Stg: [],
        Prod: ["coil.charts.gc.ca", "coil.chs.gc.ca", "coil.chs-shc.gc.ca"]
	},
    { //	Tides
        Dev: ["twldev.chs.gc.ca", "twldev.chs-shc.gc.ca"],
        Stg: [],
        Prod: ["tides.gc.ca", "marees.gc.ca", "tides-marees.gc.ca"]
	},
    { //	Science, Oceans, CSAS
        Dev: ["wwwdev.ncr.dfo-mpo.ca"],
        Stg: ["wwwstg.ncr.dfo-mpo.ca"],
        Prod: ["dfo-mpo.gc.ca"]
	},

		//      INTRANET      //
    { //	CHS
        Dev: ["chs-intradev.chs.gc.ca", "chs-intradev.chs-shc.gc.ca"],
        Stg: [],
        Prod: ["wwwintra.charts.gc.ca", "wwwintra.chs-shc.gc.ca"]
	},
    { //	ISDM
        Dev: ["isdm-intradev.chs.gc.ca", "isdm-intradev.chs-shc.gc.ca"],
        Stg: [],
        Prod: ["intra.isdm.gc.ca", "intra.isdm-gdsi.gc.ca"]
	},
    { //	Science
        Dev: ["intradev.ncr.dfo-mpo.ca"],
        Stg: [],
        Prod: ["intra.dfo-mpo.gc.ca"]
	}
];
(function () {
    for (Site in Sites) {
        for (Version in Sites[Site]) {
            if (Sites[Site][Version].indexOf(location.host.replace(/^www\./g, "")) !== -1 && Sites[Site][SiteVersion][0] !== undefined) {
                location.host = Sites[Site][SiteVersion][0];
            }
        }
    }
})();
