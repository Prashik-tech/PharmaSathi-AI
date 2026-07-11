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

document.getElementById("searchBtn").addEventListener("click", function () {

  const input = document
    .getElementById("medicineInput")
    .value
    .toLowerCase()
    .trim();

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
      "<b>Medicine not found.</b><br>Please try Paracetamol, Cetirizine or Ibuprofen.";

  }

});