const dateElement = document.getElementById('date');
const saveElements = document.getElementsByClassName('save');


// Time Variables for Input
var nineAM = document.getElementById('9AM');
var tenAM = document.getElementById('10AM');
var elevenAM = document.getElementById('11AM');
var twelvePM = document.getElementById('12PM');
var onePM = document.getElementById('1PM');
var twoPM = document.getElementById('2PM');
var threePM = document.getElementById('3PM');
var fourPM = document.getElementById('4PM');
var fivePM = document.getElementById('5PM');

// Save Buttons to Store

// Nine Save Button
var nineSaveBtn = document.getElementById('nineSave');
var saveNineField = () => {
    let nineAMText = nineAM.value;
    localStorage.setItem('nine', nineAMText);
    console.log(localStorage.getItem('nine'));
}
nineSaveBtn.addEventListener('click', saveNineField);

// Ten Save Button
var tenSaveBtn = document.getElementById('tenSave');
var saveTenField = () => {
    let tenAMText = tenAM.value;
    localStorage.setItem('ten', tenAMText);
    console.log(localStorage.getItem('ten'));
}
tenSaveBtn.addEventListener('click', saveTenField);

// Eleven Save Button
var elevenSaveBtn = document.getElementById('elevenSave');
var saveElevenField = () => {
    let elevenAMText = elevenAM.value;
    localStorage.setItem('eleven', elevenAMText);
    console.log(localStorage.getItem('eleven'));
}
elevenSaveBtn.addEventListener('click', saveElevenField);

// Twelve Save Button
var twelveSaveBtn = document.getElementById('twelveSave');
var saveTwelveField = () => {
    let twelvePMText = twelvePM.value;
    localStorage.setItem('twelve', twelvePMText);
    console.log(localStorage.getItem('twelve'));
}
twelveSaveBtn.addEventListener('click', saveTwelveField);

// One Save Button
var oneSaveBtn = document.getElementById('oneSave');
var saveOneField = () => {
    let onePMText = onePM.value;
    localStorage.setItem('twelve', onePMText);
    console.log(localStorage.getItem('one'));
}
oneSaveBtn.addEventListener('click', saveOneField);

// Two Save Button
var twoSaveBtn = document.getElementById('twoSave');
var saveTwoField = () => {
    let twoPMText = twoPM.value;
    localStorage.setItem('two', twoPMText);
    console.log(localStorage.getItem('two'));
}
twoSaveBtn.addEventListener('click', saveTwoField);

// Three Save Button
var threeSaveBtn = document.getElementById('threeSave');
var saveThreeField = () => {
    let threePMText = threePM.value;
    localStorage.setItem('three', threePMText);
    console.log(localStorage.getItem('three'));
}
threeSaveBtn.addEventListener('click', saveThreeField);

// Four Save Button
var fourSaveBtn = document.getElementById('fourSave');
var saveFourField = () => {
    let fourPMText = fourPM.value;
    localStorage.setItem("four", fourPMText);
    console.log(localStorage.getItem("four"));
}
fourSaveBtn.addEventListener("click", saveFourField);

// Five Save Button
var fiveSaveBtn = document.getElementById('fiveSave');
var saveFiveField = () => {
    let fivePMText = fivePM.value;
    localStorage.setItem('five', fivePMText);
    console.log(localStorage.getItem('five'));
}
fiveSaveBtn.addEventListener('click', saveFiveField);



const initPlanner = () => {
    updateContent();
    getDateAndTime();
    checkTimes();
}

const getDateAndTime = () => {
    let dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
    dateElement.innerHTML = dateAndTime;
}

var updateContent = () => {
    nineAM.innerHTML = localStorage.getItem("nine");
    tenAM.innerHTML = localStorage.getItem("ten");
    elevenAM.innerHTML = localStorage.getItem("eleven");
    twelvePM.innerHTML = localStorage.getItem("twelve");
    onePM.innerHTML = localStorage.getItem("one");
    twoPM.innerHTML = localStorage.getItem("two");
    threePM.innerHTML = localStorage.getItem("three");
    fourPM.innerHTML = localStorage.getItem("four");
    fivePM.innerHTML = localStorage.getItem("five");
}

const checkTimes = () => {
    var currentTime = moment().hour();
    if (currentTime >= 9 && currentTime < 10) {
        nineAM.style.background = "#fa6c14";
    }
    else if (currentTime >= 10 && currentTime < 11) {
        nineAM.style.background = "#d3d3d3";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "#fa6c14";
    }
    else if (currentTime >= 11 && currentTime < 12) {
        nineAM.style.background = "#d3d3d3";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "#d3d3d3";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "#fa6c14";
    }
    else if (currentTime >= 12 && currentTime < 13) {
        nineAM.style.background = "#d3d3d3";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "#d3d3d3";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "#d3d3d3";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "#fa6c14";
    }
    else if (currentTime >= 13 && currentTime < 14) {
        nineAM.style.background = "#d3d3d3";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "#d3d3d3";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "#d3d3d3";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "#d3d3d3";
        twelvePM.setAttribute("readonly", true);
        onePM.style.background = "#fa6c14";
    }
    else if (currentTime >= 14 && currentTime < 15) {
        nineAM.style.background = "#d3d3d3";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "#d3d3d3";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "#d3d3d3";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "#d3d3d3";
        twelvePM.setAttribute("readonly", true);
        onePM.style.background = "#d3d3d3";
        onePM.setAttribute("readonly", true);
        twoPM.style.background = "#fa6c14";
    }
    else if (currentTime >= 15 && currentTime < 16) {
        nineAM.style.background = "#d3d3d3";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "#d3d3d3";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "#d3d3d3";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "#d3d3d3";
        twelvePM.setAttribute("readonly", true);
        onePM.style.background = "#d3d3d3";
        onePM.setAttribute("readonly", true);
        twoPM.style.background = "#d3d3d3";
        twoPM.setAttribute("readonly", true);
        threePM.style.background = "#fa6c14";
    }
    else if (currentTime >= 16 && currentTime < 17) {
        nineAM.style.background = "#d3d3d3";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "#d3d3d3";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "#d3d3d3";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "#d3d3d3";
        twelvePM.setAttribute("readonly", true);
        onePM.style.background = "#d3d3d3";
        onePM.setAttribute("readonly", true);
        twoPM.style.background = "#d3d3d3";
        twoPM.setAttribute("readonly", true);
        threePM.style.background = "#d3d3d3";
        threePM.setAttribute("readonly", true);
        fourPM.style.background = "#fa6c14";
    }
    else if (currentTime >= 17 && currentTime < 18) {
        nineAM.style.background = "#d3d3d3";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "#d3d3d3";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "#d3d3d3";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "#d3d3d3";
        twelvePM.setAttribute("readonly", true);
        onePM.style.background = "#d3d3d3";
        onePM.setAttribute("readonly", true);
        twoPM.style.background = "#d3d3d3";
        twoPM.setAttribute("readonly", true);
        threePM.style.background = "#d3d3d3";
        threePM.setAttribute("readonly", true);
        fourPM.style.background = "#d3d3d3";
        fourPM.setAttribute("readonly", true);
        fivePM.style.background = "#fa6c14";
    }
    else if (currentTime >= 18) {
        nineAM.style.background = "#d3d3d3";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "#d3d3d3";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "#d3d3d3";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "#d3d3d3";
        twelvePM.setAttribute("readonly", true);
        onePM.style.background = "#d3d3d3";
        onePM.setAttribute("readonly", true);
        twoPM.style.background = "#d3d3d3";
        twoPM.setAttribute("readonly", true);
        threePM.style.background = "#d3d3d3";
        threePM.setAttribute("readonly", true);
        fourPM.style.background = "#d3d3d3";
        fourPM.setAttribute("readonly", true);
        fivePM.style.background = "#d3d3d3";
        fivePM.setAttribute("readonly", true);
    }

}

initPlanner();