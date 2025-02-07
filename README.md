Work in progress....

<img src="" alt="" style="width:40%; height:auto;">  </img>

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

<img src="https://github.com/user-attachments/assets/d6eb7db1-e9c7-42dd-8c2a-73db73a88572" alt="Image of the random number generator I made" style="width:40%; height:auto;">  </img>

After having added it and tested I ran into to many problems with things that I couldn't figure out in time. So im going to utilize this later on for some other project instead or if I decided to try and make a new quiz but in JS only instead of with react. 

# Code:

### Header and Footer: 
<img src="https://github.com/user-attachments/assets/7d289309-07e3-4426-b732-635e1a30a59f" alt="Image showing the code for both the header and footer." style="width:40%; height:auto;">  </img>

I kept both the header and footer simple. The game is not about them. Since it's a SPA we don't need a bunch of links to different pages on the site. I could have skipped them but added them anyways. The footer just containing a list of anchor-links to my linkedIn and github.

### Changing the component, SPA(Single page application):

To fit the criteria of keeping it as a SPA I decided to simply make a header, footer and have three components for the middle that will change depending on which stage the user is on.

<img src="https://github.com/user-attachments/assets/a11e59c3-b0de-4d31-8534-d2e6571e37d8" alt="Image showing the structure in the main.jsx file" style="width:40%; height:auto;">  </img>

Then when it came to actually changing component I used useStates to shift between the different stages of the game.

<img src="https://github.com/user-attachments/assets/84930373-f028-46d6-acf2-713f2a84388c" alt="Image of the structure of the app.jsx file." style="width:40%; height:auto;">  </img>

So in the example above we have an initial state for startQuiz set as false which will lead us to the lower div with the className "card". 

When the user clicks the button the state changes to true using a pointer function which moves the user to the first div where QuizGame exists and the center component of the site changes.

### JSON-File:

The file with the questions are kept in a simple json-structure.

<img src="https://github.com/user-attachments/assets/5bb066f2-99b0-493e-bf1f-d7a166e93676" alt="Image showing the structure of the json-file." style="width:40%; height:auto;">  </img>

### Fetching the questions:

<img src="https://github.com/user-attachments/assets/2668d117-1ef7-4a2f-a6a7-b96e63f2f545" alt="Image showing the GetData function which fetches the json data" style="width:40%; height:auto;">  </img>

So, first I declare a constant with the filepath to the json-file in the public folder. Then I have a simple async function called GetData which is fetching the json-data, from the filepath, within a try catch. It is made async to be able to use await so that the loading of the rest of the program isn't slowed down from the fetching.

If it encounters any problems, like the file not existing or some other error, it throws an error that will be caught by the catch which will console log the error and then send back an empty array. 

If the data is fetched successfully it will then be parsed and returned.

<img src="https://github.com/user-attachments/assets/5d5dba82-b306-4cf9-8293-7eaac4b467e1" alt="Image showing of the useEffect that sends for the json data" style="width:40%; height:auto;">  </img>

Then in the quiz file itself I have the useEffect which will fetch the data from the GetData function, when the component mounts, and update the setData with the data that is returned. Again, using async await for the same reasons as above.

Im using a empty dependency array in the end of it to make sure it only runs once. 


#### Pausing while fetching:

<img src="https://github.com/user-attachments/assets/f8fb2c79-2f10-4b50-ad32-b700e3c273a6" alt="" style="width:40%; height:auto;">  </img>

While the fetch is happening, the website will show this message. It only takes a second or so. 

### QuizGame:
#### Setting up:

<img src="https://github.com/user-attachments/assets/9d265735-c30e-44c0-bcb5-f7f47dfec5d9" alt="Image showing the start of the quiz, where a bunch of states are being set." style="width:40%; height:auto;">  </img>

The above image is showing the start of the QuizGame component. 

Here I am setting the data to an empty array, setting showResultScreen as false just like the startQuiz before. 

I have two constants, correct and wrong, for the score keeping. Setting an indexId which will be used later to iterate through the array of the json-data to bring in a question at a time. 

The box-shadow for the card is being set to the blue version which will be changed later on depending on the result of the choice of the user.

Then using the indexId from earlier to load the first question into the question constant. 


--More coming--

<img src="https://github.com/user-attachments/assets/953a15f8-6075-4efc-98d7-af58057444f4" alt="Image showing the function which checks if the user picked the correct answer" style="width:40%; height:auto;">  </img>
<img src="https://github.com/user-attachments/assets/94b2c725-cee5-4f5e-8cca-98fc622dd3d4" alt="Image showing the html of the quiz" style="width:40%; height:auto;">  </img>



<img src="https://github.com/user-attachments/assets/9cbed79b-8a56-42a9-b1cb-ceb19f32e7e5" alt="Image showing when the quiz sends data to the result screen" style="width:40%; height:auto;">  </img>

When the quiz is over and the question index has gotten to the set number above, the user, along with the wrong and correct constants, get sent over to the result screen component.


### Resultscreen:

<img src="https://github.com/user-attachments/assets/6eaf2d7a-05ec-481e-981c-22db777647a4" alt="" style="width:40%; height:auto;">  </img>

Above you see the start of the resultscreen component. I import the quizgame and set it as false to be able to later on send the user back to the quiz if they choose. I import useEffect and useState to be used and the styling from the CSS file that is in the stylings folder. 

After that it shows that the ResultScreen wants the wrong and correct constants from the quiz which we will use below to check the result of the game and generate a message depending in the useEffect. 

And, again, the box-shadow except here it is set as an empty string as it will be set in the useEffect depending on which one of the correct/wrong has the most points.



<img src="https://github.com/user-attachments/assets/faa000de-900a-435d-8b83-7442026701e1" alt="" style="width:40%; height:auto;">  </img>

Above you can see the structure of the components HTML part. Depending on which result the quiz sends to the result screen, the message will change. Then the user has the option to restart the quiz if they click on the button, which same as in the first component has a pointer function which changes the useState of the startQuiz to true. 


## Styling:

Decided, after trying to generate an image for the header and only getting these fucking neon signs, to go with a neon theme for my styling. 

I put the image into the colorpicker and used mycolor to combine some colors to get a linear-gradient that made the image fit into the header.

<img src="https://github.com/user-attachments/assets/a4db268f-426d-480e-9f80-b2da9b2dc3a7" alt="Quiz header image" style="width:40%; height:auto;">  </img>

<img src="https://github.com/user-attachments/assets/115d707b-08b1-4676-9030-151e90c11b56" alt="Color picker quiz image" style="width:40%; height:auto;">  </img>

I added a blue glow for the background of the questions-card and then used that same glow to indicate a correct or wrong answer from the user by changing the color when the user picks.

<img src="https://github.com/user-attachments/assets/7af5ec1e-714a-46f3-bd39-a623233eb2f0" alt="Blue glow" style="width:40%; height:auto;">  </img>

<img src="https://github.com/user-attachments/assets/3c13232a-2fac-41e8-8a68-570ec340d654" alt="Red glow" style="width:40%; height:auto;">  </img>


# If I ever make it again:

If I remake this project, then I would probably make separate json-files for questions. Add maybe five, or more, questions to each and then pull a number at random to add to the end of the filepath in the fetching file to get a random list of questions for the user. 

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
