Work in progress....

<img src="" alt="" style="width:50%; height:auto;">  </img>

# Assignment from frontend 2 at Nackademin.
## Description: 
We have been tasked with creating a **quiz web app** in react that contains atleast five questions. 

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

## Initial thought..

Was to make a longer json-file than the five questions required and then make a random number generator that would create an array of five indexes that I could use to extract the questions from the json-array to create some replay value.  

<img src="https://github.com/user-attachments/assets/d6eb7db1-e9c7-42dd-8c2a-73db73a88572" alt="Image of the random number generator I made" style="width:50%; height:auto;">  </img>

After having added it and tested I ran into to many problems with things that I couldn't figure out in time. So im going to utilize this later on for some other project instead or if I decided to try and make a new quiz but in JS only instead of with react. 

# Parts of the code:
To fit the criteria of keeping it as a SPA (single page application) I decided to simply make a header, footer and have three components for the middle that will change depending on which stage we're in.

<img src="https://github.com/user-attachments/assets/a11e59c3-b0de-4d31-8534-d2e6571e37d8" alt="Image showing the structure in the main.jsx file" style="width:50%; height:auto;">  </img>

Then when it came to actually changing component I used useStates to shift between then different stages of the game.

<img src="https://github.com/user-attachments/assets/84930373-f028-46d6-acf2-713f2a84388c" alt="Image of the structure of the app.jsx file." style="width:50%; height:auto;">  </img>

So in the example above we have an initial state for startQuiz set as false which will lead us to the lower div with the className "card". 

when we click the button it's using an onClick pointer function to change the state to true which then puts us i nthe first div where QuizGame exists and the center component of the site changes.




## Styling:

Decided, after trying to generate an image for the header and only getting these fucking neon signs, to go with a neon theme for my styling. 

I put the image into the colorpicker and used mycolor to combine some colors to get a linear-gradient that made the image fit into the header.

<img src="https://github.com/user-attachments/assets/a4db268f-426d-480e-9f80-b2da9b2dc3a7" alt="Quiz header image" style="width:50%; height:auto;">  </img>

<img src="https://github.com/user-attachments/assets/115d707b-08b1-4676-9030-151e90c11b56" alt="Color picker quiz image" style="width:50%; height:auto;">  </img>

I added a blue glow for the background of the questions-card and then used that same glow to indicate a correct or wrong answer from the user by changing the color when the user picks.

<img src="https://github.com/user-attachments/assets/7af5ec1e-714a-46f3-bd39-a623233eb2f0" alt="Blue glow" style="width:50%; height:auto;">  </img>

<img src="https://github.com/user-attachments/assets/3c13232a-2fac-41e8-8a68-570ec340d654" alt="Red glow" style="width:50%; height:auto;">  </img>


# Sources:
Most of the questions are from: https://www.mentimeter.com/blog/meetings/quiz-questions

Learning to add images: https://www.youtube.com/watch?v=taMJct5oeoI

Generated the neon quiz image for the header: https://deepai.org/machine-learning-model/text2img

Learning about fetching (Bro code): https://www.youtube.com/watch?v=37vxWr0WgQk

Learning about react in general (Net Ninja): https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=1

Learning about mapping (Net Ninja): https://www.youtube.com/watch?v=tHjxSVaj_wY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=12

More about mapping (bonsaiilabs) : https://www.youtube.com/watch?v=_kVJnN2e4tw

UseState: https://react-hooks-cheatsheet.com/usestate

UseEffect: https://react-hooks-cheatsheet.com/useeffect

Getting colorscheme: https://mycolor.space/

Colorpicker: https://imagecolorpicker.com/



# Contact: 
LinkedIn: https://www.linkedin.com/in/simon-roll%C3%A9n-250a5232a/
