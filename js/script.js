// ===============================
// PharmaSathi AI - Sprint 3
// ===============================

// Medicine Database
const medicines = {

  paracetamol: {
    name: "Paracetamol",
    category: "Analgesic & Antipyretic",
    uses: "Fever, Headache, Body Pain",
    dose: "500 mg after food (as advised by doctor)",
    sideEffects: "Nausea, Skin rash",
    warning: "Do not exceed the recommended dose. Avoid in severe liver disease."
  },

  ibuprofen: {
    name: "Ibuprofen",
    category: "NSAID",
    uses: "Pain, Inflammation, Fever",
    dose: "400 mg after food",
    sideEffects: "Stomach irritation, Heartburn",
    warning: "Avoid if you have stomach ulcers unless advised by a doctor."
  },

  cetirizine: {
    name: "Cetirizine",
    category: "Antihistamine",
    uses: "Allergy, Sneezing, Itching",
    dose: "10 mg once daily",
    sideEffects: "Sleepiness, Dry mouth",
    warning: "May cause drowsiness. Avoid driving after taking it."
  },

  amoxicillin: {
    name: "Amoxicillin",
    category: "Antibiotic",
    uses: "Bacterial infections",
    dose: "As prescribed by doctor",
    sideEffects: "Diarrhea, Nausea",
    warning: "Complete the full course. Do not stop early."
  },

  omeprazole: {
    name: "Omeprazole",
    category: "Proton Pump Inhibitor",
    uses: "Acidity, GERD, Stomach ulcer",
    dose: "20 mg before breakfast",
    sideEffects: "Headache, Constipation",
    warning: "Take before meals for best effect."
  }

};

// Search Button
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
        <h2>${med.name}</h2>

        <p><b>Category:</b> ${med.category}</p>

        <p><b>Uses:</b> ${med.uses}</p>

        <p><b>Dose:</b> ${med.dose}</p>

        <p><b>Side Effects:</b> ${med.sideEffects}</p>

        <p><b>Warning:</b> ${med.warning}</p>
      `;

    } else {

      result.innerHTML = `
        <h2>Medicine Not Found</h2>

        <p>Try searching:</p>

        <ul>
          <li>Paracetamol</li>
          <li>Ibuprofen</li>
          <li>Cetirizine</li>
          <li>Amoxicillin</li>
          <li>Omeprazole</li>
        </ul>
      `;

    }

  });

}

// Card Buttons
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

  btn.addEventListener("click", function () {

    if (btn.innerText === "Open") {

      alert("This feature will be available soon in PharmaSathi AI 🚀");

    }

  });

});

// ===============================
// Auto Suggest Medicine Names
// ===============================

const medicineList = document.getElementById("medicineList");

if (medicineList) {

  Object.values(medicines).forEach((medicine) => {

    const option = document.createElement("option");

    option.value = medicine.name;

    medicineList.appendChild(option);

  });

}

// ===============================
// Drug Interaction Checker
// ===============================

const interactionBtn = document.getElementById("checkInteraction");

if (interactionBtn) {

  const interactions = {

    "paracetamol|ibuprofen": {
      level: "Safe",
      message: "Generally safe when used as directed."
    },

    "ibuprofen|warfarin": {
      level: "High Risk",
      message: "May increase the risk of bleeding. Consult a doctor."
    },

    "amoxicillin|paracetamol": {
      level: "Safe",
      message: "No major interaction is commonly known."
    },

    "cetirizine|alcohol": {
      level: "Warning",
      message: "May cause excessive drowsiness."
    }

  };

  interactionBtn.addEventListener("click", function () {

    const drug1 = document.getElementById("drug1").value.toLowerCase().trim();
    const drug2 = document.getElementById("drug2").value.toLowerCase().trim();

    const key1 = drug1 + "|" + drug2;
    const key2 = drug2 + "|" + drug1;

    const result = document.getElementById("interactionResult");

    if (interactions[key1]) {

      result.innerHTML = `
      <h2>${interactions[key1].level}</h2>
      <p>${interactions[key1].message}</p>
      `;

    } else if (interactions[key2]) {

      result.innerHTML = `
      <h2>${interactions[key2].level}</h2>
      <p>${interactions[key2].message}</p>
      `;

    } else {

      result.innerHTML = `
      <h2>No Data Available</h2>
      <p>This interaction is not available in the current database.</p>
      `;

    }

  });

}