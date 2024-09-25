import { React, useState, useEffect } from 'react';

function FrontEndProjectsPage() {
  return (<>
  <div class="project">
      <iframe src="https://hchao7.github.io/recipe-page-main/"
        class="project__visual"></iframe>
      <div class="project__text">
        <h2 class="project__heading">Hands-on experience with <span class="emphasis">HTML, CSS, and
          Figma</span> through FrontEnd Mentor (FEM) community</h2>
        <div class="project__component">
          <h3 class="project__subheading">Background</h3>
          <ul class="project__description">
            <li>FEM provides professional design challenges</li>
            <li>Practiced implementing designs by working from provided Figma
              files and style guide, mimicking an industry-standard workflow</li>
            <li>Wrote clean CSS using the BEM Methodology </li>
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
        <h2 class="project__heading"><span class="emphasis">Revamped</span> my
          school project into <span
            class="emphasis">the website you're on</span>, using <span
            class="emphasis">React</span> and design skills learned from
          FEM</h2>
        <div class="project__component">
          <h3 class="project__subheading">Background</h3>
          <ul class="project__description">
            <li><span class="emphasis--black">Custom Styling:</span> Replaced
              the school-provided styling template with my own design and used
              BEM methodology for better organization
              and maintainability</li>
            <li><span class="emphasis--black">Responsive Design:</span> Made
              website fully responsive to mobile and desktop sizes</li>
            <li><span class="emphasis--black">Enhanced React Knowledge:</span> Successfully implemented all changes while working with the React framework 
            that was used to build the original website (pictured for reference)</li>
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