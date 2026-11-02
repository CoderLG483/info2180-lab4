window.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('#search-btn');
    const searchInput = document.querySelector('#search-input');
    const resultDiv = document.querySelector('#result');

    searchBtn.addEventListener('click', () => {
        const rawQuery = searchInput.value;
        const sanitizedQuery = encodeURIComponent(rawQuery.trim());

        fetch(`superheroes.php?query=${sanitizedQuery}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network error');
                }
                return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
            });
    });
});