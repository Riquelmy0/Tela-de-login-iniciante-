
const inputs = document.getElementById('email');
const senha = document.getElementById('senha');
const vazio = document.getElementById('vazio');
const textoVazio = document.getElementById('texto-vazio');
const botao = document.getElementById('button-login');



inputs.addEventListener('focus', () => {
    inputs.style.boxShadow = ' 0 0 3px red'
})
inputs.addEventListener('blur', () => {
    inputs.style.boxShadow = '0 0 3px'
})


senha.addEventListener('focus', () => {
    senha.style.boxShadow = ' 0 0 3px red'
})
senha.addEventListener('blur', () => {
    senha.style.boxShadow = '0 0 3px'
})

vazio.addEventListener('click', () => {
    vazio.style.display = 'none'
})

const checar = function () {
    if (inputs.value == 0) {
        return vazio.style.display = 'block'
    }
    if (senha.value == 0) {
        return vazio.style.display = 'block'
    }

    else {
        alert('ENVIADO COM SUCESSO')
    }
}

botao.addEventListener('click', checar)











