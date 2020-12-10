// Display Loading Overlay
function loadingOverlay(display) {
    document.getElementById("overlay_wrapper").style.display = display;
}

$(function() {
    // Data Picker Initialization
    $("#txtStartDate, #txtEndDate").datepicker();

    // Close Form
    $(".btn-form-close").on("click", function() {
        $(".overlay").css("display", "none");
        $(".form-collapse").toggleClass("toggle");
    });

    // Open Add Project Form
    $("#addproject").on("click", function() {
        $(".overlay").css("display", "block");
        loadingOverlay("block");
        setTimeout(function () {
             loadingOverlay("none"); 
            $(".overlay, .form-collapse").toggleClass("toggle");
            }, 2000);
    });

    // Open Search Project Form
    $("#search").on("click", function() {
        $(".overlay").css("display", "block");
        loadingOverlay("block");
        setTimeout(function () {
             loadingOverlay("none");
            $(".overlay, .form-collapse").toggleClass("toggle");
            }, 2000);
    });

    const donors = document.querySelector("#txtDonors");
    const sectors = document.querySelector("#txtSectors");

    // Donors input form tags input
    const tagifyDonors = new Tagify(donors, {
        whitelist: [
            "Enim",
            "Blandit",
            "Volutpat",
            "Maecenas",
            "Consectetur",
            "Dictum",
            "Scelerisque"
            ],
        dropdown: {
            position: "input",
            enabled : 0 // always opens dropdown when input gets focus
        }
    });

    // Sectors input form tags input
    const tagifySectors = new Tagify(sectors, {
        whitelist: [
            "Enim",
            "Blandit",
            "Volutpat",
            "Maecenas",
            "Consectetur",
            "Dictum",
            "Scelerisque"
            ],
        dropdown: {
            position: "input",
            enabled : 0 // always opens dropdown when input gets focus
        }
    });

    // Sample auto suggestion values
    var statusTags = [
        "Enim",
        "Blandit",
        "Volutpat",
        "Maecenas",
        "Consectetur",
        "Dictum",
        "Scelerisque"
        ];

    $("#txtStatus, #txtDivision, #txtDonors, #txtSectors").autocomplete({
        source: statusTags,
        minLength: 0
    }).focus(function () {
        $(this).autocomplete("search", "");
    });

    // Display loading overlay
    $("#btnSave").on("click", function () {
        loadingOverlay("block");
        // After 3 seconds, page will refresh to remove overlay loading screen
        setTimeout(function () { location.reload(true); }, 3000);
    });
});