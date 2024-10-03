import { React, useState, useEffect } from 'react';

function HomePage() {
  return (<>
  <div class="center">
      <div class="profile">
        <img class="profile__image" src={`${process.env.PUBLIC_URL}/temp-pic.png`} alt="Woman looking out window"/>
        <div class="profile__component">
          <h2 class="profile__heading">Hi, I'm Helen!</h2>
          <p class="profile__description">I’m a Computer Science major at Oregon State University, and I'm currently <span class="emphasis--black">seeking summer internships for 2025</span>. 
          This is my second bachelor’s degree; I previously graduated from UCLA with a BS in Cognitive Science.
          Feel free to check out the projects I've completed so far! If you'd like to connect, you can find me on <a
            href="https://www.linkedin.com/in/helen-chao-01/"
            target="_blank" class="emphasis--black">LinkedIn</a> or reach out via email, at <span class="emphasis--black">chaohe@oregonstate.edu</span>.</p>
        </div>
      </div>
    </div>
  </>);
}

export default HomePage;