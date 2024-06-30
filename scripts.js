document.addEventListener('DOMContentLoaded', () => {
    // Aggiunta dinamica del menù
    const menuItems = [
        { name: 'Pasta alla Carbonara', price: '12€' },
        { name: 'Pizza Margherita', price: '10€' },
        { name: 'Tiramisù', price: '6€' }
    ];

    const menuContainer = document.getElementById('menu-items');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `<strong>${item.name}</strong>: ${item.price}`;
        menuContainer.appendChild(menuItem);
    });

    // Galleria di immagini
    const galleryImages = [
        'images/gallery1.jpg',
        'images/gallery2.jpg',
        'images/gallery3.jpg'
    ];

    const galleryContainer = document.getElementById('gallery-images');
    galleryImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Galleria immagine';
        img.className = 'gallery-image';
        galleryContainer.appendChild(img);
    });

    // Aggiunta animazioni alle immagini della galleria
    const images = document.querySelectorAll('.gallery-image');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease-in-out';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});
