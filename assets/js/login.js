$('#login').on('submit', fazerLogin);
    
function fazerLogin(evento) {
    evento.preventDefault();
    console.log("dentro do login")


    $.ajax({
        url:"/login",
        method:"POST",
        data:{
            email:$('#email').val(),
            senha:$('#senha').val()
        }
    }).done(function () {
       window.location="/home";
    }).fail(function () {
        alert("Usuario ou senha invalidos!");
    });
}