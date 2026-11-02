window.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('#search-btn');

    searchBtn.addEventListener('click', () => {
        // 1. Send an asynchronous GET request to superheroes.php
        fetch('superheroes.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // 2. Extract the response body as plain text (since PHP prints HTML tags)
                return response.text();
            })
            .then(data => {
                // 3. Display the raw string inside an alert
                alert(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    });
});