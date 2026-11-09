// @ts-nocheck
//document.getElementById('name').innerHTML = '<em>Gipsz Jakab</em>';
//document.querySelector('#name').textContent = '<em>Gipsz Jakap<em>';

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

initLanguageDefault();

function initLanguageDefault() {
  languageChangeEN();
}

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

function languageChangeEN() {
  document.getElementById('name').textContent = nameEN;
  document.getElementById('profession').textContent = prodessionEN;
  document.getElementById('address').textContent = addressEN;
  document.getElementById('about').innerHTML = aboutEN;
  document.getElementById('contact').textContent = contactEN;
  document.getElementById('github').innerHTML = githubEN;
  document.getElementById('linkedin').innerHTML = linkedinEN;
  document.getElementById('email').innerHTML = emailEN;
  document.getElementById('mobile').innerHTML = mobileEN;
}