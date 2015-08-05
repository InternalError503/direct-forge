(function(global) {
    var {Services} = Components.utils.import("resource://gre/modules/Services.jsm", {});
    var gDirectForge = {
        directForgeAgent: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2391.0 Safari/537.36",
        init: function() {
            document.getElementById("PanelUI-popup").addEventListener("popupshowing", function(e) {
                try {
                    document.getElementById("toolbar_toggleDirectForge").checked = Services.prefs.getBoolPref("extensions.directforge.enabled");
                } catch (e) {}
            });
            try {
                document.getElementById("toolbar_toggleDirectForge").checked = Services.prefs.getBoolPref("extensions.directforge.enabled");
            } catch (e) {}
        },
        toggle: function() {
            try {
                if (!Services.prefs.getBoolPref("extensions.directforge.enabled")) {
                    Services.prefs.setBoolPref("extensions.directforge.enabled", true);
                    Services.prefs.setCharPref("general.useragent.override", this.directForgeAgent);
                } else {
                    Services.prefs.clearUserPref("extensions.directforge.enabled");
                    Services.prefs.clearUserPref("general.useragent.override");
                }
            } catch (e) {}
        }
    }
    window.addEventListener("load", function() {
        window.removeEventListener("load", gDirectForge.init(), false);
        gDirectForge.init();
    }, false);
    global.gDirectForge = gDirectForge;
}(this));