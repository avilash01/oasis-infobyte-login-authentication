const inputFields = document.querySelectorAll('.input-box input');

inputFields.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            input.nextElementSibling.style.opacity = '0';
        } else {
            input.nextElementSibling.style.opacity = '1';
        }
    });
});