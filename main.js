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

// Update progress bar
function updateProgressBar() {
    const progress = ((currentStep) / (steps.length - 1)) * 100;
    progressBar.style.width = `${progress}%`;
}

// Initialize segments and bar
createProgressSegments();
updateProgressBar();


const oemValues = {
    "Audi": { avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "https://www.uveye.com/wp-content/uploads/2024/11/audi-bg2.png", additional: "" },
    "Chevrolet": {
        avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500,
        image: "https://www.uveye.com/wp-content/uploads/2024/11/chevy-bg.png",
        additional: "Chevrolet stores in the UVeye network have saved an average of $189,000 in reconditioning costs, increased vehicle acquisitions from 1-3 to 5-10 per month, and achieved a 30% average rise in gross profit per repair order. They've also seen a 119% increase in alignment sales revenue and reduced policy spending by approximately $4,000 per month after installing UVeye."
    },
    "Ford": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "https://www.uveye.com/wp-content/uploads/2024/11/ford-bg3.png", additional: "" },
    "GMC": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/gmc-bg4.png", additional: "" },
    "Cadillac": {
        avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000,
        image: "https://www.uveye.com/wp-content/uploads/2024/11/cadillac-bg4.png",
        additional: "Cadillac stores within the UVeye network have experienced a 16% increase in average revenue, a 17% rise in average gross profit, and an additional $166,000 in monthly profits."
    },
    "Buick": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/polestar-bg3.png", additional: "" },
    "Chrysler": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/gen-bg1.png", additional: "" },
    "Dodge": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/gen-bg4.png", additional: "" },
    "Jeep": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/.png", additional: "" },
    "Ram": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/ram-bg.png", additional: "" },
    "Lincoln": { avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000, image: "https://www.uveye.com/wp-content/uploads/2024/11/lincoln-bg.png", additional: "" },
    "Tesla": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "https://www.uveye.com/wp-content/uploads/2024/11/tesla-bg.png", additional: "" },
    "Mercedes-Benz": {
        avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000,
        image: "https://www.uveye.com/wp-content/uploads/2024/11/mercedes-bg.jpg",
        additional: "Mercedes-Benz stores in the UVeye network have experienced a 46% YoY increase in alignment sales and a 100% YoY rise in tire sales."
    },
    "BMW": {
        avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1000,
        image: "https://www.uveye.com/wp-content/uploads/2024/11/bmw-bg2.png",
        additional: "BMW stores in the UVeye network have reported a 41% growth in alignment sales and a 25% increase in tire sales."
    },
    "Volkswagen": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/volkswagen-bg2.png", additional: "" },
    "Porsche": {
        avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1500,
        image: "https://www.uveye.com/wp-content/uploads/2024/11/porsche-bg4.png",
        additional: "Porsche stores in the UVeye network have achieved over $100,000 annually in policy savings."
    },
    "Toyota": {
        avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500,
        image: "https://www.uveye.com/wp-content/uploads/2024/11/toyota-bg.png",
        additional: "Toyota stores in the UVeye network have reported a 100% increase in tire sales, a 50% rise in alignment sales, and over $30,000 in additional monthly revenue from collision work."
    },
    "Lexus": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/lexus-bg.png", additional: "" },
    "Honda": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "https://www.uveye.com/wp-content/uploads/2024/11/honda-bg.png", additional: "" },
    "Acura": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/acura-bg.png", additional: "" },
    "Nissan": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "https://www.uveye.com/wp-content/uploads/2024/11/nissan-bg.png", additional: "" },
    "Infiniti": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/infiniti-bg.png", additional: "" },
    "Subaru": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "https://www.uveye.com/wp-content/uploads/2024/11/subaru-bg.png", additional: "" },
    "Mazda": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "https://www.uveye.com/wp-content/uploads/2024/11/mazda-bg.png", additional: "" },
    "Mitsubishi": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "https://www.uveye.com/wp-content/uploads/2024/11/mitsubishi-bg.png", additional: "" },
    "Hyundai": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "https://www.uveye.com/wp-content/uploads/2024/11/hyundai-bg.png", additional: "" },
    "Kia": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "https://www.uveye.com/wp-content/uploads/2024/11/kia-bg.png", additional: "" },
    "Genesis": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/genesis-bg.png", additional: "" },
    "Volvo": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/volvo-bg.png", additional: "" },
    "Polestar": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "https://www.uveye.com/wp-content/uploads/2024/11/polestar-bg4.png", additional: "" },
    "Jaguar": { avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1500, image: "https://www.uveye.com/wp-content/uploads/2024/11/jaguar-bg2.png", additional: "" },
    "Land Rover": {
        avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750,
        image: "https://www.uveye.com/wp-content/uploads/2024/11/jlr-bg.png",
        additional: "Land Rover stores in the UVeye network have achieved an average increase of $340,000 in service sales, with a 34.7% rise in overall service sales. They’ve also seen a 25% average increase in RO counts for alignments, along with a reduction in service policy spending."
    },
    "Mini": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/mini-bg.png", additional: "" },
    "Bentley": { avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1500, image: "https://www.uveye.com/wp-content/uploads/2024/11/bentley-bg.png", additional: "" },
    "Rolls-Royce": { avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1500, image: "https://www.uveye.com/wp-content/uploads/2024/11/rolls-royce-bg.png", additional: "" },
    "Aston Martin": { avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1500, image: "https://www.uveye.com/wp-content/uploads/2024/11/aston-martin-bg.png", additional: "" },
    "Ferrari": { avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1500, image: "https://www.uveye.com/wp-content/uploads/2024/11/ferrari-bg.png", additional: "" },
    "Maserati": { avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1500, image: "https://www.uveye.com/wp-content/uploads/2024/11/maserati-bg.png", additional: "" },
    "Lamborghini": { avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1500, image: "https://www.uveye.com/wp-content/uploads/2024/11/lamborghini-bg.png", additional: "" },
    "Alfa Romeo": { avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1500, image: "https://www.uveye.com/wp-content/uploads/2024/11/alfa-romeo-bg.png", additional: "" },
    "Bugatti": { avgPolicyClaimsReduction: "80%", avgSavingsInTradeIns: 1500, image: "https://www.uveye.com/wp-content/uploads/2024/11/bugatti-bg.png", additional: "" },
    "Rivian": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/rivian-bg.png", additional: "" },
    "Lucid": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 750, image: "https://www.uveye.com/wp-content/uploads/2024/11/lucid-bg.png", additional: "" },
    "Other": { avgPolicyClaimsReduction: "70%", avgSavingsInTradeIns: 500, image: "https://www.uveye.com/wp-content/uploads/2024/11/volvo-bg.png", additional: "" }
};


// Sort OEMs
$(document).ready(function () {
    $('#oem').select2({
        placeholder: "Please select",
        allowClear: true,
        width: '100%'
    }).on('change', function () {
        const selectedOEM = $(this).val();
        if (oemValues[selectedOEM]) {
            document.getElementById('roPerDay').value = oemValues[selectedOEM].cost;
        }
    });

    // Set placeholder text in Select2 search field
    $('#oem').on('select2:open', function () {
        const searchField = document.querySelector('.select2-search__field');
        if (searchField) {
            searchField.placeholder = "Search an OEM...";
            searchField.focus();
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

        // Preload the selected image
        const tempImage = new Image();
        tempImage.src = image;
        tempImage.onload = () => {
            setTimeout(() => {
                // Set new background
                overlay.style.backgroundImage = `url(${image})`;

                // Fade in by adding 'visible'
                requestAnimationFrame(() => {
                    overlay.classList.add('visible');
                });
            }, 1200);
        };

        // Fallback default background if image fails
        tempImage.onerror = () => {
            setTimeout(() => {
                overlay.style.backgroundImage = `url('assets/polestar-bg3.png')`;
                requestAnimationFrame(() => {
                    overlay.classList.add('visible');
                });
            }, 1200);
        };
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

    // Destructure values
    const { avgPolicyClaimsReduction, avgSavingsInTradeIns, additional } = oemValues[selectedOEM];

    // Input values
    const firstName = document.getElementById('firstName')?.value || '';
    const lastName = document.getElementById('lastName')?.value || '';
    const company = document.getElementById('company')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const email = document.getElementById('email')?.value || '';

    const roPerDay = Math.max(0, parseFloat(document.getElementById('roPerDay').value) || 0);
    const liabilityClaims = Math.max(0, parseFloat(document.getElementById('liabilityClaims').value) || 0);
    const tradeIns = Math.max(0, parseFloat(document.getElementById('tradeIns').value) || 0);

    // Subscription costs based on total scans
    const monthlySubscriptionCosts = {
        1500: 6300,
        2000: 6500,
        2500: 6700,
        3000: 6900
    };

    const roPerMonth = roPerDay * 25; // Convert daily ROs to monthly

    // Calculate the total scans needed, rounding up to the nearest 500
    let totalScans = Math.ceil((roPerMonth + tradeIns) / 500) * 500;

    // Ensure totalScans is at least 1500 and at most 3000
    if (totalScans < 1500) {
        totalScans = 1500;
    } else if (totalScans > 3000) {
        totalScans = 3000;
    }

    // Retrieve the scanCost
    const scansCost = monthlySubscriptionCosts[totalScans];

    const avgGainPerRO = 30;

    console.log(`Selected OEM (Input): ${selectedOEM}`);

    // OEM values
    console.log(`Policy Claims Reduction (by OEM): ${avgPolicyClaimsReduction}`);
    console.log(`Savings In Trade-Ins (by OEM): ${avgSavingsInTradeIns}`);
    console.log(`Additional Info (by OEM): ${additional}`);

    // User inputs values
    console.log(`RO per Day (Input): ${roPerDay}`);
    console.log(`Liability Claims (Input): ${liabilityClaims}`);
    console.log(`Trade-Ins (Input): ${tradeIns}`);

    // Perform calculations
    const monthlyPotentialIncreaseInROs = roPerMonth * avgGainPerRO; // Monthly increase in ROs
    const savingsInClaims = liabilityClaims * (parseFloat(avgPolicyClaimsReduction) / 100); // Savings in claims
    const savingsInTradeIns = tradeIns * avgSavingsInTradeIns; // Savings from trade-ins


    // Monthly Potential Net Profit
    const monthlyPotentialNetProfit = monthlyPotentialIncreaseInROs + savingsInClaims + savingsInTradeIns - scansCost;

    // Monthly ROI
    const monthlyROI = (monthlyPotentialIncreaseInROs + savingsInClaims + savingsInTradeIns) / scansCost;

    // Calculation values
    console.log(`RO per Month: ${monthlyPotentialIncreaseInROs}`);
    console.log(`Monthly Subscription Costs ${scansCost}`);
    console.log(`Total Scans: ${totalScans}`);


    // Results HTML
    document.getElementById('result').innerHTML = `
<div class="result-header">
    <h1>Here are your estimated results</h1>
    <h5 class="disclaimer" id="disclaimer">ROI values are based on average usage observed at <b>${selectedOEM}</b> dealerships. Actual
        results may vary depending on adoption and unique dealership conditions.</h5>
</div>
${additional ? `<div id="additionalInfo"><h5>${additional}</h5></div>` : ""}
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
        <button class="savingsBtn" onclick="window.location.href='https://www.uveye.com/contact/'">See Your Savings in Action</button>
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
            <p>UVeye's precision scanning boosts repair revenue, adding an average of $30 per repair order by
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
    </div>
</div>
`;

    // Show results
    document.getElementById('result').style.display = 'block';
    document.getElementById('calculatorForm').style.display = 'none';


    // // Prepare data for HubSpot
    // let formData = {

    //     "fields": [
    //         { "name": "firstName", "value": firstName },
    //         { "name": "lastName", "value": lastName },
    //         { "name": "company", "value": company },
    //         { "name": "phone", "value": phone },
    //         { "name": "email", "value": email },
    //         { "name": "oem", "value": selectedOEM },
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
