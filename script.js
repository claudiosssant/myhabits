const form = document.querySelector("#form-habits")
// nomes de variáveis não podem conter espaço, nem iniciar com números, apenas usamos letras minúsculas, e quando tiver espaço, iniciamos com a próxima letra maiúscula.//
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
// quando eu clicar no botão, ele vai ativar a função abaixo
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today) // true or false

  if (dayExists) {
    alert("Dia já incluso🛑")
    return
  }
  alert("Adicionado com sucesso✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetuphabits@", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetuphabits@")) || {}
nlwSetup.setData(data)
nlwSetup.load()
