// ===============================
// PharmaSathi AI v2.0
// ===============================

// Dashboard Navigation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        const title = this.parentElement.querySelector("h2")?.innerText;

        if (title === "Medicine Search") {
            window.location.href = "search.html";
        }

        else if (title === "Drug Interaction") {
            alert("Drug Interaction page will be added next.");
        }

        else if (title === "Medicine Reminder") {
            alert("Medicine Reminder page will be added next.");
        }

        else if (title === "AI Assistant") {
            alert("AI Assistant is coming soon.");
        }

        else if (title === "Prescription Scanner") {
            alert("Prescription Scanner is coming soon.");
        }

        else if (title === "Pill Identifier") {
            alert("Pill Identifier is coming soon.");
        }

    });

});

// ===============================
// Medicine Database
// ===============================

const medicines = {

    paracetamol: {
        uses: "Fever and Pain",
        dose: "500 mg after food",
        sideEffects: "Nausea, Skin rash"
    },

    ibuprofen: {
        uses: "Pain and Inflammation",
        dose: "After food",
        sideEffects: "Stomach irritation"
    },

    cetirizine: {
        uses: "Allergy",
        dose: "Once daily",
        sideEffects: "Sleepiness"
    }

};

// ===============================
// Medicine Search
// ===============================

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {

    searchBtn.addEventListener("click", function () {

        const input = document
            .getElementById("medicineInput")
            .value
            .toLowerCase()
            .trim();

        const result = document.getElementById("result");

        if (medicines[input]) {

            const med = medicines[input];

            result.innerHTML = `
                <h2>${input.toUpperCase()}</h2>

                <p><b>Uses:</b> ${med.uses}</p>

                <p><b>Dose:</b> ${med.dose}</p>

                <p><b>Side Effects:</b> ${med.sideEffects}</p>
            `;

        }

        else {

            result.innerHTML =
            "❌ Medicine not found.";

        }

    });

}