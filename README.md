# TMG Podcast

Website URL: https://tmg-podcasts.netlify.app/

# Project Overview
In this project I worked on building a dynamic podcast app using React. In this project I am showcasing my ability to create a complex, interactive application. In the project I domenstrate my understanding of project requirement by following user stories and utilizing the provided API for my data.

In this project I managed and manipulated several interconnected data entities such as the following: 
* Show - Which represents an entire podcast series , which can consist of multiple seasons.
* Season - Which is a collection of podcast episodes released within a specific timeframe.
* Episode - Which is a infividual podcast episodes , each corresponding to an MP3 file for audio.
* Preview - Which is a summarized version of a show containing a basic informatin section and used primarily for displaying lists.
* Genre - which is categories assigned to shows, which help users find content based on their interests.

# Tech Stack
* HTML
* CSS
* JavaScript
* React.js

# Libraries
* React Router
* React Icons
* Material-UI

# Content
* Home
* Show Details
* Favourites
* Episode Player


# Usage
This web application provides a platform to browse and listen to a variety of podcast show. This podcast shows have different seasons and each seasons contains episodes.

- The home page displays a list of all available podcasts sorted alphabetically from A to Z.
- The home page contains sort button which can be utilized to sort from Z to A, on recently uploaded and oldest uploaded.
- When clicking a show you get directed to show details which will contain the show details and a dropdown to select a season which when click will display all episodes of the specific seaason.
- When an episode is selected an audio player will appear and only disappear if a new season is selected.
- We can also add episode to favorites by clicking the heart icon.

# Contact information
* Email - tumelomogono@gmail.com
* LinkedIn - https://www.linkedin.com/in/tumelo-mogono/
* FaceBook - https://web.facebook.com/tumelo.mogono/?_rdc=1&_rdr
* Whatsapp - +27785787760
# Area of mastery

# Project Process
* After installing react, react router and react icon using npm, I then removed the boilerplate code.
* I then firstly worked on my header and sidebar components which for each I created seperate css files. I imported the correct components in my app.jsx file which I then added my sidebar and header inside different div elements but both were nested within a parent element which will be my main layout as I will not have pages but components instead.
* I then created my showlist component and my genremapping JavaScript file which will be used to associate my genre numbers from my api data to that of the object key's from genremapping file.
* My showList file is then imported in my app.jsx file to create a route to that component which will go to my main-content div element for my web application.
* I then created a showdetails component which I will use to get the specific details of a podcast show, which will display a podcast show's title, image, description and seasons.
* When a season is selected the episode will appear which each episode will have a play icon and a add to favorite icon.
* I then added an episode player component which will be used to render the audio player with its supporting contents. This episode player component is imported in my showdetails so that when an episode player icon is selected the episode player appears and plays the episode mp3 file from the api data.
* I then created a favorite component which will be used for when an episode is selected in showdetails to add the episode in favorites and when the favorites selected in the sidebar is clicked the favorites component will be rendered using the route from the app.jsx which I imported the favorite and added a path to it.
* I then created a component to handle sorting from A-Z, Z-A , least updated and oldest updated which is utilized in the showlist component.
* I then utilized material ui to handle my loading bar in my showlist and showdetails, I think I should have used it in my favorites too.
* I also generated favicons and implemented their links in my html.
* I also ensured every component has it's own css files and some media qeuries were applied.
* I also went on to restyle my showlist shows containers and elements inside them.

# Challenges
I didn't have many challenges aside from the time allocation for the project. I just noticed after submitting that my mobile view is not styled properly as my side bar is not at the bottom and allow the other content to appear. Secondly I didn't fetch my episode file properly in my favorite component so that favorite episode could play which I noticed after the submission deadline at 5pm, thus I can put it down as a challenge which I couldn't complete on time. The other challenge I had was the other user story for megatags as I couldn't fully understand the requirements.

# Feedback
This was a great project, very diverse in creative and technical prowess. I fully enjoyed it, it's just unfortunate that I couldn't fully complete the work as I had expected due to the deadline and some bugs are visible as I didn't want to commit as soon as 5pm hit due to the penalization for late submission.
