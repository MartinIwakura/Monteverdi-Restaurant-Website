function filterMenu(category) {
    let groups = document.querySelectorAll('.menu-group-heading, .menu-group');

    groups.forEach(group => {
        let heading = group.classList.contains('menu-group-heading') ? group : group.previousElementSibling;
        if (category === 'all' || heading.textContent.includes(category)) {
            group.style.display = 'block';
        } else {
            group.style.display = 'none';
        }
    });
}