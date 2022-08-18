let maxImg = document.querySelector('.right-panel img');
let select = document.querySelector("select");
let allLang = ['en', 'ru', 'ua'];
document.querySelectorAll('.left-panel img').forEach(item => item.onmouseover = function () {
    maxImg.src = item.src
});
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.slice(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua';
        location.reload();
    };
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash];

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash] || langArr[key]['ua'];
        }
        if (!hash) {
            elem.innerHTML = langArr[key]['ua'];
        }
    }
}
changeLanguage();