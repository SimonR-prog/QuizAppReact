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
I am going to try adding a random number generator to pick the questions at random. Will let it generate 5 numbers, store them in a list and then iterate through the ids to show the questions.


# Sources:
Most of the questions are from: https://www.mentimeter.com/blog/meetings/quiz-questions
