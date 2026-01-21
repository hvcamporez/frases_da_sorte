let saida = "";

saida += "------------FRASE DA SORTE DO ANIVERSÁRIO------------\n\n";
saida += "SEJA BEM-VINDO!! LEIA A SORTE DO SEU ANIVERSÁRIO!!\n\n";

const dia = parseInt(prompt("Informe o dia do seu aniversário:"));

let mensagem = "";

if (dia === 1) {
  mensagem = "Sua Sorte: A vida trará coisas boas se você tiver paciência.";
} else if (dia === 2) {
  mensagem = "Sua Sorte: Demonstre amor e alegria em todas as oportunidades.";
} else if (dia === 3) {
  mensagem = "Sua Sorte: Não compense na ira o que lhe falta em razão.";
} else if (dia === 4) {
  mensagem = "Sua Sorte: Defeitos e virtudes são apenas dois lados da mesma moeda.";
} else if (dia === 5) {
  mensagem = "Sua Sorte: A maior de todas as torres começa no solo.";
} else if (dia === 6) {
  mensagem = "Sua Sorte: Acredite em você mesmo e o universo conspirará a seu favor.";
} else if (dia === 7) {
  mensagem = "Sua Sorte: Seja a mudança que você deseja ver no mundo.";
} else if (dia === 8) {
  mensagem = "Sua Sorte: O sucesso não é acidental, é resultado de esforço e dedicação.";
} else if (dia === 9) {
  mensagem = "Sua Sorte: Aprenda com o passado, viva o presente e sonhe com o futuro.";
} else if (dia === 10) {
  mensagem = "Sua Sorte: Sua criatividade é ilimitada, explore novos horizontes.";
} else if (dia === 11) {
  mensagem = "Sua Sorte: A jornada de mil quilômetros começa com um único passo.";
} else if (dia === 12) {
  mensagem = "Sua Sorte: A sorte favorece a mente preparada.";
} else if (dia === 13) {
  mensagem = "Sua Sorte: Seja corajoso, mesmo quando estiver com medo.";
} else if (dia === 14) {
  mensagem = "Sua Sorte: A amizade é o maior tesouro da vida.";
} else if (dia === 15) {
  mensagem = "Sua Sorte: Valorize cada momento, pois o tempo é um presente precioso.";
} else if (dia === 16) {
  mensagem = "Sua Sorte: Sorria, a felicidade é contagiante.";
} else if (dia === 17) {
  mensagem = "Sua Sorte: A verdadeira sabedoria está em reconhecer a própria ignorância.";
} else if (dia === 18) {
  mensagem = "Sua Sorte: Aproveite as pequenas coisas, pois elas tornam a vida grande.";
} else if (dia === 19) {
  mensagem = "Sua Sorte: A persistência é o caminho do êxito.";
} else if (dia === 20) {
  mensagem = "Sua Sorte: A compaixão é a linguagem universal do coração.";
} else if (dia === 21) {
  mensagem = "Sua Sorte: Seja grato pelo que tem, e mais virá até você.";
} else if (dia === 22) {
  mensagem = "Sua Sorte: Suas escolhas moldam seu destino, escolha sabiamente.";
} else if (dia === 23) {
  mensagem = "Sua Sorte: Cada novo dia é uma página em branco, escreva uma boa história.";
} else if (dia === 24) {
  mensagem = "Sua Sorte: O amor é a força mais poderosa do universo.";
} else if (dia === 25) {
  mensagem = "Sua Sorte: A melhor maneira de prever o futuro é criá-lo.";
} else if (dia === 26) {
  mensagem = "Sua Sorte: Seja gentil com cada pessoa que você encontrar.";
} else if (dia === 27) {
  mensagem = "Sua Sorte: A verdadeira beleza está na simplicidade.";
} else if (dia === 28) {
  mensagem = "Sua Sorte: O conhecimento é poder, compartilhe-o com o mundo.";
} else if (dia === 29) {
  mensagem = "Sua Sorte: A gratidão transforma o que temos em suficiente.";
} else if (dia === 30) {
  mensagem = "Sua Sorte: A cada desafio, surge uma oportunidade de crescimento.";
} else if (dia === 31) {
  mensagem = "Sua Sorte: O sucesso é a soma de pequenos esforços repetidos dia após dia.";
} else {
  mensagem = "DIA INVÁLIDO!!!";
}

saida += "\n************************************************************\n";
saida += mensagem + "\n";
saida += "************************************************************\n";

document.getElementById("saida").textContent = saida;
