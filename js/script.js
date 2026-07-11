// ===============================
// PharmaSathi AI V2.0
// Dashboard Navigation
// ===============================

// Get all buttons
const buttons = document.querySelectorAll(".btn");

// Add click event
buttons.forEach(button => {

    button.addEventListener("click", function(){

        const title = this.parentElement.querySelector("h2").innerText;

        switch(title){

            case "Medicine Search":
                alert("Medicine Search module is coming next!");
                break;

            case "Drug Interaction":
                alert("Drug Interaction module is coming next!");
                break;

            case "Medicine Reminder":
                alert("Medicine Reminder module is coming next!");
                break;

            case "AI Assistant":
                alert("AI Assistant will use Google Gemini AI.");
                break;

            case "Prescription Scanner":
                alert("Prescription Scanner coming soon.");
                break;

            case "Pill Identifier":
                alert("Pill Identifier coming soon.");
                break;

            default:
                alert("Feature under development.");
        }

    });

});