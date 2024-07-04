function processTransaction() {
    const form = document.getElementById('transaction-form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch('http://localhost:3000/process-transaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('There was an error processing your transaction.');
        }
    })
    .then(message => {
        alert(message);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error processing your transaction.');
    });
}

function cancelTransaction() {
    document.getElementById('transaction-form').reset();
}
