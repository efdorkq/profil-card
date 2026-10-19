// @ts-nocheck
//document.getElementById('name').innerHTML = '<em>Gipsz Jakab</em>';
//document.querySelector('#name').textContent = '<em>Gipsz Jakap<em>';

const nameHU = 'Fülöp Dorka';
const nameEN = 'Dorka Fulop';
const professionHU = 'Szoftverfejlesztő';
const prodessionEN = 'Software Developer';
const addressHU = 'Magyarország, Dunaújváros';
const addressEN = 'Dunaujvaros, Hungary';
const aboutHU = '';
const aboutEN = '';
const contactHU = 'Lépj velem kapcsolatba:';
const contactEN = 'Contact me via:';
const githubHU = '<a href="https://github.com/efdorkq" target="_blank" title="Tekintsd meg a Github repositorymat."><i><i class="fa-brands fa-2x fa-github"></i></i></a>';
const githubEN = '<a href="https://github.com/efdorkq" target="_blank" title="Take a look at my Github repository."><i><i class="fa-brands fa-2x fa-github"></i></i></a>';
const linkedinHU = '<a href="" target="_blank" title="Látogass meg LinkedInen"><i class="fa-brands fa-2x fa-linkedin-in"></i></>';
const linkedinEN = '<a href="" target="_blank" title="Visit me on LinkedIn."><i class="fa-brands fa-2x fa-linkedin-in"></i></a>';

initLanguageDefault();

function initLanguageDefault() {
  languageChangeEN();
}

function languageChangeHU() {
  document.getElementById('name').textContent = nameHU;
  document.getElementById('profession').textContent = professionHU;
  document.getElementById('address').textContent = addressHU;
  document.getElementById('about').textContent = aboutHU;
  document.getElementById('contact').textContent = contactHU;
  document.getElementById('github').innerHTML = githubHU;
  document.getElementById('linkedin').innerHTML = linkedinHU;
}

function languageChangeEN() {
  document.getElementById('name').textContent = nameEN;
  document.getElementById('profession').textContent = prodessionEN;
  document.getElementById('address').textContent = addressEN;
  document.getElementById('about').textContent = aboutEN;
  document.getElementById('contact').textContent = contactEN;
  document.getElementById('github').innerHTML = githubEN;
  document.getElementById('linkedin').innerHTML = linkedinEN;
}