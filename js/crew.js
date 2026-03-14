const tabs = document.querySelectorAll('.tab-btn');
const cards = document.querySelectorAll('.card');
const titleMap = {
    all: 'Our Employers',
    crew: 'Our Crew',
    meet: 'Meet Our Team',
    devs: 'Our Developers'
};
const mainTitle = document.getElementById('mainTitle');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelector('.tab-btn.active')?.classList.remove('active');
        tab.classList.add('active');
        mainTitle.textContent = titleMap[tab.dataset.filter] || 'Our Employers';
        const filter = tab.dataset.filter;

        cards.forEach(card => {
            const groups = card.dataset.groups.split(',').map(s => s.trim());
            card.style.display = (filter === 'all' || groups.includes(filter)) ? '' : 'none';
        });
    });
});