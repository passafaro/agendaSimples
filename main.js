let campoTarefa = document.querySelector("#campoTarefa")
let campoLista = document.querySelector("#caixaListaTarefas ul")

document.addEventListener('click', function(e) {
    if(e.target.name==="btAdicionarTarefa" && campoTarefa.value){
        adicionaTarefa(campoTarefa.value)
        limpaCampoTarefa()
    }
});

document.addEventListener('click', function(e) {
    if(e.target.name==="btApagarTarefa"){
        e.target.parentElement.remove()
        adicionarTarefaSessao()
    }
});

document.addEventListener('keypress', function(e) {
    if(e.code==="Enter" || e.code==="NumpadEnter" && campoTarefa.value ){
        adicionaTarefa(campoTarefa.value)
        limpaCampoTarefa()
    }
});

function limpaCampoTarefa (){
    campoTarefa.value = ""
    campoTarefa.focus()
}

function adicionaTarefa(tarefa){
    let li = document.createElement('li')
    li.innerHTML = tarefa + " <input type='submit' name='btApagarTarefa' value='Apagar Tarefa'>"
    campoLista.appendChild(li)

    adicionarTarefaSessao()
}

function adicionarTarefaSessao(){
    let listaDeTarefas = document.querySelectorAll("#caixaListaTarefas ul li")

    let vetorDeTarefas = []
    listaDeTarefas.forEach(element => {
        vetorDeTarefas.push(element.innerText)
    });

    localStorage.setItem('tarefas', JSON.stringify(vetorDeTarefas))
}

function carregarListaSessao(){
    let listaTarefas = JSON.parse(localStorage.getItem('tarefas'))
    
    listaTarefas.forEach(element => {
        adicionaTarefa(element)
    });
}

carregarListaSessao()
