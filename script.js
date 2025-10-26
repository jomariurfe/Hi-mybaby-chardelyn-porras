document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('loveButton');
    const loveText = document.getElementById('loveText');

    loveButton.addEventListener('click', () => {
        // Toggle the visibility of the text
        if (loveText.classList.contains('visible')) {
            loveText.classList.remove('visible');
            loveText.classList.add('hidden'); // Add hidden class for display: none
        } else {
            loveText.classList.remove('hidden'); // Remove hidden first
            loveText.classList.add('visible');
        }
    });
});