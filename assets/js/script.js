console.log('ola')
//manipulando DOM
//botoes -----------------
let input_cavs=document.querySelector('#rdCavs')
let input_miami = document.querySelector("#rdMiami")
let  input_denver = document.querySelector("#rdDenver")
let  input_boston = document.querySelector("#rdBoston")
let  input_golden = document.querySelector("#rdGolden")
let input_qtde = document.querySelector('#qtde')
let inputPersonalizadoNao = document.querySelector("#p_nao")
let inputPersonalizadoSim = document.querySelector("#p_sim")
let prodStatus = document.querySelector("#prod_status")
let nome_Camisa = document.querySelector("#nome_camisa")
let nome = document.querySelector('#camisa')
let prazo = document.querySelector('#prazo')
let inputTamanho = document.querySelector('#tamanho_input')
let label_tamanho = document.querySelector('#tamanho_entrega')
//--------------------------
input_cavs.addEventListener("change", atualizarOrcamento)
input_miami.addEventListener("change", atualizarOrcamento)
input_denver.addEventListener("change", atualizarOrcamento)
input_boston.addEventListener("change", atualizarOrcamento)
input_golden.addEventListener("change", atualizarOrcamento)
input_qtde.addEventListener("change", atualizarOrcamento)
inputPersonalizadoNao.addEventListener("change", atualizarOrcamento)
inputPersonalizadoSim.addEventListener("change", atualizarOrcamento)
prodStatus.addEventListener("change", atualizarOrcamento)
nome_Camisa.addEventListener("change", atualizarOrcamento)
prazo.addEventListener("change", atualizarOrcamento)
inputTamanho.addEventListener("change", atualizarOrcamento)

function atualizarOrcamento(){
    let preco = input_qtde.value * 50
    let personalizar_sim = inputPersonalizadoSim.checked
    let personalizar_nao = inputPersonalizadoNao.checked

    let status_prod = document.querySelector("#prod_status")

    nome.innerHTML = nome_Camisa.value
    
    let tempo = document.querySelector("#tempo_entrega")
    tempo.innerHTML =`${prazo.value} Semanas`

    if(prazo.value<=2){
        preco += input_qtde.value * 12.5
    }

    if(inputTamanho.value ==1){
        label_tamanho.innerHTML='M'
    }else if(inputTamanho.value==2){
        label_tamanho.innerHTML='P'
    }else if(inputTamanho.value==3){
        label_tamanho.innerHTML='G'
    }else if(inputTamanho.value==4){
        label_tamanho.innerHTML='GG'
    }else if(inputTamanho.value==5){
        label_tamanho.innerHTML='EXG'
    }
    let imagemSelecionada = document.querySelector("input[name=img_compra]:checked").value

    console.log(imagemSelecionada)
    document.querySelector("#time_final").innerHTML =imagemSelecionada
    if(personalizar_sim) {
        preco += input_qtde.value * 20
        status_prod.innerHTML = inputPersonalizadoSim.value
        nome_Camisa.disabled= false
    }

    if(personalizar_nao) {
        status_prod.innerHTML = inputPersonalizadoNao.value
        nome_Camisa.disabled= true
        nome.innerHTML = ""
        nome_Camisa.value = ""
    }
    

    let qtdProd = document.querySelector("#qtdProd")
    qtdProd.innerHTML =  input_qtde.value //template literals

    
    document.querySelector("#price").innerHTML ="Preço: R$" + preco
}
