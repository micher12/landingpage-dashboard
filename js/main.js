$(function(){
    var mobileAberto = false;//menu mobile aberto
    var darkClick = true;//clique do dark habilitado
    var sair = false; //desconectar falso

    //mudar cor do aside e funcao desconectar
    asideClick()
    function asideClick(){
        var botton = $('.menu nav li');
        var close = $('.menu ul.desconnect li');
    
        botton.click(function(){
            $('.menu nav li').removeClass("selected");
            $(this).addClass('selected');
            
        });
        close.click(function(){
            var dark = $('.dark');
            var desconectar = $('div#sair');

            $('.menu ul.desconnect li a').css("color",'red');
            $('.menu ul.desconnect li svg').css("color",'red');
            $('.menu nav li').removeClass("selected");

            if(sair){
                return;
            }else{
                //desconectar aberto

                if(mobileAberto){
                    //mobile
                    darkClick = false;
                    sair = true;
                    dark.css('z-index','50');
                    desconectar.toggle('fade');
                    $('#sim').click(function(){
                        darkClick = true;
                        if(sair){
                            var mobile = $('.sidebar');
                            var line1 = $('.line1');
                            var line2 = $('.line2');
                            var line3 = $('.line3');

                            sair = false;
                            dark.css('z-index','1').toggle('fade');
                            desconectar.toggle('fade');
                            $('.menu ul.desconnect li a').css("color",'#b4b4cc');
                            $('.menu ul.desconnect li svg').css("color",'#b4b4cc');

                            if($(window).resize().width() < 500){
                                if(mobileAberto){
                                    mobileAberto = false;
                                    mobile.toggle('slide');;
                                    line1.css('transform','rotate(0)').css('top','4px').css('background-color','#000000');
                                    line2.css("display",'block');
                                    line3.css('transform','rotate(0)').css('top','16px').css('background-color','#000000');
                                    $('.menu__mobile span').css('background-color','transparent').css("box-shadow",'none');
                                }
                            }
                            

                        }
                    });
                }else{
                    //desktop
                    sair = true;
                    dark.toggle('fade');
                    desconectar.toggle('fade');

                    $('#sim').click(function(){
                        if(sair){
                            sair = false;
                            dark.toggle('fade');
                            desconectar.toggle('fade');
                            $('.menu ul.desconnect li a').css("color",'#b4b4cc');
                            $('.menu ul.desconnect li svg').css("color",'#b4b4cc');
                        }
                    });
                }
            }

        });
    };


    //mobile
    mobile()
    function mobile(){
        var mobile = $('.sidebar');
        var btnMobile = $('.menu__mobile');
        var line1 = $('.line1');
        var line2 = $('.line2');
        var line3 = $('.line3');
        var animacao = false;
        var dark = $('.dark');

        btnMobile.click(function(){
            //cancelar animação do mobile slide
            if(animacao)return
            animacao = true

            if(mobileAberto){
                //fechar mobile
                darkClick = false;
                mobileAberto = false;
                dark.fadeOut()
                line1.css('transform','rotate(0)').css('top','4px').css('background-color','#000000')
                line2.css("display",'block')
                line3.css('transform','rotate(0)').css('top','16px').css('background-color','#000000')
                $('.menu__mobile span').css('background-color','transparent').css("box-shadow",'none')
                mobile.toggle('slide',function(){
                    animacao = false;
                },1000);
            }else{
                //abrir mobile
                darkClick = true;
                mobileAberto = true;
                dark.fadeIn()
                line1.css('transform','rotate(45deg)').css('top','13px').css('background-color','#ffffff')
                line2.css("display",'none')
                line3.css('transform','rotate(-45deg)').css('top','11px').css('background-color','#fffff')
                $('.menu__mobile span').css('background-color','rgb(255, 0, 0)').css("box-shadow",'2px 4px 12px rgb(0 0 0 / 8%')
                mobile.toggle('slide',function(){
                    animacao = false;
                },1000);
            }
        });

        //fechar menu mobile ao clicar no dark
        dark.click(function(){
            if(darkClick){
                if(animacao)return
                animacao = true

                if(mobileAberto){
                    //fechar mobile
                    mobileAberto = false;
                    dark.fadeOut()
                    line1.css('transform','rotate(0)').css('top','4px').css('background-color','#000000')
                    line2.css("display",'block')
                    line3.css('transform','rotate(0)').css('top','16px').css('background-color','#000000')
                    $('.menu__mobile span').css('background-color','transparent').css("box-shadow",'none')
                    mobile.toggle('slide',function(){
                        animacao = false;
                    },1000);
                }
            }   
        }); 

        $(window).resize(function(){
            if($(this).width() > 500){
                //maior q 500px

                if(darkClick){
                    if(sair){
                        console.log("OLA MUNDO")
                    }else{
                        dark.fadeOut()
                    }
                }

                //mobile estiver com display none
                if(mobile.css('display') == 'none'){
                   mobile.css("display",'block')
                }else{
                    if(mobileAberto){
                        mobileAberto = false;
                        line1.css('transform','rotate(0)').css('top','4px').css('background-color','#000000')
                        line2.css("display",'block')
                        line3.css('transform','rotate(0)').css('top','16px').css('background-color','#000000')
                        $('.menu__mobile span').css('background-color','transparent').css("box-shadow",'none')
                    }
                }
            }else{
                //menor q 500px

                if(mobile.css('display') == 'block'){
                    mobile.css("display",'none');

                    if(mobileAberto){
                        if(sair){
                            mobileAberto = false;
                            line1.css('transform','rotate(0)').css('top','4px').css('background-color','#000000');
                            line2.css("display",'block');
                            line3.css('transform','rotate(0)').css('top','16px').css('background-color','#000000');
                            $('.menu__mobile span').css('background-color','transparent').css("box-shadow",'none');
                        }else{
                            mobileAberto = false;
                            dark.fadeOut()
                            line1.css('transform','rotate(0)').css('top','4px').css('background-color','#000000');
                            line2.css("display",'block');
                            line3.css('transform','rotate(0)').css('top','16px').css('background-color','#000000');
                            $('.menu__mobile span').css('background-color','transparent').css("box-shadow",'none');
                        }
                        
                    }
                }
            }

        });
    };

    //contagem de notificação
    sinoFunction()
    function sinoFunction(){
        $('span.sino').click(function() {
            var num = parseInt($('span.sinoQnt').text())
            $('span.sinoQnt').text(num + 1);

            if(num > 8){
                $('span.sinoQnt').css('padding','5px 10px').css("transform",'translate(calc(-50% + 10px), 50%)')
            }
        });
    }

    //ativar pesquisa, so falta arrumar mobile
    pesquisaFunction()
    function pesquisaFunction(){
        var pesquisa = $('span.pesquisa svg');
        var input = $('span.pesquisa input');
        var aberto = false;
        var permitirCLick = true;

        $(window).resize(function(){
            if($(this).width() <= 500){
                permitirCLick = false;
            }else{
                permitirCLick = true;
            }
        });

        if($(window).width() <= 500){
            permitirCLick = false;
        }else{
            permitirCLick = true;
        }

        pesquisa.click(function(){
            if(permitirCLick){
                if(aberto){
                    aberto = false;
                    input.toggle('slide')
                }else{
                    aberto = true;
                    input.toggle('slide')
                }
            }
        });   
    }

});

const ctx = document.getElementById('myChart');
const grafico2 = document.getElementById("grafico2")

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});

new Chart(grafico2, {
    type: 'radar',
    data: {
        labels: [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
            label: 'My Second Dataset',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    },
    options: {
        elements: {
        line: {
            borderWidth: 3
        }
        }
    },
});