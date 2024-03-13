document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleFaqButton');
    const additionalFaq = document.querySelector('.additional-faq');
    toggleButton.addEventListener('click', function() {
        const isHidden = additionalFaq.style.display === 'none';
        additionalFaq.style.display = isHidden ? 'block' : 'none';
        toggleButton.textContent = isHidden ? 'Ver menos preguntas' : 'Ver más preguntas';
    });
});

document.getElementById('invitation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var submitButton = document.getElementById('submit-button');
    var invitationInput = document.getElementById('invitation-input');
    var texto = invitationInput.value;
    const apiKey = '%%API_KEY_LANDING%%';

    // Aquí usamos fetch para enviar los datos al backend
    fetch('https://api.regalaundeseo.com/api/solicitar_invitacion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-API-KEY': apiKey,
        },
        body: JSON.stringify({ texto: texto })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {     
        console.log(data)   
        // Limpiar el campo de entrada
        invitationInput.value = '';
        submitButton.disabled = true;
        // Mostrar mensaje de éxito
        var successMessageDiv = document.getElementById('success-message');
        successMessageDiv.innerHTML = '<div class="alert alert-success" role="alert">¡Tu solicitud ha sido enviada con éxito!</div>';
        
        // Opcional: Ocultar el mensaje después de unos segundos
        setTimeout(function() {
            successMessageDiv.innerHTML = '';
        }, 7000);
    })
    .catch((error) => {
        console.error('Error:', error);
        invitationInput.value = '';
        // Mostrar mensaje de error
        var errorMessageDiv = document.getElementById('error-message');
        errorMessageDiv.innerHTML = '<div class="alert alert-danger" role="alert">Hubo un error al enviar tu solicitud. Por favor, contactenos a contacto@regalaundeseo.com</div>';

        // Opcional: Ocultar el mensaje después de unos segundos
        setTimeout(function() {
            errorMessageDiv.innerHTML = '';
        }, 7000);
    });
});
