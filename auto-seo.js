/*
========================================
 AUTO SEO + ADS INJECTOR
 NO HTML EDIT REQUIRED
========================================
*/

(function () {

/* =========================
   CONFIG
========================= */
const CONFIG = {
    AD_LINK: "https://omg10.com/4/11155181",
    ADS_ENABLED: true
};

/* =========================
   AUTO INJECT ADS FUNCTION
========================= */
window.showAd = function () {
    if (CONFIG.ADS_ENABLED) {
        window.open(CONFIG.AD_LINK, "_blank");
    }
};

/* =========================
   AUTO SEO INJECTION
========================= */
function injectSEO() {

    // Meta description
    if (!document.querySelector("meta[name='description']")) {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = "Free AI Image Generator - Create AI images instantly using text prompts.";
        document.head.appendChild(meta);
    }

    // Theme color
    if (!document.querySelector("meta[name='theme-color']")) {
        const meta = document.createElement("meta");
        meta.name = "theme-color";
        meta.content = "#0f0f0f";
        document.head.appendChild(meta);
    }
}

/* =========================
   AUTO IMAGE OPTIMIZATION
========================= */
function optimizeImages() {
    document.querySelectorAll("img").forEach(img => {
        img.loading = "lazy";
    });
}

/* =========================
   AUTO BUTTON ADS TRIGGER
========================= */
function autoAds() {
    document.addEventListener("click", function () {
        showAd();
    });
}

/* =========================
   INIT (RUN AUTOMATICALLY)
========================= */
function init() {
    injectSEO();
    optimizeImages();
    autoAds();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

})();
