//selektrori
var ispis = document.querySelector(`#ispis`);
var ime = document.querySelector(`#ime`);
var broj = document.querySelector(`#broj`);
var tabela = document.getElementById("ispis");
const redovi = document.getElementsByClassName(`row`);
const initRoll = document.getElementsByClassName(`initRoll`);
var btn = document.querySelector(`#podaci`);
var btnSort = document.querySelector(`#sortiraj`);

//Funkcije
btn.addEventListener("click", ispisiPodatke);
btnSort.addEventListener(`click`, sortiraj);

//Funcije rad
function ispisiPodatke(e) {
  e.preventDefault();
  ime.focus();
  let vrednostImena = ime.value;
  let vrednostBroja = broj.value;
  ispis.innerHTML += `<tr class="row">
  <td class="npcNames" >${vrednostImena}</td>
  <td class="initRoll">${vrednostBroja}</td>
  
</tr>`;
}

function sortiraj() {
  for (let i = 0; i < initRoll.length; i++) {
    for (let j = i + 1; j < initRoll.length; j++) {
      let poeni1 = parseInt(initRoll[i].innerHTML);
      let poeni2 = parseInt(initRoll[j].innerHTML);
      if (poeni1 < poeni2) {
        if (poeni1 < poeni2) {
          let pom = initRoll[i].parentElement.innerHTML;
          initRoll[i].parentElement.innerHTML =
            initRoll[j].parentElement.innerHTML;
          initRoll[j].parentElement.innerHTML = pom;
        }
      }
    }
  }
}
