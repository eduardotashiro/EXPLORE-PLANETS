//-- Seleciona todos os elementos com a classe "panel"
const panels = document.querySelectorAll('.panel')

//-- Para cada painel encontrado...
panels.forEach((panel) => {
    //-- Adiciona um "escutador" de clique
    panel.addEventListener('click', () => {
    removeActiveClasses() //-- Remove a classe "active" de todos os painéis
    panel.classList.add('active') //-- Adiciona a classe "active" apenas ao clicado
   })

})

//-- Função que remove a classe "active" de todos os painéis
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}