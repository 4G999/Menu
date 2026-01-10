
    const openBtn = document.getElementById('openContact');
    const closeBtn = document.getElementById('closeContact');
    const popup = document.getElementById('contactPopup');

    openBtn.onclick = () => popup.style.display = 'flex';
    closeBtn.onclick = () => popup.style.display = 'none';

    popup.onclick = (e) => {
        if (e.target === popup) popup.style.display = 'none';
    };

