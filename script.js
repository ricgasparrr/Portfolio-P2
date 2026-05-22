const botaoTema = document.getElementById('btn-tema');

const corpoPagina = document.body;

botaoTema.addEventListener('click', function() {
    corpoPagina.classList.toggle('tema-escuro');
    
    if (corpoPagina.classList.contains('tema-escuro')) {
        botaoTema.textContent = 'Modo Claro';
    } else {
        botaoTema.textContent = 'Modo Escuro';
    }
    
});

