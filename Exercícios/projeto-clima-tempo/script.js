function validaInput(valorDigitado){
    if (valorDigitado.length < 3){
        return 2 
    }
    if (valorDigitado.length > 10){
        return 3
    }
    return 1   
}

    

// valor digitado: ab

function pesquisar(){
    const strPesquisa = document.getElementById('localizacaotxt').value // ab
    let spanErro = document.getElementById('mensagem') // pegando o span

    let resultadoVal = validaInput(strPesquisa)
        if(resultadoVal == 2){
            spanErro.innerText = `Pesquise algo com mais caracteres.`
            return
        }
        if(resultadoVal == 3){
            spanErro.innerText = `Pesquise algo com menos caracteres.`
            return
        }
        if(resultadoVal == 1){
            spanErro.innerText = 'Pesquisando...'
            
        }

        
}


