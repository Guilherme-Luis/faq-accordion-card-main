var detailsElements = document.querySelectorAll('details');

detailsElements.forEach(function (details) {
    details.addEventListener('click', function () {
        // Fechar todos os detalhes antes de abrir o clicado
        detailsElements.forEach(function (otherDetails) {
            if (otherDetails !== details) {
                otherDetails.removeAttribute('open');
            }
        });
    });
});

