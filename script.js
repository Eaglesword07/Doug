//function for label and input

//first get the elements
const floatField = document.getElementById("floatField");
const floatContainer = document.getElementById("floatContainer");

// fucntion for when the 'focus'is on the input or floatField
floatField.addEventListener("focus", () => {
    floatContainer.classList.add("active");
});
floatField.addEventListener("blur", () => {
    floatContainer.classList.remove("active");
});



//loop through buttons to determine when to disable other button's onclick when one is active
  let divs = ["faq_answers1", "faq_answers2", "faq_answers3", "faq_answers4", "faq_answers5", "faq_answers6"];
  let visibleDivId = null;
  function divVisibility(divId) {
    if(visibleDivId === divId) {
      visibleDivId = null;
    } else {
      visibleDivId = divId;
    }
    hideNonVisibleDivs();
  }

  //function to toggle show and hide button

  function hideNonVisibleDivs() {
    let i, divId, div;
    for(i = 0; i < divs.length; i++) {
      divId = divs[i];
      div = document.getElementById(divId);
      if(visibleDivId === divId) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    }
  }