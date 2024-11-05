// Handle steps
const steps = document.querySelectorAll('.step');
const progressBar = document.querySelector('.progress-bar');
const progressSegmentsContainer = document.querySelector('.progress-segments');
let currentStep = 0;

// Create segment markers
function createProgressSegments() {
    const numberOfSteps = steps.length;
    for (let i = 1; i < numberOfSteps; i++) {
        const segment = document.createElement('div');
        segment.classList.add('progress-segment');
        progressSegmentsContainer.appendChild(segment);
    }
}

// Initialize segments and bar on load
createProgressSegments();
updateProgressBar();

function updateProgressBar() {
    const progress = ((currentStep) / (steps.length - 1)) * 100;
    progressBar.style.width = `${progress}%`;
}


const oemValues = {
    "Audi": { roCost: 60, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "assets/audi-bg2.png", additional: "" },
    "Chevrolet": {
        roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500,
        image: "assets/chevy-bg.png",
        additional: "Chevrolet stores in the UVeye network have saved an average of $189,000 in reconditioning costs, increased vehicle acquisitions from 1-3 to 5-10 per month, and achieved a 30% average rise in gross profit per repair order. They've also seen a 119% increase in alignment sales revenue and reduced policy spending by approximately $4,000 per month after installing UVeye."
    },
    "Ford": { roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "assets/ford-bg3.png", additional: "" },
    "GMC": { roCost: 40, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "assets/gmc-bg4.png", additional: "" },
    "Cadillac": {
        roCost: 60, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000,
        image: "assets/cadillac-bg4.png",
        additional: "Cadillac stores within the UVeye network have experienced a 16% increase in average revenue, a 17% rise in average gross profit, and an additional $166,000 in monthly profits."
    },
    "Buick": { roCost: 50, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "assets/polestar-bg3.png", additional: "" },
    "Chrysler": { roCost: 50, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "assets/gen-bg1.png", additional: "" },
    "Dodge": { roCost: 50, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "assets/gen-bg4.png", additional: "" },
    "Jeep": { roCost: 40, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "assets/jeep-bg.png", additional: "" },
    "Ram": { roCost: 40, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "assets/ram-bg.png", additional: "" },
    "Lincoln": { roCost: 60, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "assets/lincoln-bg.png", additional: "" },
    "Tesla": { roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "assets/tesla-bg.png", additional: "" },
    "Mercedes-Benz": {
        roCost: 70, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000,
        image: "assets/mercedes-bg.png",
        additional: "Mercedes-Benz stores in the UVeye network have experienced a 46% YoY increase in alignment sales and a 100% YoY rise in tire sales."
    },
    "BMW": {
        roCost: 60, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000,
        image: "assets/bmw-bg2.png",
        additional: "BMW stores in the UVeye network have reported a 41% growth in alignment sales and a 25% increase in tire sales."
    },
    "Volkswagen": { roCost: 50, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "assets/volkswagen-bg2.png", additional: "" },
    "Porsche": {
        roCost: 70, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1500,
        image: "assets/porsche-bg4.png",
        additional: "Porsche stores in the UVeye network have achieved over $100,000 annually in policy savings."
    },
    "Toyota": {
        roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500,
        image: "assets/toyota-bg.png",
        additional: "Toyota stores in the UVeye network have reported a 100% increase in tire sales, a 50% rise in alignment sales, and over $30,000 in additional monthly revenue from collision work."
    },
    "Lexus": { roCost: 50, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "assets/lexus-bg.png", additional: "" },
    "Honda": { roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "assets/honda-bg.png", additional: "" },
    "Acura": { roCost: 40, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 600, image: "assets/acura-bg.png", additional: "" },
    "Nissan": { roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "assets/nissan-bg.png", additional: "" },
    "Infiniti": { roCost: 50, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 700, image: "assets/infiniti-bg.png", additional: "" },
    "Subaru": { roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "assets/subaru-bg.png", additional: "" },
    "Mazda": { roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "assets/mazda-bg.png", additional: "" },
    "Mitsubishi": { roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "assets/mitsubishi-bg.png", additional: "" },
    "Hyundai": { roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "assets/hyundai-bg.png", additional: "" },
    "Kia": { roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "assets/kia-bg.png", additional: "" },
    "Genesis": { roCost: 40, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 600, image: "assets/genesis-bg.png", additional: "" },
    "Volvo": { roCost: 50, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "assets/volvo-bg.png", additional: "" },
    "Polestar": { roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "assets/polestar-bg4.png", additional: "" },
    "Jaguar": { roCost: 70, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "assets/jaguar-bg2.png", additional: "" },
    "Land Rover": {
        roCost: 50, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750,
        image: "assets/jlr-bg.png",
        additional: "Land Rover stores in the UVeye network have achieved an average increase of $340,000 in service sales, with a 34.7% rise in overall service sales. They’ve also seen a 25% average increase in RO counts for alignments, along with a reduction in service policy spending."
    },
    "Mini": { roCost: 50, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "assets/mini-bg.png", additional: "" },
    "Bentley": { roCost: 70, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "assets/bentley-bg.png", additional: "" },
    "Rolls-Royce": { roCost: 70, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "assets/rolls-royce-bg.png", additional: "" },
    "Aston Martin": { roCost: 70, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "assets/aston-martin-bg.png", additional: "" },
    "Ferrari": { roCost: 70, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "assets/ferrari-bg.png", additional: "" },
    "Maserati": { roCost: 70, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "assets/maserati-bg.png", additional: "" },
    "Lamborghini": { roCost: 70, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "assets/lamborghini-bg.png", additional: "" },
    "Alfa Romeo": { roCost: 70, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "assets/alfa-romeo-bg.png", additional: "" },
    "Bugatti": { roCost: 70, avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "assets/bugatti-bg.png", additional: "" },
    "Rivian": { roCost: 50, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "assets/rivian-bg.png", additional: "" },
    "Lucid": { roCost: 50, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "assets/lucid-bg.png", additional: "" },
    "Other": { roCost: 30, avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "assets/volvo-bg.png", additional: "" }
};


// Sort OEMs
$(document).ready(function () {
    $('#oem').select2({
        placeholder: "Please select",
        allowClear: true,
        width: '100%'
    }).on('change', function () {
        const selectedOEM = $(this).val();

        // Update roPerMonth based on OEM
        if (oemValues[selectedOEM]) {
            document.getElementById('roPerMonth').value = oemValues[selectedOEM].cost;
        }
    });
});


// OEM select event + change backgrounds
$('#oem').on('change', function () {
    const selectedOEM = $(this).val();
    const overlay = document.querySelector('.background-overlay');

    if (overlay && oemValues[selectedOEM]) {
        const { image } = oemValues[selectedOEM];

        // Fade out by removing 'visible'
        overlay.classList.remove('visible');

        setTimeout(() => {
            // Set background default image fullback if image not found
            overlay.style.backgroundImage = `url(${image})`;
            overlay.style.backgroundImage = `url(${image}), url('assets/polestar-bg3.png')`;

            requestAnimationFrame(() => {
                overlay.classList.add('visible');
            });
        }, 1200);
    }
});


// Show current step and update progress bar
function showStep(stepIndex) {
    steps.forEach((step, index) => {
        step.style.display = index === stepIndex ? 'block' : 'none';
    });
    updateProgressBar();
}


// Initial step and progress bar
showStep(currentStep);


// Next button handler
document.querySelectorAll('.next-btn').forEach(button => {
    button.addEventListener('click', function () {
        const inputs = steps[currentStep].querySelectorAll('input, select');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.reportValidity();
                isValid = false;
            }
        });

        if (isValid) {
            currentStep++;
            if (currentStep < steps.length) {
                showStep(currentStep);
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
    e.preventDefault(); // Prevent submission

    // Prevent multiple submissions
    document.getElementById('submit').style.display = 'none';

    // Get OEM
    const selectedOEM = document.getElementById('oem').value;

    // Check if selected OEM is defined
    if (!oemValues[selectedOEM]) {
        alert("Please select a valid OEM.");
        document.getElementById('submit').style.display = 'block';
        return;
    }

    // Destructure values
    const { roCost, avgPolicyClaimsReduction, avgSavingsInTradeIns, additional } = oemValues[selectedOEM];

    // Validate values
    if (roCost === undefined || avgPolicyClaimsReduction === undefined || avgSavingsInTradeIns === undefined) {
        alert("Some values for the selected OEM are missing.");
        document.getElementById('submit').style.display = 'block';
        return;
    }

    // Input values
    const firstName = document.getElementById('firstName')?.value || '';
    const lastName = document.getElementById('lastName')?.value || '';
    const company = document.getElementById('company')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const email = document.getElementById('email')?.value || '';

    const roPerDay = Math.max(0, parseFloat(document.getElementById('roPerMonth').value) || 0);
    const liabilityClaims = Math.max(0, parseFloat(document.getElementById('liabilityClaims').value) || 0);
    const tradeIns = Math.max(0, parseFloat(document.getElementById('tradeIns').value) || 0);

    // Subscription costs based on total scans
    const monthlySubscriptionCosts = {
        1500: 6300,
        2000: 6500,
        2500: 6700,
        3000: 6900
    };

    // Number of scans needed (rounded up to the nearest 500)
    let totalScans = Math.max(1500, Math.min(3000, Math.ceil((roPerDay + tradeIns) / 500) * 500));
    const scanCost = monthlySubscriptionCosts[totalScans] || monthlySubscriptionCosts[1500];

    // Validate inputs before calculations
    if (!email || roPerDay === 0) {
        alert('Please complete all required fields.');
        document.getElementById('submit').style.display = 'block';
        return;
    }

    // Perform calculations
    const monthlyPotentialIncreaseInROs = roCost * roPerDay * 25; // Monthly increase in ROs
    const savingsInClaims = liabilityClaims * (parseFloat(avgPolicyClaimsReduction) / 100); // Savings in claims
    const savingsInTradeIns = tradeIns * avgSavingsInTradeIns; // Savings from trade-ins

    // Monthly ROI
    const monthlyROI = (monthlyPotentialIncreaseInROs + savingsInClaims + savingsInTradeIns) / scanCost;

    // Monthly Potential Net Profit
    const monthlyPotentialNetProfit = monthlyPotentialIncreaseInROs + savingsInClaims + savingsInTradeIns - scanCost;

    // Results HTML
    document.getElementById('result').innerHTML = `
<div class="result-header">
    <h1>Here are your estimated results</h1>
    <h5 class="disclaimer" id="disclaimer">ROI values are based on average usage observed at ${selectedOEM} dealerships. Actual
        results may vary depending on adoption and unique dealership conditions.</h5>
</div>
${additional ? `<div id="additionalInfo"><h5>⋆⋆ ${additional}</h5></div>` : ""}
<div class="result-box">
    <div class="primary">
        <div class="primary-result">
            <h4>Estimated Monthly ROI:<br><b>${monthlyROI.toFixed(1)}X</b></h4>
            <p><b>UVeye's AI-driven imaging captures all vehicle damage, even without scheduled inspections, with
                    comprehensive scans of the body, underbody, and tires.</b></p>
         <hr>
                    <h4 class="net">Estimated Monthly Net Profit:<br><b>$${monthlyPotentialNetProfit.toLocaleString()}</b></h4>
            <p><b>UVeye identifies misalignments that are often missed by traditional lasers, opening up opportunities
                    for services like wheel restoration and dent repair.</b></p>
        </div>
<div class="footerDiv">
            <h5 class="disclaimer-footer">UVeye's system doesn’t just prevent losses—it opens new opportunities. By
                providing dealerships with actionable insights, you can add value through supplementary services like
                tire replacement, wheel realignment, and body repairs, resulting in a better customer experience and
                stronger profitability. <strong>UVeye isn't just a service tool, it affects all aspects of a
                    dealership!</strong></h5>
            <button class="savingsBtn">See Your Savings in Action</button>
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
    <div>
        <div class="number-box">
            <h3>Estimated Monthly Increase in ROs:<br><b>$${monthlyPotentialIncreaseInROs.toLocaleString()}</b></h3>
            <p>UVeye's precision scanning boosts repair revenue, adding an average of $${roCost} per repair order by
                identifying and fixing typically missed damage.</p>
        </div>
        <div class="number-box">
            <h3>Estimated Savings in Claims:<br><b>$${savingsInClaims.toLocaleString()}</b></h3>
            <p>UVeye helps detect body and rim issues pre- and post-appointment, cutting false claims and reducing
                policy expenses by ${avgPolicyClaimsReduction}.</p>
        </div>
        <div class="number-box">
            <h3>Estimated Savings in Trade-Ins:<br><b>$${savingsInTradeIns.toLocaleString()}</b></h3>
            <p>UVeye’s comprehensive appraisals reveal hidden damage without a lift, reducing trade-in offers by $${avgSavingsInTradeIns} on
                average and preventing unnecessary reconditioning costs.</p>
        </div>
        <div class="number-box">
            <h3>Total Monthly Scans Needed:<br><b>${totalScans.toLocaleString()}</b></h3>
            <p>UVeye recommends performing ${totalScans} full vehicle scans each month, based on your RO count and
                trade-ins.</p>
        </div>
    </div>
</div>
`;

    // Show results
    document.getElementById('result').style.display = 'block';

    // Hide form
    document.getElementById('calculatorForm').style.display = 'none';

    // // Prepare data for HubSpot
    // let formData = {
    //     "fields": [
    //         { "name": "firstName", "value": firstName },
    //         { "name": "lastName", "value": lastName },
    //         { "name": "company", "value": company },
    //         { "name": "phone", "value": phone },
    //         { "name": "email", "value": email },
    //         { "name": "oem", "value": oem },
    //         { "name": "total_scans", "value": totalScans },
    //         { "name": "monthly_potential_increase_in_ros", "value": monthlyPotentialIncreaseInROs.toFixed(2) },
    //         { "name": "savings_in_claims", "value": savingsInClaims.toFixed(2) },
    //         { "name": "savings_in_trade_ins", "value": savingsInTradeIns.toFixed(2) },
    //         { "name": "monthly_potential_net_profit", "value": monthlyPotentialNetProfit.toFixed(2) },
    //         { "name": "monthly_roi", "value": monthlyROI.toFixed(1) }
    //     ]
    // };

    // // Send data
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", "https://api.hsforms.com/submissions/v3/integration/submit/5004654/322950bd-00c9-4aa8-a220-107dfea7da0a", true);
    // xhr.setRequestHeader("Content-Type", "application/json");

    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         console.log('Form submitted successfully');
    //     } else {
    //         console.error('Error submitting form');
    //         document.getElementById('submit').disabled = false; // Re-enable if there was an error
    //         document.getElementById('submit').textContent = 'Calculate';
    //     }
    // };

    // xhr.send(JSON.stringify(formData));
});
