const checkTimes = () => {
    let currentTime = moment().hour();
    if (currentTime >= 9 && currentTime < 10) {
        nineAM.style.background = "#fa6c14";
    }
    else if (currentTime >= 10 && currentTime < 11) {
        nineAM.style.background = "lightgrey";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "#fa6c14";
    }
    else if (currentTime >= 11 && currentTime < 12) {
        nineAM.style.background = "lightgrey";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "lightgrey";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "#fa6c14";
    }
    else if (currentTime >= 12 && currentTime < 13) {
        nineAM.style.background = "lightgrey";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "lightgrey";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "lightgrey";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "#fa6c14";
    }
    else if (currentTime >= 13 && currentTime < 14) {
        nineAM.style.background = "lightgrey";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "lightgrey";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "lightgrey";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "lightgrey";
        twelvePM.setAttribute("readonly", true);
        onePM.style.background = "#fa6c14";
    }
    else if (currentTime >= 14 && currentTime < 15) {
        nineAM.style.background = "lightgrey";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "lightgrey";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "lightgrey";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "lightgrey";
        twelvePM.setAttribute("readonly", true);
        onePM.style.background = "lightgrey";
        onePM.setAttribute("readonly", true);
        twoPM.style.background = "#fa6c14";
    }
    else if (currentTime >= 15 && currentTime < 16) {
        nineAM.style.background = "lightgrey";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "lightgrey";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "lightgrey";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "lightgrey";
        twelvePM.setAttribute("readonly", true);
        onePM.style.background = "lightgrey";
        onePM.setAttribute("readonly", true);
        twoPM.style.background = "lightgrey";
        twoPM.setAttribute("readonly", true);
        threePM.style.background = "#fa6c14";
    }
    else if (currentTime >= 16 && currentTime < 17) {
        nineAM.style.background = "lightgrey";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "lightgrey";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "lightgrey";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "lightgrey";
        twelvePM.setAttribute("readonly", true);
        onePM.style.background = "lightgrey";
        onePM.setAttribute("readonly", true);
        twoPM.style.background = "lightgrey";
        twoPM.setAttribute("readonly", true);
        threePM.style.background = "lightgrey";
        threePM.setAttribute("readonly", true);
        fourPM.style.background = "#fa6c14";
    }
    else if (currentTime >= 17 && currentTime < 18) {
        nineAM.style.background = "lightgrey";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "lightgrey";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "lightgrey";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "lightgrey";
        twelvePM.setAttribute("readonly", true);
        onePM.style.background = "lightgrey";
        onePM.setAttribute("readonly", true);
        twoPM.style.background = "lightgrey";
        twoPM.setAttribute("readonly", true);
        threePM.style.background = "lightgrey";
        threePM.setAttribute("readonly", true);
        fourPM.style.background = "lightgrey";
        fourPM.setAttribute("readonly", true);
        fivePM.style.background = "#fa6c14";
    }
    else if (currentTime >= 18) {
        nineAM.style.background = "lightgrey";
        nineAM.setAttribute("readonly", true);
        tenAM.style.background = "lightgrey";
        tenAM.setAttribute("readonly", true);
        elevenAM.style.background = "lightgrey";
        elevenAM.setAttribute("readonly", true);
        twelvePM.style.background = "lightgrey";
        twelvePM.setAttribute("readonly", true);
        onePM.style.background = "lightgrey";
        onePM.setAttribute("readonly", true);
        twoPM.style.background = "lightgrey";
        twoPM.setAttribute("readonly", true);
        threePM.style.background = "lightgrey";
        threePM.setAttribute("readonly", true);
        fourPM.style.background = "lightgrey";
        fourPM.setAttribute("readonly", true);
        fivePM.style.background = "lightgrey";
        fivePM.setAttribute("readonly", true);
    }

}