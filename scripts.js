document.addEventListener('DOMContentLoaded', () => {
    // Esempio di aggiunta dinamica del menù
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
        galleryContainer.appendChild(img);
    });
});
