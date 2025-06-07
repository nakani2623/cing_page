const form = document.getElementById('bookingForm');
const responseBox = document.getElementById('response');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };

    try {
        const res = await fetch('https://vu010eaggj.execute-api.ap-southeast-2.amazonaws.com/prod/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        if (res.ok) {
            responseBox.innerText = '✅ Booking submitted!';
        } else {
            responseBox.innerText = '❌ Error: ' + (result.error || 'Unknown');
        }
    } catch (err) {
        responseBox.innerText = '❌ Network error';
        console.error(err);
    }
});