document.addEventListener('DOMContentLoaded', function() {
    // Recetas por categoría
    function mostrarRecetas(categoria) {
        const recetas = {
            panes: [
                { nombre: 'Pan de Avena', img: 'img/pan de avena.jpg', ingredientes: 'Avena, Harina, Miel, Agua' },
                { nombre: 'Pan integral', img: 'img/pan integral.jpg', ingredientes: 'Harina integral, agua, levadura' },
                { nombre: 'Pan Dulce', img: 'img/pan dulce.jpg', ingredientes: 'Harina, Azúcar, Leche, Huevos' }
            ],
            galletas: [
                { nombre: 'Galletas de chocolate', img: 'img/galletas-de-chocolate.jpg', ingredientes: 'Chocolate, harina, azúcar' },
                { nombre: 'Galletas de avena', img: 'img/galletas-de-avena.jpg', ingredientes: 'Avena, azúcar, mantequilla' },
                { nombre: 'Galletas de jengibre', img: 'img/galletas-jengibre.jpg', ingredientes: 'Jengibre, harina, miel' }
            ],
            pasteles: [
                { nombre: 'Pastel de chocolate', img: 'img/pastel-de-chocolate.jpg', ingredientes: 'Chocolate, harina, huevos' },
                { nombre: 'Pastel de vainilla', img: 'img/pastel-de-vanilla.jpg', ingredientes: 'Vainilla, harina, azúcar' },
                { nombre: 'Pastel de manzana', img: 'img/pastel-de-manzana.jpg', ingredientes: 'Manzanas, harina, canela' }
            ],
            bebidas: [
                { nombre: 'Smoothie de fresa', img: 'img/smoothie-de-fresas.jpg', ingredientes: 'Fresas, yogur, miel' },
                { nombre: 'Limonada', img: 'img/limonada.jpg', ingredientes: 'Limón, agua, azúcar' },
                { nombre: 'Batido de plátano', img: 'img/batido-de-platano.jpg', ingredientes: 'Plátano, leche, miel' }
            ]
        };
    
        const contenedor = document.getElementById(`${categoria}-carousel`);
        contenedor.innerHTML = ''; // Limpiar el contenedor
    
        recetas[categoria].forEach(receta => {
            const card = document.createElement('div');
            card.classList.add('card');
    
            const img = document.createElement('img');
            img.src = receta.img;
            img.alt = receta.nombre;
            img.classList.add('card-img');
    
            const nombre = document.createElement('h3');
            nombre.textContent = receta.nombre;
    
            const infoAdicional = document.createElement('div');
            infoAdicional.classList.add('info-adicional');
            infoAdicional.textContent = `Ingredientes: ${receta.ingredientes}`;
    
            card.appendChild(img);
            card.appendChild(nombre);
            card.appendChild(infoAdicional);
            contenedor.appendChild(card);
        });
    }

    // Inicializar recetas por categoría
    mostrarRecetas('panes');
    mostrarRecetas('galletas');
    mostrarRecetas('pasteles');
    mostrarRecetas('bebidas');
});

// Ejecuta la función scrollFunction cada vez que se hace scroll en la página
window.onscroll = function() {
    scrollFunction();
};

// Función para mostrar u ocultar el botón de "volver al inicio" dependiendo de la posición del scroll
function scrollFunction() {
    const btnScrollTop = document.getElementById("btnScrollTop");
    // Si el usuario ha hecho scroll hacia abajo más de 20px, muestra el botón
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollTop.style.display = "block";
    } else {
        // Si no, oculta el botón
        btnScrollTop.style.display = "none";
    }
}

// Cuando se hace clic en el botón, llevar la página al inicio
document.getElementById("btnScrollTop").onclick = function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
};