export default class Error {
    showError(message: string) {
        const errorContainer = document.getElementById('errorContainer');
        if (errorContainer) {
            errorContainer.innerHTML = `<p class="error-message">${message}</p>`;
        }
    }
    clearError() {
        const errorContainer = document.getElementById('errorContainer');
        if (errorContainer) {
            errorContainer.innerHTML = '';
        }
    }
}