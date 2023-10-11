let steam_container = document.getElementById('steam_container');
let steam_btn = document.getElementById('steam_btn');

let gog_container = document.getElementById('gog_container');
let gog_btn = document.getElementById('gog_btn');

if (localStorage.getItem('version') !== 'null') {
    changeVersion(localStorage.getItem('version'));
} else {
    steam_btn.disabled = true;
    gog_btn.disabled = false;
    localStorage.setItem('version', 'steam');
}

let url = document.URL.split('#')[1];
if (url !== undefined) {
    changeVersion(url);
}

function changeVersion(version) {
    localStorage.setItem('version', version);
    switch (version) {
        case 'steam':
            steam_container.style.display = 'block';
            gog_container.style.display = 'none';

            steam_btn.disabled = true;
            gog_btn.disabled = false;
            break;
        case 'gog':
            steam_container.style.display = 'none';
            gog_container.style.display = 'block';

            steam_btn.disabled = false;
            gog_btn.disabled = true;
            break;
    }
}