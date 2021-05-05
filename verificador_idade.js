function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoUser = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(anoUser.value.length ==0 || Number(anoUser.value) > ano){
        window.alert('[ERRO] Dados incorretos')
    }else{
        var sexUser = document.getElementsByName('radsex')
        var idade = ano - Number(anoUser.value)
        var genero = '' //genero vazio inicialmente, para verificar o que vai ser recebido.
        //criando uma TAG dinamicamente pelo JS
        var img= document.createElement('img')
        //Criando um ID para a TAG img com o id='foto' (<img id='foto'>)
        img.setAttribute('id', 'foto')

        if(sexUser[0].checked){ //Verificando se o sexo é Masculino
            if(idade >= 0 && idade < 3){
                genero = 'Bebê'
                //primeiro a ação depois o arquivo
                img.setAttribute('src', 'bebe_m.png')
            }else if(idade < 12){
                genero = 'Criança'
                img.setAttribute('src', 'menino.png')
            }
            else if(idade < 21){
                genero = 'Jovem'
                img.setAttribute('src', 'jovem_m.png')
            }else if(idade < 50){
                genero = 'Adulto'
                img.setAttribute('src', 'adulto_m.png')
            }else{
                genero = 'Idoso'
                img.setAttribute('src', 'idoso.png')
            }

        }else if(sexUser[1].checked){ //Verificando se o sexo é Femino
            if(idade >= 0 && idade < 3){
                genero = 'Bebê'
                img.setAttribute('src', 'bebe_f.png')
            }else if(idade < 12){
                genero = 'Criança'
                img.setAttribute('src', 'menina.png')
            }else if(idade < 21){
                genero = 'Jovem'
                img.setAttribute('src', 'jovem_f.png')
            }else if(idade < 50){
                genero = 'Adulta'
                img.setAttribute('src', 'adulto_f.png')
            }else{
                genero = 'Idosa'
                img.setAttribute('src', 'idosa.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos um(a) ${genero} com ${idade} anos.</p>`
        //adicionando um elemento na div dinamicamente
        res.appendChild(img)

    }
}