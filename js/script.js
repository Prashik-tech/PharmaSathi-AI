// ==========================
// PharmaSathi AI v1.0
// ==========================

// Medicine Database
const medicines = {
    paracetamol: {
        name: "Paracetamol",
        uses: "Fever and Pain",
        dose: "500 mg after food (or as prescribed)",
        sideEffects: "Nausea, Skin rash",
        storage: "Store below 25°C"
    },

    ibuprofen: {
        name: "Ibuprofen",
        uses: "Pain and Inflammation",
        dose: "After food",
        sideEffects: "Stomach irritation",
        storage: "Store below 25°C"
    },

    cetirizine: {
        name: "Cetirizine",
        uses: "Allergy",
        dose: "Once daily",
        sideEffects: "Sleepiness, Dry mouth",
        storage: "Room temperature"
    }
};

// ==========================
// Medicine Search
// ==========================

document.getElementById("searchBtn").onclick = function () {

    const medicine = document
        .getElementById("medicineInput")
        .value
        .toLowerCase()
        .trim();

    const result = document.getElementById("result");

    if (medicines[medicine]) {

        const med = medicines[medicine];

        result.innerHTML = `
            <h3>${med.name}</h3>
            <p><b>Uses:</b> ${med.uses}</p>
            <p><b>Dose:</b> ${med.dose}</p>
            <p><b>Side Effects:</b> ${med.sideEffects}</p>
            <p><b>Storage:</b> ${med.storage}</p>
        `;

    } else {

        result.innerHTML =
        "❌ Medicine not found.<br><br>Try: Paracetamol, Ibuprofen or Cetirizine.";

    }

};

// ==========================
// Drug Interaction Checker
// ==========================

document.getElementById("interactionBtn").onclick = function () {

    const drug1 = document
        .getElementById("drug1")
        .value
        .toLowerCase()
        .trim();

    const drug2 = document
        .getElementById("drug2")
        .value
        .toLowerCase()
        .trim();

    const output = document.getElementById("interactionResult");

    if (
        (drug1 === "warfarin" && drug2 === "aspirin") ||
        (drug1 === "aspirin" && drug2 === "warfarin")
    ) {

        output.innerHTML =
        "⚠️ WARNING<br><br>Warfarin + Aspirin increases bleeding risk.<br>Consult your doctor.";

    }

    else if (
        (drug1 === "paracetamol" && drug2 === "ibuprofen") ||
        (drug1 === "ibuprofen" && drug2 === "paracetamol")
    ) {

        output.innerHTML =
        "✅ No major interaction found.";

    }

    else {

        output.innerHTML =
        "ℹ️ Interaction information is not available.";

    }

};

// ==========================
// Medicine Reminder
// ==========================

document.getElementById("saveReminderBtn").onclick = function () {

    const medicine =
        document.getElementById("reminderMedicine").value;

    const time =
        document.getElementById("reminderTime").value;

    const output =
        document.getElementById("reminderResult");

    if (medicine === "" || time === "") {

        output.innerHTML =
        "❌ Please enter medicine name and time.";

        return;
    }

    output.innerHTML =
    `✅ Reminder Saved!<br><br>
    <b>Medicine:</b> ${medicine}<br>
    <b>Time:</b> ${time}`;

};