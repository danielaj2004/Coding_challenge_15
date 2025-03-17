// task 1 Creating the Base Structure

const riskDashboard = document.getElementById('riskDashboard');
console.log('Risk Dashboard loaded');

// task 2 Adding Risk Items Dynamically
const riskForm = document.getElementById('riskForm');
if (riskForm) {
    riskForm.addEventListener('submit', function(event) {
        event.stopPropagation();
        event.preventDefault();
        const riskName = document.getElementById('riskName').value;
        const riskLevel = document.getElementById('riskLevel').value;
        const department = document.getElementById('department').value; 

        addRiskItem(riskName, riskLevel, department); // calls function
    }); // records event of risk form
} else {
    console.error('Risk Form element not found');
}

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.classList.add('risk-card');
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p class="risk-level">Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
        <button class="resolveButton">Resolve</button>
    `;// creates risk card w/variables

   // task 4 Categorize Risks by Level
   if (riskLevel === 'Low') {
    riskCard.style.backgroundColor = 'green';
} else if (riskLevel === 'Medium') {
    riskCard.style.backgroundColor = 'yellow';
} else if (riskLevel === 'High') {
    riskCard.style.backgroundColor = 'red';
}; // changes to color of card due to risk level

if (riskDashboard) {
    riskDashboard.appendChild(riskCard); // appending to risk dashboard
} else {
    console.error('Risk Dashboard element not found');
}