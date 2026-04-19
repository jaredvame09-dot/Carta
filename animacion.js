// Textos para el efecto typing
const letterTexts = {
    greeting: "Querida Estrella,",
    paragraph1: "No sé en qué momento exacto empezó todo, pero sí sé que desde que llegaste a mi vida, algo dentro de mí cambió para siempre. Tu sonrisa se volvió mi paz, tu voz mi lugar favorito, y tu forma de ser… simplemente lo que más admiro en este mundo.",
    paragraph2: "Amarte no es algo que elegí de un día para otro, fue algo que creció poco a poco, en cada conversación, en cada momento, en cada detalle que te hace ser tú. Y hoy puedo decir sin miedo que lo que siento por ti es real, profundo y sincero. Me importas más de lo que imaginé posible, y cada día que pasa, mi amor por ti se vuelve más fuerte.",
    paragraph3: "Quiero estar contigo en los días buenos, pero también en los difíciles. Quiero ser quien te haga sonreír cuando todo parezca gris, quien te escuche, quien te cuide y quien nunca te falle. No prometo ser perfecto, pero sí darte lo mejor de mí, siempre.",
    paragraph4: "No es solo cariño lo que siento, es algo más profundo, más real… es amor. Un amor sincero, que nace sin forzarlo, que crece con cada momento contigo, y que me hace querer ser mejor para ti.",
    signature1: "Y hoy, con todo lo que siento en el corazón, quiero preguntarte algo que nace desde lo más profundo de mí:",
    signature2: "¿Quieres ser mi novia?"
};

// Función para efecto typing
function typeText(element, text, speed = 30) {
    return new Promise((resolve) => {
        element.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                resolve();
            }
        }, speed);
    });
}

// Función para mostrar la carta con typing
async function showLetterWithTyping() {
    const modal = document.getElementById('letterModal');
    const letterPaper = document.getElementById('letterPaper');

    // Mostrar modal con animación
    modal.style.display = 'block';
    modal.classList.add('modal-show');

    // Animación de entrada del papel
    setTimeout(() => {
        letterPaper.classList.add('letter-entrance');
    }, 100);

    // Esperar a que termine la animación de entrada
    setTimeout(async () => {
        // Typing secuencial de cada párrafo
        await typeText(document.getElementById('greeting'), letterTexts.greeting, 40);
        await new Promise(resolve => setTimeout(resolve, 500));

        await typeText(document.getElementById('paragraph1'), letterTexts.paragraph1, 25);
        await new Promise(resolve => setTimeout(resolve, 300));

        await typeText(document.getElementById('paragraph2'), letterTexts.paragraph2, 25);
        await new Promise(resolve => setTimeout(resolve, 300));

        await typeText(document.getElementById('paragraph3'), letterTexts.paragraph3, 25);
        await new Promise(resolve => setTimeout(resolve, 300));

        await typeText(document.getElementById('paragraph4'), letterTexts.paragraph4, 25);
        await new Promise(resolve => setTimeout(resolve, 500));

        await typeText(document.getElementById('signature1'), letterTexts.signature1, 35);
        await new Promise(resolve => setTimeout(resolve, 200));

        await typeText(document.getElementById('signature2'), letterTexts.signature2, 35);
    }, 800);
}

// Función para cerrar la carta
function closeLetter() {
    const modal = document.getElementById('letterModal');
    const letterPaper = document.getElementById('letterPaper');
    const loveMessage = document.getElementById('loveMessage');

    // Animación de salida
    letterPaper.classList.add('letter-exit');

    setTimeout(() => {
        modal.classList.remove('modal-show');
        setTimeout(() => {
            modal.style.display = 'none';
            letterPaper.classList.remove('letter-entrance', 'letter-exit');

            // Limpiar textos
            Object.keys(letterTexts).forEach(key => {
                const element = document.getElementById(key);
                if (element) element.textContent = '';
            });

         

         
        }, 300);
    }, 500);
}

// Mostrar notificación al cargar la página
window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('notification').classList.add('show');

        // Auto-ocultar notificación después de 5 segundos
        setTimeout(() => {
            document.getElementById('notification').classList.remove('show');
        }, 5000);
    }, 1000);
});

// La notificación ahora solo se cierra, no abre la carta
document.querySelector('.notification-close').addEventListener('click', function (e) {
    e.stopPropagation();
    document.getElementById('notification').classList.remove('show');
});

// Solo la carta abre el modal
document.getElementById('letterContainer').addEventListener('click', function () {
    document.getElementById('notification').classList.remove('show');
    showLetterWithTyping();
});

// Cerrar modal
document.getElementById('closeModal').addEventListener('click', function () {
    closeLetter();
});

// Cerrar modal haciendo clic en el overlay
document.getElementById('modalOverlay').addEventListener('click', function () {
    closeLetter();
});
