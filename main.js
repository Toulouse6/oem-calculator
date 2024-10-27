// Handle steps
const steps = document.querySelectorAll('.step');
let currentStep = 0;

// Background options
const backgroundImages = [
    "url('assets/bg3.png')",   // Main
    "url('assets/bg6.png')",      // Step 1
    "url('assets/bg8.png')",   // Step 2
    "url('assets/bg7.png')",      // Step 3
    "url('assets/bg5.png')",  // Contact
    "url('assets/bg9.png')"   // Result
];

// Change the background
function changeBackground(stepIndex) {
    const backgroundOverlay = document.querySelector('.background-overlay');
    backgroundOverlay.style.transition = 'opacity 1.5s ease-out';
    backgroundOverlay.style.opacity = '0'; // Fade out

    setTimeout(() => {
        backgroundOverlay.style.backgroundImage = backgroundImages[stepIndex];
        backgroundOverlay.style.opacity = '1'; // Fade in
    }, 1000);
}

// Show current step and hide others
function showStep(stepIndex) {
    steps.forEach((step, index) => {
        const inputs = step.querySelectorAll('input, select');
        if (index === stepIndex) {
            step.style.display = 'block'; // Show current step
            inputs.forEach(input => {
                input.required = true; // Set required
                if (input.id === 'phone') {
                    input.required = false; // Keep phone optional
                }
            });
        } else {
            step.style.display = 'none'; // Hide other steps
            inputs.forEach(input => input.required = false);
        }
    });
    changeBackground(stepIndex);
}

// First step initially
showStep(currentStep);

// Next buttons
document.querySelectorAll('.next-btn').forEach(button => {
    button.addEventListener('click', function () {
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
        e.preventDefault();
        const inputs = steps[currentStep].querySelectorAll('input, select');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.reportValidity(); // Trigger message
                isValid = false;
            }
        });

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
    const firstName = document.getElementById('firstName')?.value || '';
    const lastName = document.getElementById('lastName')?.value || '';
    const company = document.getElementById('company')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const email = document.getElementById('email')?.value || '';

    const roPerDay = Math.max(0, parseFloat(document.getElementById('roPerMonth').value) || 0);
    const liabilityClaims = Math.max(0, parseFloat(document.getElementById('liabilityClaims').value) || 0);
    const tradeIns = Math.max(0, parseFloat(document.getElementById('tradeIns').value) || 0);

    // Mnthly subscription costs based on total scans
    const monthlySubscriptionCosts = {
        1500: 6300,
        2000: 6500,
        2500: 6700,
        3000: 6900
    };

    // Number of scans needed (rounded up to the nearest 500)
    let totalScans = Math.max(1500, Math.min(3000, Math.ceil((roPerDay + tradeIns) / 500) * 500));
    const scanCost = monthlySubscriptionCosts[totalScans]; // Set scan cost based on total scans

    // Validate inputs before calculations
    if (!email || roPerDay === 0) {
        alert('Please complete all required fields.');
        document.getElementById('submit').disabled = false;
        return;
    }

    // Perform calculations
    const monthlyPotentialIncreaseInROs = 25 * roPerDay * 30; // Monthly increase in ROs
    const savingsInClaims = liabilityClaims * 0.7; // Savings in claims
    const savingsInTradeIns = tradeIns * 500; // Savings from trade-ins

    // Monthly Potential Net Profit
    const monthlyPotentialNetProfit = monthlyPotentialIncreaseInROs + savingsInClaims + savingsInTradeIns - scanCost;

    // Monthly ROI
    const monthlyROI = (monthlyPotentialIncreaseInROs + savingsInTradeIns) / scanCost * 100;

    // Formatting ROI for display
    const monthlyROIMultiplicationFormat = (monthlyROI / 100).toFixed(2);

    // Results HTML
    document.getElementById('result').innerHTML = `
    <div class="result-header">
        <h1>Here are your estimated results</h1>
        <h5 class="disclaimer" id="disclaimer">ROI values are based on average usage observed at partner dealerships. Actual results may vary depending on adoption and unique dealership conditions.</h5>
    </div>
    <div class="result-box">
        <div class="primary">
            <div class="primary-result">
                <h4>Estimated Monthly ROI:<br><b>${monthlyROIMultiplicationFormat}X</b></h4>
                <p><b>UVeye's AI-driven imaging captures all vehicle damage, even without scheduled inspections, with comprehensive scans of the body, underbody, and tires.</b></p>
                <h4 class="net">Estimated Monthly Net Profit:<br><b>$${monthlyPotentialNetProfit.toLocaleString()}</b></h4>
                <p><b>UVeye identifies misalignments that are often missed by traditional lasers, opening up opportunities for services like wheel restoration and dent repair.</b></p>
            </div>
            <div class="disclaimer-footer">
                <p>UVeye's system doesn’t just prevent losses—it opens new opportunities. By providing dealerships with actionable insights, you can add value through supplementary services like tire replacement, wheel realignment, and body repairs, resulting in a better customer experience and stronger profitability. <strong>UVeye isn't just a service tool, it affects all aspects of a dealership!</strong></p>
            </div>
            <div class="social-icons">
                <a href="https://www.linkedin.com/company/uveye/" class="icon" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/teamuveye/" class="icon" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/UVeye.Ltd/" class="icon" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/c/uveye/" class="icon" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-youtube"></i>
                </a>
            </div>
        </div>
        <div>
            <div class="number-box">
                <h3>Estimated Monthly Increase in ROs:<br><b>$${monthlyPotentialIncreaseInROs.toLocaleString()}</b></h3>
                <p>UVeye's precision scanning boosts repair revenue, adding an average of $25 per repair order by identifying and fixing typically missed damage.</p>
            </div>
            <div class="number-box">
                <h3>Estimated Savings in Claims:<br><b>$${savingsInClaims.toLocaleString()}</b></h3>
                <p>UVeye helps detect body and rim issues pre- and post-appointment, cutting false claims and reducing policy expenses by 70%.</p>
            </div>
            <div class="number-box">
                <h3>Estimated Savings in Trade-Ins:<br><b>$${savingsInTradeIns.toLocaleString()}</b></h3>
                <p>UVeye’s comprehensive appraisals reveal hidden damage without a lift, reducing trade-in offers by $500 on average and preventing unnecessary reconditioning costs.</p>
            </div>
            <div class="number-box">
                <h3>Total Monthly Scans Needed:<br><b>${totalScans.toLocaleString()}</b></h3>
                <p>UVeye recommends performing ${totalScans} full vehicle scans each month, based on your RO count and trade-ins.</p>
            </div>
        </div>
    </div>
`;

    // Show results after submission
    document.getElementById('result').style.display = 'block';

    // Hide sections
    document.getElementById('calculatorForm').style.display = 'none';

    changeBackground(5);

    // Prepare data for HubSpot
    let formData = {
        "fields": [
            { "name": "firstName", "value": firstName },
            { "name": "lastName", "value": lastName },
            { "name": "company", "value": company },
            { "name": "phone", "value": phone },
            { "name": "email", "value": email },
            { "name": "total_scans", "value": totalScans },
            { "name": "monthly_potential_increase_in_ros", "value": monthlyPotentialIncreaseInROs.toFixed(2) },
            { "name": "savings_in_claims", "value": savingsInClaims.toFixed(2) },
            { "name": "savings_in_trade_ins", "value": savingsInTradeIns.toFixed(2) },
            { "name": "monthly_potential_net_profit", "value": monthlyPotentialNetProfit.toFixed(2) },
            { "name": "monthly_roi", "value": monthlyROIMultiplicationFormat }
        ]
    };

    // Send data
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.hsforms.com/submissions/v3/integration/submit/5004654/322950bd-00c9-4aa8-a220-107dfea7da0a", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Form submitted successfully');
        } else {
            console.error('Error submitting form');
            document.getElementById('submit').disabled = false; // Re-enable if there was an error
            document.getElementById('submit').textContent = 'Calculate';
        }
    };

    xhr.send(JSON.stringify(formData));
});
