$('#formulario-cadastro').on('submit', criarUsuario);
    
function criarUsuario(evento) {
    evento.preventDefault();
    console.log("dentro do cadastro")

    if($('#senha').val() != $('#confirme-senha').val()) {
        alert("As senhas não coincidem!");
        return;
    }

    $.ajax({
        url:"/usuarios",
        method:"POST",
        data:{
            nome:$('#nome').val(),
            email:$('#email').val(),
            nick:$('#nick').val(),
            senha:$('#senha').val()
        }
    }).done(function () {
        alert("usuário cadastrado com sucesso!");
    }).fail(function (erro) {
        console.log(erro);
        alert("Erro ao cadastrar o usuario");
    });
}