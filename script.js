// Smooth scrolling para o indicador de scroll
document.querySelector('.scroll-indicator').addEventListener('click', function () {
    document.querySelector('#experience').scrollIntoView({
        behavior: 'smooth'
    });
});

// Animação de entrada dos elementos quando entram na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos das seções
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .contact-item');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Formulário de contato
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simular envio do formulário
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = 'Mensagem Enviada!';
            submitBtn.style.background = 'linear-gradient(135deg, #4caf50, #45a049)';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = 'linear-gradient(135deg, #64ffda, #00bcd4)';
                submitBtn.disabled = false;
                document.querySelector('.contact-form').reset();
            }, 2000);
        }, 1000);
    }
});

// Efeito parallax suave no hero
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    const rate = scrolled * -0.5;

    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Adicionar classe ativa aos links sociais ao hover
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });

    link.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Animação dos tech items
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Contador animado para estatísticas (se necessário no futuro)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);

        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Lazy loading para melhor performance
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Tema claro/escuro
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('light-theme');
        this.classList.toggle('active');
    });

    // Verificar tema preferido do usuário
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-theme');
        themeToggle.classList.add('active');
    }
});
// Fim do script.js