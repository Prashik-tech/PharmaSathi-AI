// ===============================
// PharmaSathi AI Sprint 2
// ===============================

// Medicine Database
const medicines = {

paracetamol:{
name:"Paracetamol",
uses:"Fever and Pain Relief",
dose:"500mg after food",
sideEffects:"Nausea, Skin rash"
},

ibuprofen:{
name:"Ibuprofen",
uses:"Pain and Inflammation",
dose:"400mg after food",
sideEffects:"Stomach irritation"
},

cetirizine:{
name:"Cetirizine",
uses:"Allergy",
dose:"10mg once daily",
sideEffects:"Sleepiness"
}

};

// Search Button

const searchBtn=document.getElementById("searchBtn");

if(searchBtn){

searchBtn.addEventListener("click",function(){

const input=document
.getElementById("medicineInput")
.value
.toLowerCase()
.trim();

const result=document.getElementById("result");

if(medicines[input]){

const med=medicines[input];

result.innerHTML=`
<h2>${med.name}</h2>

<p><b>Uses:</b> ${med.uses}</p>

<p><b>Dose:</b> ${med.dose}</p>

<p><b>Side Effects:</b> ${med.sideEffects}</p>

`;

}else{

result.innerHTML=`
<h2>Medicine Not Found</h2>

<p>Please try:</p>

<ul>
<li>Paracetamol</li>
<li>Ibuprofen</li>
<li>Cetirizine</li>
</ul>
`;

}

});

}

// Card Buttons

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("click",function(){

if(btn.innerText==="Open"){

alert("Feature coming in next sprint 🚀");

}

});

});