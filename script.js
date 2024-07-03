document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        document.getElementById('utcTime').textContent = now.toUTCString().split(' ')[4];
        document.getElementById('currentDay').textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    }

    setInterval(updateTime, 1000);
    updateTime();
});
