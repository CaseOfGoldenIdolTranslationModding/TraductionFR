let button = document.getElementById("dl-save");
let select = document.getElementById("select-save");

button.addEventListener('click', function () {
    let url = "data:text/html,backup_files/" + select.selectedIndex + "_savegame_fr.save";
    download(url, select.selectedIndex + "_savegame_fr.save")
});

function download(url, filename) {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}
