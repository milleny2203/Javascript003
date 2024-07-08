function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    var resultado = document.getElementById('resultado')
    
    //validações iniciais
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Não é possível contar sem números. Insira um número válido!")
    }else if(Number(passo.value) == 0){
        window.alert("O passo não pode ser zero!")
    }
    else{
        res.innerHTML = `Contando:`
        //validação da contagem
        if(Number(inicio.value) < Number(fim.value)){
            for(var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)){
                resultado.innerHTML += `${i} \u{1F449}\u{1F3FC}`
            }
            resultado.innerHTML += `\u{1F389}`
        } else{
            for(var j = Number(inicio.value); j >= Number(fim.value); j -= Number(passo.value)){
                resultado.innerHTML += `${j} \u{1F449}\u{1F3FC}`
            }
            resultado.innerHTML += `\u{1F389}`
        }

    }
}

function limpar(){
    document.querySelectorAll('input.txt').forEach(input => input.value = "")
    document.getElementById('resultado').innerHTML = ""
    document.getElementById('res').innerHTML = "Preparando a contagem ..."
}

