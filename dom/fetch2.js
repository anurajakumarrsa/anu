const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function fetchAndDisplayData() {
    
    fetch(apiUrl)
        .then(response => response.json()) 
        .then(users => {
            const tableBody = document.querySelector('#user-table tbody'); 

            users.forEach(user => {
                const row = document.createElement('tr');
                
                const nameCell = document.createElement('td');
                nameCell.textContent = user.name;

                const emailCell = document.createElement('td');
                emailCell.textContent = user.email;

                const phoneCell = document.createElement('td');
                phoneCell.textContent = user.phone;

                row.appendChild(nameCell);
                row.appendChild(emailCell);
                row.appendChild(phoneCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayData);