const notificacao = "O Herói de nome ";
const notificacaonivel = " está no nivel de ";

let nome = "Xaolin Matador de porco";
let xp = 6340;

if (xp <= 1000) {
  console.log(notificacao + nome + notificacaonivel + "Ferro");
} else if (xp >= 1001 && xp <= 2000) {
  console.log(notificacao + nome + notificacaonivel + "Bronze");
} else if (xp >= 2001 && xp <= 5000) {
  console.log(notificacao + nome + notificacaonivel + "Prata");
} else if (xp >= 6001 && xp <= 7000) {
  console.log(notificacao + nome + notificacaonivel + "Ouro");
} else if (xp >= 7001 && xp <= 8000) {
  console.log(notificacao + nome + notificacaonivel + "Platina");
} else if (xp >= 8001 && xp <= 9000) {
  console.log(notificacao + nome + notificacaonivel + "Ascendente");
} else if (xp >= 9001 && xp <= 10000) {
  console.log(notificacao + nome + notificacaonivel + "Imortal");
}
//deduzindo que não existe XP negativo no game
else {
  console.log(notificacao + nome + notificacaonivel + "Radiante");
}
