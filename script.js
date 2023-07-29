const userInput = document.querySelector('.birthdate'); 
const userOutput = document.querySelector('.user-output');
userInput.max = new Date().toISOString().split("T")[0];


function printDate(){
  const birthDate = new Date(userInput.value);

  const birthDay = birthDate.getDate();
  const birthMonth = birthDate.getMonth()+1;
  const birthYear = birthDate.getFullYear();

  const today = new Date();

  const todayDay = today.getDate();
  const todayMonth = today.getMonth()+1;
  const todayYear = today.getFullYear();

  let finalYear = 0; 
  let finalMonth = 0;
  let finalDay = 0;

  //year 
  finalYear = todayYear - birthYear;

  //month condition
  if(todayMonth<birthMonth){
    finalYear--;
    finalMonth = (12+todayMonth)-birthMonth;
  }
  else{
    finalMonth = todayMonth-birthMonth;
  }
  //day condition
  if(todayDay<birthDay){
    finalMonth--;
    finalDay = (30+todayDay)-birthDay;
  }
  else{
    finalDay = todayDay-birthDay;
  }

  //only count in Months
  let onlyMonth = 0;

  onlyMonth = (finalYear*12)+finalMonth;

  userOutput.innerHTML = `<p style="font-weight: 600;">you are <span id="element" style="color: red; font-weight: 600;"></span></p>`;

  /*userOutput.innerHTML = `${finalYear} years, ${finalMonth} months and ${finalDay} days old`;*/
  let a = 2+7;
  let g = 8+6;
    var typed = new Typed('#element', {
      strings: [`<span style="color:white">${finalYear}</span> years, <span style="color:white">${finalMonth}</span> months and <span style="color:white">${finalDay}</span> days old.`, `<span style="color:white">${onlyMonth}</span> months <span style="color:white">${finalDay}</span> days old.`],
      loop: true,
      typeSpeed: 50,
      backSpeed: 80,
      startDelay: 1000,
      backDelay: 1000,
    });
}