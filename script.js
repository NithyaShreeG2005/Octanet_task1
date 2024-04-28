
function showProductDetails(productName, description) {
    alert(`${productName}: ${description}`);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

