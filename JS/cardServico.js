// Make Cards
const sectionCards = document.querySelector("div.linkTag");

const card = document.querySelector("div.mainView");

const cardServico = [
  {
    title: "Kauan Amorim Parreira (Front-End)",
    duration: "Conhecer Programador",
    thumb: src="./IMG/ore.jpg",
  },
  {
    title: "Bruno Teixeira Pires (Front-End)",
    duration: "Conhecer Programador",
    thumb: src="./IMG/bruno.jpg",
    video_id: "RicardoVicentepc"
  },
  {
    title: "Guilerme Scarabelli Quadros (DBA)",
    duration: "Conhecer Programador",
    thumb: src="./IMG/scarabelli.jpg",
    video_id: "RicardoVicentepc"
  }, 
  
]; // Criação de um  Array 

cardServico.map(servico => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", servico.servico_id);
  cardClone.querySelector("img").src = servico.thumb;
  cardClone.querySelector(".title").innerHTML = servico.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    servico.duration;
  sectionCards.appendChild(cardClone);
}); // Clonando os cards

card.remove();

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://github.com/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});




