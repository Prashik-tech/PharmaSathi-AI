// ----------------------------
// Medicine Search Database
// ----------------------------

const medicines = {
  paracetamol: {
    name: "Paracetamol",
    uses: "Fever and Pain",
    dose: "As prescribed by a doctor",
    sideEffects: "Nausea, Skin rash",
    storage: "Store below 25°C"
  },

  cetirizine: {
    name: "Cetirizine",
    uses: "Allergy",
    dose: "Once daily",
    sideEffects: "Sleepiness, Dry mouth",
    storage: "Room temperature"
  },

  ibuprofen: {
    name: "Ibuprofen",
    uses: "Pain and Inflammation",
    dose: "After food",
    sideEffects: "Stomach irritation",
    storage: "Store below 25°C"
  }
};

// ----------------------------
// Medicine Search
// ----------------------------

document.getElementById("searchBtn").addEventListener("click", function () {

  const input = document.getElementById("medicineInput").value.toLowerCase().trim();

  const result = document.getElementById("result");

  if (medicines[input]) {

    const med = medicines[input];

    result.innerHTML = `
      <h3>${med.name}</h3>
      <p><b>Uses:</b> ${med.uses}</p>
      <p><b>Dose:</b> ${med.dose}</p>
      <p><b>Side Effects:</b> ${med.sideEffects}</p>
      <p><b>Storage:</b> ${med.storage}</p>
    `;

  } else {

    result.innerHTML =
      "<b>Medicine not found.</b>";

  }

});

// ----------------------------
// Drug Interaction Checker
// ----------------------------

document.getElementById("interactionBtn").addEventListener("click", function () {

  const drug1 = document.getElementById("drug1").value.toLowerCase().trim();

  const drug2 = document.getElementById("drug2").value.toLowerCase().trim();

  const output = document.getElementById("interactionResult");

  if (
      (drug1 === "warfarin" && drug2 === "aspirin") ||
      (drug1 === "aspirin" && drug2 === "warfarin")
  ) {

      output.innerHTML =
      "⚠️ <b>Warning!</b><br>Warfarin + Aspirin may increase the risk of bleeding.<br>Please consult a doctor.";

  }

  else if (
      (drug1 === "paracetamol" && drug2 === "ibuprofen") ||
      (drug1 === "ibuprofen" && drug2 === "paracetamol")
  ) {

      output.innerHTML =
      "✅ No major interaction found.<br>Use only as advised by your doctor.";

  }

  else {

      output.innerHTML =
      "ℹ️ Interaction information is not available for this combination.";

  }

});