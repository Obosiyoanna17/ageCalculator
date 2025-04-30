// make sure your JavaScript code runs after the entire HTML document has been loaded and parsed. It ensures the script runs at the right time.
document.addEventListener('DOMContentLoaded', function() {

    // Interacts with the input box, button and output Paragraph
 const birthday = document.getElementById('DOB');
 const button = document.getElementById('btn');
 const output = document.getElementById('output');

//  Added an event listener to listen for clicks on the button.
button.addEventListener('click', function(event) {
    // This prevents the form from submitting when the button is clicked.
 event.preventDefault();

//  This variable stores the input value.
    const birthdayInput = birthday.value;
    // Checks if the input box is empty, if yes, it alerts the user prompting them to enter their DOB.
    if (birthdayInput === "") {
        alert("Enter your date of birth.");
    }
    // If no, it proceeds with the age calculation.
    else {
        // Creates a Date object from the birthdayInput string
        const birthDate = new Date(birthdayInput);
        // This date object represents the current date and time.
        const currentDate = new Date();
    
        // Gets the age by subtracting the birth year from the current year.
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        // Gets the current month and birth month
        const month = currentDate.getMonth() - birthDate.getMonth();
        
        // Checks the month and days to see if birthday has occurred. First condition checks if the current month is before the birth month or if the current month is the same as the birth month and the current day is before the birth day
        // if either of the conditions are true, it decreases the age by 1 because the person isn't up to the year
    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
          }
        // Text content adds this text to the html paragraph element to display calcuated age.
          output.textContent = "You are " + age + " years old!";
        // Makes the output visible
        output.classList.add('show');
        // console.log("You are: " + age + " years"); // For debugging
    }
  });

  // Optionally hide the output on initial load if it has the "show" class. 
  if (output.classList.contains('show')) {
    output.classList.remove('show');
  }
});


// Let's say someone's birthday is on the 22nd October 2006.
// Today's date is 27th April 2025.
// This year the person will be 19 years old. (based on years only). Checking the months and days, His birthday hasn't occur this year, So He is still 18 years old.

// CHECKING THE MONTH.(Comparing the current month with the birth month)
// April(month index 3) is before October(month index 9). i.e The current month is before the birth month.
// CHECKING THE DAY (Comparing the current day with the birth day)
// Let's say we are in the month of October already(i.e curent month === birth month) and today's date is 20th October 2006. It also means his birthday hasn't occur this year. Here, the curent day is before the birth day.

