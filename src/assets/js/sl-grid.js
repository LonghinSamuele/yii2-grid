function cambiaPagina(e, url) {
    let t = $(e.target)[0];
    if (!$(t).is('A') && !$(t).is('SPAN') && !$(t).is('DIV') && !$(t).is('I') && !$(t).is('BUTTON') && !$(t).is('INPUT') && !$(t).is('TEXTAREA')) {
        window.location.href = url;
    }
}


 // Salva l\'ID del tab attivo nel localStorage quando viene cambiato
    $("a[data-toggle=\'tab\']").on("shown.bs.tab", function (e) {
        var tabId = $(e.target).attr("href").substr(1);
        localStorage.setItem("activeTab", tabId);
        window.location.hash = tabId;
    });

    // Recupera l\'ID del tab attivo dal localStorage quando la pagina viene caricata
    var activeTab = localStorage.getItem("activeTab");
    if (activeTab) {
        $("#myTab a[href=\'#" + activeTab + "\']").tab("show");
    }

    // Intercetta i clic sui link di ordinamento della GridView e aggiungi il parametro del tab corrente all\'URL
    $(document).on("click", ".sml-table-header th a[data-sort]", function (e) {
        e.preventDefault();
        var tabId = window.location.hash.substr(1);
        var url = new URL($(this).attr("href"), window.location.origin);
        url.hash = tabId;
        window.location.href = url.toString();
    });
