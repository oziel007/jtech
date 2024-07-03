window.sr = ScrollReveal({ reset: true });
sr.reveal(".conteudo-box", { duration: 1000})
sr.reveal(".conjunto-cards", { duration: 1000})
sr.reveal(".container p", { duration: 1000})
sr.reveal(".img-joinha", { duration: 1000})
sr.reveal(".conteudo-title", { duration: 1000})
sr.reveal(".tabela", { duration: 1000})
sr.reveal(".footer", { duration: 1000})

sr.reveal(".container-orcamentos", {
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000
})

VanillaTilt.init(document.querySelectorAll(".card-produto"), { 
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.6
});