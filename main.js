// Handle steps
const steps = document.querySelectorAll('.step');
let currentStep = 0;

// Background options
const backgroundImages = [
    "url('assets/bg3.png')",   // Main
    "url('assets/bg6.png')",      // Step 2
    "url('assets/bg8.png')",   // Step 3
    "url('assets/bg7.png')",      // Step 4
    "url('assets/bg5.png')",  // Step 5
    "url('assets/bg9.png')"   // Result
];

// Change the background
function changeBackground(stepIndex) {
    const backgroundOverlay = document.querySelector('.background-overlay');

    // Fade out the background
    backgroundOverlay.style.transition = 'opacity 1.5s ease-out';
    backgroundOverlay.style.opacity = '0'; // Fade out

    setTimeout(() => {
        backgroundOverlay.style.backgroundImage = backgroundImages[stepIndex];
        backgroundOverlay.style.opacity = '1'; // Fade in
    }, 1000); // Ensure background changes after fading out
}

// Show current step and hide others
function showStep(stepIndex) {
    steps.forEach((step, index) => {
        const inputs = step.querySelectorAll('input, select');
        if (index === stepIndex) {
            step.style.display = 'block'; // Show current step
            inputs.forEach(input => input.required = true);
        } else {
            step.style.display = 'none'; // Hide other steps
            inputs.forEach(input => input.required = false);
        }
    });
    // Change background
    changeBackground(stepIndex);
}

// First step initially
showStep(currentStep);

// Next buttons
document.querySelectorAll('.next-btn').forEach(button => {
    button.addEventListener('click', function () {

        // Check if current inputs are valid
        const inputs = steps[currentStep].querySelectorAll('input, select');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.reportValidity(); // Trigger message
                isValid = false;
            }
        });

        if (isValid) {
            currentStep++;
            if (currentStep < steps.length) {
                showStep(currentStep); // Move to next step
            }
        }
    });
});

// Enter key to move to next step
document.getElementById('calculatorForm').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission on Enter
        const inputs = steps[currentStep].querySelectorAll('input, select');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.reportValidity(); // Trigger validation message
                isValid = false;
            }
        });

        // Next step if valid
        if (isValid && currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }
});

document.getElementById('calculatorForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Prevent multiple submissions
    document.getElementById('submit').style.display = 'none';

    // Input values
    const email = document.getElementById('email')?.value || '';
    const roPerMonth = parseFloat(document.getElementById('roPerMonth')?.value || 0);
    const liabilityClaims = parseFloat(document.getElementById('liabilityClaims')?.value || 0);
    const tradeIns = parseFloat(document.getElementById('tradeIns')?.value || 0);
    const avgRoIncrease = 25;
    const policyClaimsReduction = 0.7;
    const avgDecreaseInTradeInOffers = 500;
    const monthlySubscription = 6100;

    // Number of scans needed (sum of RO + trade-ins, rounded up to the nearest 500)
    const totalScans = Math.ceil((roPerMonth + tradeIns) / 500) * 500;

    // Validate inputs before calculations
    if (!email || roPerMonth === 0) {
        alert('Please complete all required fields.');
        submitButton.disabled = false;
        submitButton.textContent = 'Calculate';
        return;
    }

    // Perform calculations
    const monthlyPotentialIncreaseInROs = avgRoIncrease * roPerMonth;
    const savingsInClaims = liabilityClaims * policyClaimsReduction;
    const savingsInTradeIns = tradeIns * avgDecreaseInTradeInOffers;
    const monthlyPotentialNetProfit = monthlyPotentialIncreaseInROs + savingsInClaims + savingsInTradeIns;
    const monthlyROI = (monthlyPotentialNetProfit / monthlySubscription) * 100;

    // Display results on the page
    document.getElementById('result').innerHTML = `

    <h2>Calculation Results</h2>

    <h4>Monthly ROI: ${monthlyROI.toFixed(2)}%</h4>
    <p><b>UVeye's AI-driven imaging captures all vehicle damage, even without scheduled inspections, with comprehensive scans of the body, underbody, and tires.</b></p>
    <hr>

    <h3>Monthly Increase in ROs: $${monthlyPotentialIncreaseInROs.toFixed()}</h3>
    <p>UVeye's precision scanning boosts repair revenue, adding an average of $25 per repair order by identifying and fixing typically missed damage.</p>
    <hr>

    <h3>Savings in Claims: $${savingsInClaims.toFixed()}</h3>
    <p>UVeye helps detect body and rim issues pre- and post-appointment, cutting false claims and reducing policy expenses by 70%.</p>
    <hr>

    <h3>Savings in Trade-Ins: $${savingsInTradeIns.toFixed()}</h3>
    <p>UVeye’s comprehensive appraisals reveal hidden damage without a lift, reducing trade-in offers by $500 on average and preventing unnecessary reconditioning costs.</p>
    <hr>

    <h3>Total Monthly Scans Needed: ${totalScans}</h3>
    <p>UVeye recommends performing ${totalScans} full vehicle scans each month, based on your RO count and trade-ins.</p>
    <hr>

    <h4>Monthly Net Profit: $${monthlyPotentialNetProfit.toFixed()}</h4>
 
    <p><b>UVeye identifies misalignments that are often missed by traditional lasers, opening up opportunities for services like wheel restoration and dent repair.</b></p>
    `;

    // Show results after submission
    document.getElementById('social-section').style.display = 'block';
    document.getElementById('result').style.display = 'block';

    // Hide email, label & disclaimer
    document.getElementById('disclaimer').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('emailLabel').style.display = 'none';

    changeBackground(5);


    // Prepare data for HubSpot submission
    // let formData = {
    //     "fields": [
    //         { "name": "email", "value": email },
    //         { "name": "total_scans", "value": totalScans },
    //         { "name": "monthly_potential_increase_in_ros", "value": monthlyPotentialIncreaseInROs.toFixed(2) },
    //         { "name": "savings_in_claims", "value": savingsInClaims.toFixed() },
    //         { "name": "savings_in_trade_ins", "value": savingsInTradeIns.toFixed() },
    //         { "name": "monthly_potential_net_profit", "value": monthlyPotentialNetProfit.toFixed() },
    //         { "name": "monthly_roi", "value": monthlyROI.toFixed(2) }
    //     ]
    // };

    // // Send data to HubSpot
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", "https://api.hsforms.com/submissions/v3/integration/submit/5004654/322950bd-00c9-4aa8-a220-107dfea7da0a", true);
    // xhr.setRequestHeader("Content-Type", "application/json");

    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         console.log('Form submitted successfully');
    //     } else {
    //         console.error('Error submitting form');
    //         submitButton.disabled = false; // Re-enable if there was an error
    //         submitButton.textContent = 'Calculate';
    //     }
    // };

    // xhr.send(JSON.stringify(formData));
});
