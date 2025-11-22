// Fetch and display application status
async function fetchStatus() {
    try {
        const [healthResponse, statusResponse] = await Promise.all([
            fetch('/health'),
            fetch('/api/status')
        ]);

        if (healthResponse.ok && statusResponse.ok) {
            const healthData = await healthResponse.json();
            const statusData = await statusResponse.json();

            // Update status display
            document.getElementById('server-status').textContent = '🟢 Running';
            document.getElementById('server-status').style.color = '#00a86b';
            document.getElementById('api-version').textContent = statusData.version;
            document.getElementById('environment').textContent = healthData.environment;
            document.getElementById('timestamp').textContent = new Date(healthData.timestamp).toLocaleString();
        } else {
            throw new Error('Failed to fetch status');
        }
    } catch (error) {
        console.error('Error fetching status:', error);
        document.getElementById('server-status').textContent = '🔴 Error';
        document.getElementById('server-status').style.color = '#ff0000';
        document.getElementById('api-version').textContent = 'N/A';
        document.getElementById('environment').textContent = 'N/A';
        document.getElementById('timestamp').textContent = 'N/A';
    }
}

// Refresh status when button is clicked
document.getElementById('refresh-status').addEventListener('click', () => {
    fetchStatus();
});

// Initial status fetch when page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchStatus();
});

// Auto-refresh status every 30 seconds
setInterval(fetchStatus, 30000);
