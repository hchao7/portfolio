import { React, useState, useEffect } from 'react';

function FrontEndProjectsPage() {
  return (<>
  <div class="project">
      <iframe src="https://hchao7.github.io/recipe-page-main/"
        class="project__visual"></iframe>
      <div class="project__text">
        <h2 class="project__heading"><span class="emphasis">FrontEnd Mentor Design Challenges:</span> Hands-on experience with HTML, CSS, and Figma</h2>
        <div class="project__component">
          <h3 class="project__subheading">Background</h3>
          <ul class="project__description">
            <li>Practiced HTML and CSS skills by <span class="emphasis--black">completing four design challenges</span> on the FrontEnd Mentor platform</li>
            <li>Implemented designs based on Figma files and style guides, simulating a <span class="emphasis--black">professional workflow</span></li>
            <li>Wrote <span class="emphasis--black">clean and maintainable CSS</span> using BEM methodology</li>
          </ul>
          </div>
          <div class="project__links">
            <a href="https://github.com/hchao7/recipe-page-main"
              class="project__button" target="_blank">Git Repo</a>
            <a href="https://www.frontendmentor.io/solutions/responsive-recipe-page-using-flex-bem-Zo5V-RAmJC"
              class="project__button" target="_blank">Published Challenge</a>
            <a href="https://www.frontendmentor.io/profile/hchao7/solutions"
              class="project__button" target="_blank">Other Challenges</a>
          </div>
      </div>
    </div>
    <div class="project">
    <img src={`${process.env.PUBLIC_URL}/prev-website.png`} alt="Description of the image"
        class="project__img"/>
      <div class="project__text">
        <h2 class="project__heading"><span class="emphasis">Portfolio Website:</span> Developed using React and design skills learned from FEM</h2>
        <div class="project__component">
          <h3 class="project__subheading">Background</h3>
          <ul class="project__description">
            <li>This website was revamped from my final project for a web dev class, pictured on the left</li>
            <li>Replaced original stylesheet with <span class="emphasis--black">my own BEM-structured design</span></li>
            <li>Made website <span class="emphasis--black">fully responsive</span> to mobile and desktop sizes</li>
            <li>Used HTML, CSS, and JavaScript to create design elements and <span class="emphasis--black">Git</span> for version control to <span class="emphasis--black">track changes effectively</span></li>
          </ul>
        </div>
        <div class="project__links">
          <a href="https://github.com/hchao7/portfolio" target="_blank"
            class="project__button">Git Repo</a>
        </div>
      </div>
    </div>
  </>);
}

export default FrontEndProjectsPage;