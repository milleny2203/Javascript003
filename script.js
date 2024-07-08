function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    var resultado = document.getElementById('resultado')
    
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Não é possível contar sem números. Insira um número válido!")
    }else if(Number(passo.value) == 0){
        window.alert("O passo não pode ser zero!")
    }
        else{
        res.innerHTML = `Contando:`
        for(var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)){
            resultado.innerHTML += `${i} \u{1F449}\u{1F3FC}`
        
    }
        resultado.innerHTML += `\u{1F389}`}
}

