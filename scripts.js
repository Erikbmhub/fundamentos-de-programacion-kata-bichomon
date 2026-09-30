console.log(document.title);
console.log(document.querySelector('.infocard'))
//1.
document.getElementById('gen-1').innerHTML="Generasión 1 Pokimon"
//2.
const fotos = document.querySelectorAll("body > main > div:nth-child(6) img")
//document.querySelector('.infocard-list-pkmn-lg').style.backgroundColor = 'yellow';
//3.
console.log(fotos)

for (let i = 0; i < fotos.length; i++) {
  fotos[i].style.backgroundColor ="yellow";

}
//body > main > div:nth-child(9)

const generation2 = document.querySelector("body > main > div:nth-child(9) img")

document.querySelector('body > main > div:nth-child(9) img');

for (let i=0; i< generation2.length; i++){
    generation2[i].style.backgroundColor = "red";
}
console.log(generation2)



//4.
console.log(window.location.href);//Imprimo dominio pagina

//5.
/*onst nodo = document.querySelector('.infocard-list');

nodo.childNodes.forEach(child => {
  console.log(child);
});*/

document.querySelectorAll('.img-sprite').forEach(img =>{
    console.log(img.src);
})

//6.
document.querySelectorAll('.infocard-list img').forEach(img => {
  img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
});

//7.
const tarjetas = document.querySelectorAll('.infocard-lg-data.text-muted');

for (let i = 0; i < tarjetas.length; i++) {
  const tarjeta = tarjetas[i];

  const tipos = tarjeta.querySelectorAll('.itype');

  for (let j = 0; j < tipos.length; j++) {
    const tipo = tipos[j];

    if (tipo.classList.contains('flying')) {
      tarjeta.style.backgroundColor = 'lightblue';
    }
  }
}
