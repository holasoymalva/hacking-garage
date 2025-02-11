const { exec } = require('child_process');

function getWifiPassword(ssid, callback) {
    const command = `security find-generic-password -wa "${ssid}"`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        callback(stdout.trim());
    });
}

getWifiPassword('YourWiFiSSID', (password) => {
    if (password) {
        console.log(`Wi-Fi Password: ${password}`);
    } else {
        console.log('Password not found or SSID is incorrect.');
    }
});
