$('#nova-publicacao').on('submit', criarPublicacao);
$(document).on('click', '.curtir', curtirPublicacao);

function curtirPublicacao(evento) {
    evento.preventDefault();

    const elementoClicado = $(evento.target);
    const publicacaoId = elementoClicado.closest('div').data('publicacao-id');

    elementoClicado.prop('disabled', true);
    $.ajax({
        url: `/publicacoes/${publicacaoId}/curtir`,
        method: "POST"
    }).done(function() {
        const contadorDeCurtidas = elementoClicado.next('span');
        const quantidadeDeCurtidas = parseInt(contadorDeCurtidas.text());

        contadorDeCurtidas.text(quantidadeDeCurtidas + 1);

        elementoClicado.addClass('descurtir');
        elementoClicado.addClass('text-danger');
        elementoClicado.removeClass('curtir');

    }).fail(function() {
        Swal.fire("Ops...", "Erro ao curtir a publicação!", "error");
    }).always(function() {
        elementoClicado.prop('disabled', false);
    });
  }
    
function criarPublicacao(evento) {
    evento.preventDefault();

    $.ajax({
        url:"/publicacoes",
        method:"POST",
        data:{
            titulo: $('#titulo').val(),
            conteudo: $('#conteudo').val(),
        }
    }).done(function(){
        window.location= "/home";
    }).fail(function(){
        alert("Erro ao criar a publicação!")
    })
}



