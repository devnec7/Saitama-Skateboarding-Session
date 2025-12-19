//Captura o nome da trick
const trickinput = document.getElementById('trickbox')
const btnadd = document.getElementById('createtrick')
const tricklist = document.getElementById('trick-list')

//Captura o event do clique no botão
btnadd.addEventListener('click', criartrick)

//Adiciona trick com Enter
trickinput.addEventListener('keyup', (event) => {
    if(event.key === 'Enter'){
        criartrick()
    }
})

//Cria função do clique
function criartrick(){
    const nome = trickinput.value.trim()

    if (nome == "") return;

   //Estado da trick
   let acertos = 0
   let erros = 0
   
   //Section principal
   const section = document.createElement('section')

   //Título
   const titulo = document.createElement('h2')
   titulo.textContent = nome

   //info
   const info = document.createElement('p')
   info.textContent = `Acertos: 0 | Erros: 0 | Eficiência: 0%`

   const motivacao = document.createElement('p')
   motivacao.classList.add('motivacao')

   //botões
   const divbotoes = document.createElement('div')
   divbotoes.classList.add('botoes')

   const btnacerto = document.createElement('button')
   btnacerto.textContent = `Acerto`

   const btnerro = document.createElement('button')
   btnerro.textContent = `Erro`

   const btnreset = document.createElement('button')
   btnreset.textContent = `Reset`

   const btnremover = document.createElement('button')
   btnremover.textContent = `Remover`

   //Função para atualizar o texto
   function atualizacion(){
        const total = acertos + erros
        const eficiencia = total > 0 ? (acertos/total) * 100 : 0

        info.textContent = 
        `Acertos: ${acertos} | Erros: ${erros} | Eficiência: ${eficiencia.toFixed(2)}%`
        motivacao.textContent = frasemotivacional(Math.floor(eficiencia))
    }

   //Função para escolher a frase
   function frasemotivacional(eficiencia){
        if(eficiencia === 0){
        return `A dopamina de acertar a primeira trick só vem depois que você realmente acerta, vamo!`
        } else if(eficiencia < 40){
        return `Pode melhorar, concentra!`
        } else if(eficiencia < 70){
        return `Tá quase na base, respira e acerta mais uma!`
        }else if(eficiencia < 90){
        return `Essa já pode mandar no game!`
        } else {
        return `Já pode falar que é sua marca registrada`
        }
    }

   //Eventos
   btnacerto.addEventListener('click', () => {
    acertos++
    atualizacion()
   })

   btnerro.addEventListener('click', () => {
    erros++
    atualizacion()
   })

   btnreset.addEventListener('click', () => {
    acertos = 0
    erros = 0
    atualizacion()
   })

   btnremover.addEventListener('click', () => {
    section.remove()
   })

   //Montagem da Section
   divbotoes.append(btnacerto, btnerro, btnreset, btnremover)
   section.append(titulo, info, divbotoes, motivacao)
   tricklist.appendChild(section)

   //Limpar Input
   trickinput.value = ""
}