document.addEventListener("DOMContentLoaded", function() {
    const aboutBtn = document.getElementById('about-btn');
    const skillsBtn = document.getElementById('contact-btn');
    const portfolioBtn = document.getElementById('portfolio-btn');

    aboutBtn.addEventListener('click', function() {
        document.getElementById('about').classList.toggle('hidden');
        document.getElementById('contact').classList.add('hidden');
        document.getElementById('portfolio').classList.add('hidden');
    });

    skillsBtn.addEventListener('click', function() {
        document.getElementById('contact').classList.toggle('hidden');
        document.getElementById('about').classList.add('hidden');
        document.getElementById('portfolio').classList.add('hidden');
    });

    portfolioBtn.addEventListener('click', function() {
        document.getElementById('portfolio').classList.toggle('hidden');
        document.getElementById('about').classList.add('hidden');
        document.getElementById('contact').classList.add('hidden');
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');

    function checkScroll() {
        const headerTop = header.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (headerTop < screenPosition) {
            header.classList.add('active');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Gọi ngay lập tức khi trang tải xong
});
