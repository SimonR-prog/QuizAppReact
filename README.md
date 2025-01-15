# Assignment from frontend 2 at Nackademin.
## Description: 
We have been tasked with creating a **quiz web app** that contains atleast five questions. 

### Tech and methods:
HTML, CSS and JavaScript for the frontend.
AJAX (Or Fetch API) to read the JSON-file.
JSON for storing the questions.

### Requirements:
1. Need to use a JSON-file for storing the questions.
2. The web app should have some sort of style sheet seperate from the HTML/JS.
3. Use fetch to load the JSON-file and to show the questions one at a time in the browser.
4. The user should get instant feedback when clicking an option wether they had the right or wrong answer.
5. Add a pointsystem to give the user a final correct answer count.
6. Single-page-application; Only one HTML-document and one element.

### Optional:
1. The web app must use react through Vite CLI.
2. Host the web app on Netlify.
3. Give the user only 10 seconds to answer each question.
4. Add the ability to replay the quiz and/or show the correct answer after each question.
5. Responsive design so that the web app works on any platform.

### Small initial thoughts:
I am going to try adding a random number generator to pick the questions at random. Will let it generate 5 numbers, store them in an array and then iterate through the ids to show the questions.

#### Possible steps:
Have a "start quiz" button which creates an empty array and generate five numbers between 1-10 and add them to the array aslong as the number isn't already in the array.
When the array contains 5 elements, return the array.

Have a while loop that iterates through the array and shows the question and answers depending on which id it has. If the button which the user clicks contains the same answer as the correct answer, then increase some point counter variable and move to the next question.
When the while loop has ran five times, end the loop.

Maybe have one var for wrong answers and one for correct answers. And when the total of them together equal five, end the loop and call a function which shows the score and a message depeding on which var is higher.

# Parts of the code:

### RNG:
Added a link in the sources for where I learned to generate whole numbers within a range and the site I used to test the code I wrote to make sure it worked.

<img src="https://github.com/user-attachments/assets/f05778f6-f011-4060-a620-575034a65459" alt="Image of code." height="300">

Made a function named RnGenerator which creates an empty array. Uses a while loop that iterates until the array contains five elements. It has an if statement which only runs if the number isn't already in the array at which point it adds the new number. When the array is full, it ends the while loop and returns the array.


# Sources:
Most of the questions are from: https://www.mentimeter.com/blog/meetings/quiz-questions
Learning to generate random numbers: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-within-a-range
Testing my JS code: https://pythontutor.com/render.html#mode=display



# Contact: 
LinkedIn: https://www.linkedin.com/in/simon-roll%C3%A9n-250a5232a/
