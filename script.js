
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    for (const [key, value] of params.entries()) {  // params.entries()->return the key value pair//ek ek karke key value dega..
        result[key] = value;                         //result[key] = value ...sets result["name"] = "John Doe".
                                                                    //   Now, result is { name: "John Doe" }.
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
        <p><strong>Approved by FA: </strong></p>
        <p><strong>Approved by HOD: </strong></p>
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




//http://127.0.0.1:5500/URL%20Parameters/index.html?name=Md%20Warsi&email=mdwarsi@gmail.com&regNo=RA2311003020332&hostelName=BH-2&hostelRoomNo=508&dateIn=2024-08-01&dateOut=2024-08-15&parentNo=9876543210&studentNo=9335721522