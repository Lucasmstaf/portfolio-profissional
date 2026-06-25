// Gerenciamento de Animações e Efeitos Interativos
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeitos de Hover Reutilizáveis 
    function adicionarEfeitoHover(elemento, tipo = 'elevacao', valor = -2) {
        if (!elemento) return;
        elemento.style.transition = 'all 0.3s ease';
        
        elemento.addEventListener('mouseenter', () => {
            elemento.style.transform = tipo === 'elevacao' 
                ? `translateY(${valor}px)` 
                : `scale(${valor})`;
        });

        elemento.addEventListener('mouseleave', () => {
            elemento.style.transform = tipo === 'elevacao' 
                ? 'translateY(0)' 
                : 'scale(1)';
        });
    }

    // Aplicar animações nos links de navegação adicionais (redes sociais, etc)
    document.querySelectorAll('.apresentacao__links__navegacao').forEach(link => {
        adicionarEfeitoHover(link);
        const icone = link.querySelector('img');
        if (icone) {
            adicionarEfeitoHover(icone, 'escala', 1.1);
        }
    });

    // Animações da Imagem de Perfil
    const imagemPerfil = document.querySelector('.apresentacao__imagem');
    if (imagemPerfil) {
        imagemPerfil.style.transition = 'all 0.5s ease';
        adicionarEfeitoHover(imagemPerfil, 'escala', 1.02);
    }

    // Animações dos Projetos (cards)
    document.querySelectorAll('.projeto').forEach(projeto => {
        adicionarEfeitoHover(projeto, 'elevacao', -5);
    });


    // 2. Marcar Link Ativo no Menu de Navegação 
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.cabecalho__menu__link').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('ativo');
        } else {
            link.classList.remove('ativo');
        }
    });


    // 3. Alternar Tema Claro / Escuro com persistência
    const botaoTema = document.getElementById('botao-tema');
    const htmlElement = document.documentElement;

    if (botaoTema) {
        adicionarEfeitoHover(botaoTema, 'escala', 1.1);
        
        // Verificar se já existe uma escolha de tema no localStorage
        const temaSalvo = localStorage.getItem('tema');
        if (temaSalvo) {
            htmlElement.setAttribute('data-theme', temaSalvo);
            atualizarIconeTema(temaSalvo);
        } else {
            // Definir o tema inicial com base no atributo HTML atual ou no padrão "light"
            const temaAtual = htmlElement.getAttribute('data-theme') || 'light';
            htmlElement.setAttribute('data-theme', temaAtual);
            atualizarIconeTema(temaAtual);
        }

        botaoTema.addEventListener('click', () => {
            const temaAtual = htmlElement.getAttribute('data-theme');
            const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', novoTema);
            localStorage.setItem('tema', novoTema);
            atualizarIconeTema(novoTema);
        });
    }

    function atualizarIconeTema(tema) {
        if (!botaoTema) return;
        const icone = botaoTema.querySelector('i');
        if (icone) {
            if (tema === 'dark') {
                icone.className = 'fas fa-sun';
                icone.style.color = '#ffb86c'; // Cor dourada/laranja para o sol no escuro
            } else {
                icone.className = 'fas fa-moon';
                icone.style.color = ''; // Cor padrão do tema claro
            }
        }
    }


    // 4. Menu Hamburguer Responsivo
    const btnMenu = document.getElementById('btn-menu-hamburguer');
    const menuNavegacao = document.getElementById('menu-navegacao');

    if (btnMenu && menuNavegacao) {
        btnMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            menuNavegacao.classList.toggle('ativo');
            
            // Alternar ícone entre bars (três barras) e times (X)
            const icone = btnMenu.querySelector('i');
            if (icone) {
                if (menuNavegacao.classList.contains('ativo')) {
                    icone.className = 'fas fa-times';
                } else {
                    icone.className = 'fas fa-bars';
                }
            }
        });

        // Fechar o menu ao clicar em qualquer link de navegação
        document.querySelectorAll('.cabecalho__menu__link').forEach(link => {
            link.addEventListener('click', () => {
                menuNavegacao.classList.remove('ativo');
                const icone = btnMenu.querySelector('i');
                if (icone) {
                    icone.className = 'fas fa-bars';
                }
            });
        });

        // Fechar o menu ao clicar fora dele
        document.addEventListener('click', (e) => {
            if (menuNavegacao.classList.contains('ativo') && !menuNavegacao.contains(e.target) && !btnMenu.contains(e.target)) {
                menuNavegacao.classList.remove('ativo');
                const icone = btnMenu.querySelector('i');
                if (icone) {
                    icone.className = 'fas fa-bars';
                }
            }
        });
    }


    // 5. Filtro de Projetos Dinâmico (projetos.html)
    const botoesFiltro = document.querySelectorAll('.filtro-btn');
    const projetos = document.querySelectorAll('.projeto');

    if (botoesFiltro.length > 0 && projetos.length > 0) {
        botoesFiltro.forEach(botao => {
            botao.addEventListener('click', () => {
                // Remover classe ativo de todos os botões e adicionar ao atual
                botoesFiltro.forEach(btn => btn.classList.remove('ativo'));
                botao.classList.add('ativo');

                const filtro = botao.getAttribute('data-filtro');

                projetos.forEach(projeto => {
                    const categoria = projeto.getAttribute('data-categoria');
                    
                    if (filtro === 'todos' || categoria === filtro) {
                        projeto.style.display = 'flex';
                        // Timeout curto para acionar a transição de opacidade e escala
                        setTimeout(() => {
                            projeto.style.opacity = '1';
                            projeto.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        projeto.style.opacity = '0';
                        projeto.style.transform = 'scale(0.8)';
                        // Ocultar da tela após o término do efeito visual do transition (300ms)
                        setTimeout(() => {
                            projeto.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }


    // 6. Validação e Feedback do Formulário de Contato (contato.html)
    const contatoForm = document.getElementById('contato-form');
    
    if (contatoForm) {
        contatoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let formValido = true;
            
            // Elementos dos campos
            const nomeInput = document.getElementById('nome');
            const emailInput = document.getElementById('email');
            const assuntoInput = document.getElementById('assunto');
            const mensagemInput = document.getElementById('mensagem');
            const feedbackDiv = document.getElementById('form-feedback');

            // Resetar feedback
            feedbackDiv.style.display = 'none';
            feedbackDiv.className = 'feedback-mensagem';

            // 6.1 Validar Campo Nome
            if (nomeInput.value.trim() === '') {
                mostrarErro(nomeInput, 'O nome completo é obrigatório.');
                formValido = false;
            } else if (nomeInput.value.trim().length < 3) {
                mostrarErro(nomeInput, 'O nome deve conter pelo menos 3 caracteres.');
                formValido = false;
            } else {
                limparErro(nomeInput);
            }

            // 6.2 Validar Campo E-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                mostrarErro(emailInput, 'O endereço de e-mail é obrigatório.');
                formValido = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                mostrarErro(emailInput, 'Por favor, insira um e-mail válido (ex: nome@provedor.com).');
                formValido = false;
            } else {
                limparErro(emailInput);
            }

            // 6.3 Validar Campo Assunto
            if (assuntoInput.value.trim() === '') {
                mostrarErro(assuntoInput, 'O assunto da mensagem é obrigatório.');
                formValido = false;
            } else {
                limparErro(assuntoInput);
            }

            // 6.4 Validar Campo Mensagem
            if (mensagemInput.value.trim() === '') {
                mostrarErro(mensagemInput, 'A mensagem é obrigatória.');
                formValido = false;
            } else if (mensagemInput.value.trim().length < 10) {
                mostrarErro(mensagemInput, 'A mensagem deve conter pelo menos 10 caracteres.');
                formValido = false;
            } else {
                limparErro(mensagemInput);
            }

            // 6.5 Envio final se estiver válido
            if (formValido) {
                const btnSubmit = document.getElementById('btn-submit');
                const btnOriginalText = btnSubmit.innerHTML;
                
                // Desabilitar e simular animação de carregamento
                btnSubmit.disabled = true;
                btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                
                setTimeout(() => {
                    // Exibir sucesso
                    feedbackDiv.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
                    feedbackDiv.classList.add('sucesso');
                    contatoForm.reset();
                    btnSubmit.disabled = false;
                    btnSubmit.innerHTML = btnOriginalText;
                    
                    // Rolar até o feedback
                    feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 1500);
            } else {
                // Exibir erro geral
                feedbackDiv.textContent = 'Por favor, preencha todos os campos obrigatórios corretamente.';
                feedbackDiv.classList.add('erro');
            }
        });

        // Limpar mensagens de erro dinamicamente enquanto o usuário digita
        const inputs = contatoForm.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.value.trim() !== '') {
                    limparErro(input);
                }
            });
        });
    }

    function mostrarErro(input, mensagem) {
        input.classList.add('invalido');
        const erroSpan = input.nextElementSibling;
        if (erroSpan && erroSpan.classList.contains('form-erro')) {
            erroSpan.textContent = mensagem;
            erroSpan.style.display = 'block';
        }
    }

    function limparErro(input) {
        input.classList.remove('invalido');
        const erroSpan = input.nextElementSibling;
        if (erroSpan && erroSpan.classList.contains('form-erro')) {
            erroSpan.style.display = 'none';
        }
    }
});