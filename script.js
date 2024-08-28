function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    for (const [key, value] of params.entries()) {
        result[key] = value;
    }
    return result;
}

function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';

    const { name, email, regNo, hostelName, hostelRoomNo, dateIn, dateOut, parentNo, studentNo } = data;

    card.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Reg No:</strong> ${regNo}</p>
        <p><strong>Hostel Name:</strong> ${hostelName}</p>
        <p><strong>Hostel Room No:</strong> ${hostelRoomNo}</p>
        <p><strong>Date-In:</strong> ${dateIn}</p>
        <p><strong>Date-Out:</strong> ${dateOut}</p>
        <p><strong>Parent No:</strong> ${parentNo}</p>
        <p><strong>Student No:</strong> ${studentNo}</p>
        <div class="approval-container">
            <p><span class="checkmark">✔</span> <strong>Approved by FA</strong></p>
            <p><span class="checkmark">✔</span> <strong>Approved by HOD</strong></p>
        </div>
    `;

    return card;
}

function renderCards() {
    const params = getQueryParams();
    const container = document.getElementById('card-container');

    const card = createCard(params);
    container.appendChild(card);
}

renderCards();
