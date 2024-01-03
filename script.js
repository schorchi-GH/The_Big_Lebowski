document.addEventListener('DOMContentLoaded', () => {
    const faqLabels = document.querySelectorAll('.accordion-item label');

    faqLabels.forEach(label => {
        label.addEventListener('click', () => {
            const content = label.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
