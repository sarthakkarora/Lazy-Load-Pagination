document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    const employees = [
        { id: 1, name: 'John Smith', email: 'john.smith@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
        { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com' },
        { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com' },
        { id: 5, name: 'Daniel Brown', email: 'daniel.brown@example.com' },
        { id: 6, name: 'Emma Wilson', email: 'emma.wilson@example.com' },
        { id: 7, name: 'Matthew Moore', email: 'matthew.moore@example.com' },
        { id: 8, name: 'Sophia Taylor', email: 'sophia.taylor@example.com' },
        { id: 9, name: 'David Anderson', email: 'david.anderson@example.com' },
        { id: 10, name: 'Olivia Thomas', email: 'olivia.thomas@example.com' },
        { id: 11, name: 'James Martinez', email: 'james.martinez@example.com' },
        { id: 12, name: 'Ava Harris', email: 'ava.harris@example.com' },
        { id: 13, name: 'Alexander Clark', email: 'alexander.clark@example.com' },
        { id: 14, name: 'Isabella Lewis', email: 'isabella.lewis@example.com' },
        { id: 15, name: 'Benjamin Walker', email: 'benjamin.walker@example.com' },
        { id: 16, name: 'Mia Young', email: 'mia.young@example.com' },
        { id: 17, name: 'Lucas Allen', email: 'lucas.allen@example.com' },
        { id: 18, name: 'Charlotte King', email: 'charlotte.king@example.com' },
        { id: 19, name: 'Henry Wright', email: 'henry.wright@example.com' },
        { id: 20, name: 'Amelia Scott', email: 'amelia.scott@example.com' }
    ];
    
    function switchTab(tabNumber) {
        tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab == tabNumber);
        });

        tabContents.forEach(content => {
            content.classList.toggle('active', content.dataset.tab == tabNumber);
        });
    }

    function displayEmployees() {
        const employeesPerPage = 5;
        const totalTabs = Math.ceil(employees.length / employeesPerPage);

        for (let i = 0; i < totalTabs; i++) {
            const tabContent = document.querySelector(`.tab-content[data-tab="${i + 1}"]`);
            const start = i * employeesPerPage;
            const end = start + employeesPerPage;
            const employeesForTab = employees.slice(start, end);

            tabContent.innerHTML = employeesForTab.map(emp => `<p>${emp.id}. ${emp.name} - ${emp.email}</p>`).join('');
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });

   
    switchTab(1);
    displayEmployees();
});
