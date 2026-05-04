let titleHU = 'Fülöp Dorka profil kártya'; // string: 'string' "string" `string`
let titleEN = 'Dorka Fulop profile card';
let nameHU = 'Fülöp Dorka';
let nameEN = 'Dorka Fulop';

function languageChangeHU() {
    document.querySelector('[data-i18n="title"]').innerHTML = titleHU;
    document.querySelector('[data-i18n="name"]').innerHTML = nameHU;
    console.log('Magyar Nyelv');
}

function languageChangeEN() {
    document.querySelector('[data-i18n="title"]').innerHTML = titleEN;
    document.querySelector('[data-i18n="name"]').innerHTML = nameEN;
    console.log('English Language');
}