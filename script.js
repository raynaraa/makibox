var hora = new Date().getHours();

if (hora < 12) {
    alert('bom dia');
} else if (hora < 18) {
    alert('boa tarde')
} else{
    alert('boa noite') 
}    
alert("Seja bem vindo a nossa página, (makibox)")

   $(window).on('scroll',function () {
   });

    scrollReveal().reaveal('#ctl'), {
        origen:'leaft',
        duration:'2000',
        distance:'20%'
    }
    scrollReveal().reaveal('.dish'), {
        origen:'leaft',
        duration:'2000',
        distance:'20%'
    }
    scrollReveal().reaveal('.promo'), {
        origen:'leaft',
        duration:'2000',
        distance:'20%'
    }
    scrollReveal().reaveal('.footer'), {
        origen:'leaft',
        duration:'2000',
        distance:'20%'
    }