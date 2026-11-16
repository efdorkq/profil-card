// @ts-nocheck
//document.getElementById('name').innerHTML = '<em>Gipsz Jakab</em>';
//document.querySelector('#name').textContent = '<em>Gipsz Jakap<em>';

const translations = {
  name: {
    HU: 'Fülöp Dorka',
    EN: 'Dorka Fulop'
  },
  profession: {
    HU: 'Szoftverfejlesztő',
    EN: 'Software Developer'
  },
  address: {
    HU: 'Magyarország, Dunaújváros',
    EN: 'Dunaujvaros, Hungary'
  },
  about: {
    HU: '<p class="paragraph">Szoftverfejlesztői tudásom alapját<strong><em>Java, Spring Boot, JPA, HTML, CSS, SQL, Git, Maven</em></strong>technológiák ismeretei alakítják.'
+ '<br>Szoftverfejlesztői képességemet a <a href="https://github.com/efdorkq" target="_blank" title="Tekintsd meg a Github repositorymat."><strong>GitHUB</strong></a>'
+ 'repository-mban található kisebb-nagyobb projekteken keresztül mutatom be.</p><p class="paragraph">Önéletrajzomat megnézheted a <a href="https://www.linkedin.com/in/dorka-fulop-efdorkq/" target="_blank" title="Látogass meg LinkedInen"><strong>LinkedIn-en</strong></a></p>',
    EN: '<p class="paragraph">My software development knowledge based on the next technologies:<strong><em>Java, Spring Boot, JPA, HTML, CSS, SQL, Git, Maven</em></strong>.'
+ '<br>You can find out more about my ability as a software developer through smaller and larger projects in my<a href="https://github.com/efdorkq" target="_blank" title="Take a look at my GitHub repository."><strong>GitHUB</strong></a>'
+ 'repositoty.</p><p class="paragraph">You can see my professional CV on <a href="https://www.linkedin.com/in/dorka-fulop-efdorkq/" target="_blank" title="Visit me on LinkedIn"><strong>LinkedIn</strong></a></p>'
  },
  contact: {
    HU: 'Lépj velem kapcsolatba:',
    EN: 'Contact me via:'
  },
  github: {
    HU: '<a href="https://github.com/efdorkq" target="_blank" title="Tekintsd meg a Github repositorymat."><i class="fa-brands fa-2x fa-github trans"></i></a>',
    EN: '<a href="https://github.com/efdorkq" target="_blank" title="Take a look at my Github repository."><i class="fa-brands fa-2x fa-github trans"></i></a>'
  },
  linkedin: {
    HU: '<a href="https://www.linkedin.com/in/dorka-fulop-efdorkq/" target="_blank" title="Látogass meg LinkedInen"><i class="fa-brands fa-2x fa-linkedin-in trans"></i></a>',
    EN: '<a href="https://www.linkedin.com/in/dorka-fulop-efdorkq/" target="_blank" title="Visit me on LinkedIn."><i class="fa-brands fa-2x fa-linkedin-in trans"></i></a>'
  },
  email: {
    HU: '<a href="mailto:dorka.fulop.dorci@gmail.com" target="_blank" title="Küldj emailt: dorka.fulop.dorci@gmail.com"><i class="fa-regular fa-2x fa-envelope trans"></i></a>',
    EN: '<a href="mailto:dorka.fulop.dorci@gmail.com" target="_blank" title="Send me email: dorka.fulop.dorci@gmail.com"><i class="fa-regular fa-2x fa-envelope trans"></i></a>'
  },
  mobile: {
    HU: '<a href="tel:+36706012645" target="_blank" title="Hívj fel: +36 70 601 2645"><i class="fa-solid fa-2x fa-mobile-screen trans"></i></a>',
    EN: '<a href="tel:+36706012645" target="_blank" title="Call me: +36 70 601 2645"><i class="fa-solid fa-2x fa-mobile-screen trans"></i></a>'
  }

}

initLanguageDefault();

function initLanguageDefault() {
  languageChangeEN();
}

function languageChangeHU() {
  setTextContent('name', nameHU);
  setTextContent('profession', professionHU);
  setTextContent('address', addressHU);
  setInnerHTML('about', aboutHU);
  setTextContent('contact', contactHU);
  setInnerHTML('github', githubHU);
  setInnerHTML('linkedin', linkedinHU);
  setInnerHTML('email', emailHU);
  setInnerHTML('mobile', mobileHU);
}


function languageChangeEN() {
  setTextContent('name', nameEN);
  setTextContent('profession', professionEN);
  setTextContent('address', addressEN);
  setInnerHTML('about', aboutEN);
  setTextContent('contact', contactEN);
  setInnerHTML('github', githubEN);
  setInnerHTML('linkedin', linkedinEN);
  setInnerHTML('email', emailEN);
  setInnerHTML('mobile', mobileEN);
}

function setTextContent(key, value) {
  document.querySelector(`[data-i18n="${key}"]`).textContent = value;
}

function setInnerHTML(key, value) {
  document.querySelector(`[data-i18n="${key}"]`).innerHTML = value;
}

/* 
const nameHU = 'Fülöp Dorka';
const nameEN = 'Dorka Fulop';
const professionHU = 'Szoftverfejlesztő';
const prodessionEN = 'Software Developer';
const addressHU = 'Magyarország, Dunaújváros';
const addressEN = 'Dunaujvaros, Hungary';
const aboutHU = '<p class="paragraph">Szoftverfejlesztői tudásom alapját<strong><em>Java, Spring Boot, JPA, HTML, CSS, SQL, Git, Maven</em></strong>technológiák ismeretei alakítják.'
+ '<br>Szoftverfejlesztői képességemet a <a href="https://github.com/efdorkq" target="_blank" title="Tekintsd meg a Github repositorymat."><strong>GitHUB</strong></a>'
+ 'repository-mban található kisebb-nagyobb projekteken keresztül mutatom be.</p><p class="paragraph">Önéletrajzomat megnézheted a <a href="https://www.linkedin.com/in/dorka-fulop-efdorkq/" target="_blank" title="Látogass meg LinkedInen"><strong>LinkedIn-en</strong></a></p>';
const aboutEN = '<p class="paragraph">My software development knowledge based on the next technologies:<strong><em>Java, Spring Boot, JPA, HTML, CSS, SQL, Git, Maven</em></strong>.'
+ '<br>You can find out more about my ability as a software developer through smaller and larger projects in my<a href="https://github.com/efdorkq" target="_blank" title="Take a look at my GitHub repository."><strong>GitHUB</strong></a>'
+ 'repositoty.</p><p class="paragraph">You can see my professional CV on <a href="https://www.linkedin.com/in/dorka-fulop-efdorkq/" target="_blank" title="Visit me on LinkedIn"><strong>LinkedIn</strong></a></p>';
const contactHU = 'Lépj velem kapcsolatba:';
const contactEN = 'Contact me via:';
const githubHU = '<a href="https://github.com/efdorkq" target="_blank" title="Tekintsd meg a Github repositorymat."><i class="fa-brands fa-2x fa-github trans"></i></a>';
const githubEN = '<a href="https://github.com/efdorkq" target="_blank" title="Take a look at my Github repository."><i class="fa-brands fa-2x fa-github trans"></i></a>';
const linkedinHU = '<a href="https://www.linkedin.com/in/dorka-fulop-efdorkq/" target="_blank" title="Látogass meg LinkedInen"><i class="fa-brands fa-2x fa-linkedin-in trans"></i></a>';
const linkedinEN = '<a href="https://www.linkedin.com/in/dorka-fulop-efdorkq/" target="_blank" title="Visit me on LinkedIn."><i class="fa-brands fa-2x fa-linkedin-in trans"></i></a>';
const emailHU = '<a href="mailto:dorka.fulop.dorci@gmail.com" target="_blank" title="Küldj emailt: dorka.fulop.dorci@gmail.com"><i class="fa-regular fa-2x fa-envelope trans"></i></a>';
const emailEN = '<a href="mailto:dorka.fulop.dorci@gmail.com" target="_blank" title="Send me email: dorka.fulop.dorci@gmail.com"><i class="fa-regular fa-2x fa-envelope trans"></i></a>';
const mobileHU = '<a href="tel:+36706012645" target="_blank" title="Hívj fel: +36 70 601 2645"><i class="fa-solid fa-2x fa-mobile-screen trans"></i></a>';
const mobileEN = '<a href="tel:+36706012645" target="_blank" title="Call me: +36 70 601 2645"><i class="fa-solid fa-2x fa-mobile-screen trans"></i></a>';
*/

/* v01
function languageChangeHU() {
  document.querySelector('[data-i18n="name"]').textContent = nameHU;
  document.querySelector('[data-i18n="profession"]').textContent = professionHU;
  document.querySelector('[data-i18n="address"]').textContent = addressHU;
  document.querySelector('[data-i18n="about"]').innerHTML = aboutHU;
  document.querySelector('[data-i18n="contact"]').textContent = contactHU;
  document.querySelector('[data-i18n="github"]').innerHTML = githubHU;
  document.querySelector('[data-i18n="linkedin"]').innerHTML = linkedinHU;
  document.querySelector('[data-i18n="email"]').innerHTML = emailHU;
  document.querySelector('[data-i18n="mobile"]').innerHTML = mobileHU;
}
*/

/* v00
function languageChangeHU() {
  document.getElementById('name').textContent = nameHU;
  document.getElementById('profession').textContent = professionHU;
  document.getElementById('address').textContent = addressHU;
  document.getElementById('about').innerHTML = aboutHU;
  document.getElementById('contact').textContent = contactHU;
  document.getElementById('github').innerHTML = githubHU;
  document.getElementById('linkedin').innerHTML = linkedinHU;
  document.getElementById('email').innerHTML = emailHU;
  document.getElementById('mobile').innerHTML = mobileHU;
}
*/