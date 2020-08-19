# ![GA Logo](./media/GALogo.png)
# Project 2 - /TITLED

By [Raquel Cruickshank](https://github.com/cruickshankrpc) and [Kianna Love](https://github.com/akirakianna)

## Overview 
This was my first experience of a Hackathon and boy did I love it. Making split decisions to build under pressure and complete a final product in **48 hours** was a thrill, and I am proud of the final result.\
This was a pair-programmed project and I thoroughly enjoyed bouncing ideas off my partner who has a similar aesthetic sensibility.\
During Project 1, in the wake of the murder of George Floyd, agonising over the logic to make aliens move on a grid felt trivial to say the least.\
So, for this project, Kianna and I decided to address the underrepresentation of Black, Asian and minority ethnic groups by shining a light on POC artists and other works that explore their lived experience.

![HOMEPAGE](./media/TITLED_HOMEPAGE%20%20(1).gif)
![SPOTLIGHT](./media/SPOTLIGHT%20(1).gif)


Please visit [here](https://cruickshankrpc.github.io/GA-Project-2-TITLED/).


## Contents
  - [Overview](#overview)
  - [Contents](#contents)
  - [Brief](#brief)
  - [Technologies Used](#technologies-used)
  - [BUILD](#build)
      - [First Hurdle](#first-hurdle)
      - [Solution](#solution)
  - [Challenges](#challenges)
  - [Wins](#wins)

## Brief
Build a React application that: 
- Consumes a public API.
- Has several components.
- Includes a router with several 'pages'
- Includes wireframes - designed before building the app.
- Have semantically clean HTML.
- Be deployed online

## Technologies Used 
- HTML5
- SCSS
- React
- Insomnia
- Artsy API
- Axios
- Scroll Magic
- Bulma 

![ABOUT](./media/TITLED_ABOUT.gif)

## BUILD

We settled on the Artsy API due to their huge range of artworks that they not only display, but also sell. 
We attained a Client ID & Secret in order to generate a token and test out different endpoints in Insomnia. 
Kianna cleverly found the Genome Project - Artsy's own thematic curation of artworks. This way, we could retrieve artist information via the gene ID of the project.

**Endpoint for 'Racial & Ethnic Identity' Gene:**
![INSOMNIA](./media/RACIAL.png)

**Endpoint from that Gene ID:**
![INSOMNIA](./media/GENEID.png)

Our plan was as follows: 
1. Research public APIs
2. Select and test endpoints in Insomnia 
3. Plan MVP
4. Build
5. Style
6. Fix bugs, stretch goals 
7. Refactor code

#### First Hurdle
Alas, disaster struck at the first hurdle.\
The Artsy API proved to be a nightmare to retrieve information from - none of the exhibitions we liked on their website had endpoints and, once we found the 'Genome Project', the endpoint only returned ONE artwork for each of only FIVE artists, which would hardly populate the page with the gallery of artworks we envisioned.

#### Solution
We discovered we could access the nested endpoint 'similar artists' to retrieve another five artists with one artwork each:

![SIMILARARTISTS](./media/SIMILARARTISTS.png)

Now, we could plan our MVP and wireframe:
![WIREFRAME](./media/TITLED:WIREFRAME.png)

We didn't start writing code until DAY 2, and so the pressure was on to build AND style in a short space of time.

![MIGRATION](./media/PAGE.gif)


## Challenges
- Retrieving nested information from the API.
- Realising our token expired every 7 days (We wrote a refresh token function post-course).

## Wins
- Built a full application in 48 hours! 
```javascript
  const App = () => {

  return <HashRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <ApiProvider>
        <Route exact path="/randei" component={RandEI} />
        <Route exact path="/migration" component={MigrationArtists} />
        <Route exact path="/sg" component={SouthernGothic} />
      </ApiProvider>
    </Switch>
  </HashRouter>
}
```
- 💁🏻‍♀️💁🏻‍♀️ Pair-programming. It was really fun to bounce ideas off a partner. We problem solved and dealt with challenges together, but also split off to work on separate components. 
- STYLING
- Using React Scroll-Magic
- Building a Carousel 





