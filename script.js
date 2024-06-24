
document.addEventListener('DOMContentLoaded', () => {
    fetchEmployees();
    window.addEventListener('scroll', lazyLoad);
});

let employees = []; 
let currentIndex = 0; 
const batchSize = 5; 

function fetchEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employees.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            employees = JSON.parse(this.responseText);
            lazyLoad(); 
        }
    }
    xhr.send();
}

function displayEmployees(startIndex, count) {
    const container = document.getElementById('employee-container');
    const fragment = document.createDocumentFragment();

    for (let i = startIndex; i < startIndex + count; i++) {
        if (i >= employees.length) {
            break;
        }
        const employee = employees[i];
        const employeeCard = document.createElement('div');
        employeeCard.classList.add('employee-card');
        employeeCard.innerHTML = `
            <img src="${employee.photo}" alt="${employee.name}">
            <h3>${employee.name}</h3>
            <p>${employee.email}</p>
        `;
        fragment.appendChild(employeeCard);
    }

    container.appendChild(fragment);
}

function lazyLoad() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement || document.body;
    if (scrollTop + clientHeight >= scrollHeight - 200) { 
        const remainingCount = employees.length - currentIndex;
        const toLoad = Math.min(batchSize, remainingCount);
        if (toLoad > 0) {
            displayEmployees(currentIndex, toLoad);
            currentIndex += toLoad;
        }
    }
}
