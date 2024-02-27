const formElement = document.getElementById("formulario");

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let license_plate = document.getElementById("license_plate").value;
    let color = document.getElementById("color").value;
    let fileInput = document.getElementById("imagen");
    // Obtenemos el primer archivo seleccionado
    let entrada = 'prueba';
    let transaction = { license_plate: license_plate, color: color, carPhoto:entrada};
    let transactionJson = JSON.stringify(transaction);

    fetch('http://localhost:8081/server', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: transactionJson,
    }) }).then(response => {
        // Manejo de la respuesta del servidor
        if (response.ok) {
            console.log('El carro se eliminó correctamente.');
            // Redirigir a la página principal u otra página deseada
            window.location.href = 'mainPanel.html';
        } else {
            console.error('Error al intentar eliminar el carro:', response.statusText);
        }
    }).catch(error => {
        // Manejo de errores
        console.error('Error:', error);
    });
function redirectToPage() {
    window.location.href = 'Registro.html';
}

function redirectToTable(){
    window.location.href = 'Tabla.html';
}
function redirectToDeletePanel(){
    window.location.href = 'DeletePanel.html';
}


