import { React, useState, useEffect } from 'react';

function HomePage() {
  return (<>
  <h2>About Me:</h2>
  <article>
  <h3>Career Goal</h3>
    <p>My career goal is to become a proficient full-stack web developer. CS 290 has served as my initial introduction to both front-end and back-end web development. I plan to first deepen my understanding of frontend technologies, like HTML/CSS and React, and then advance my skills in back-end technologies. Ultimately, I want to put two and two together to create complex full-stack web applications.</p>
    <p>
      <dl>
      <strong><dt>HTML + CSS</dt></strong>
        <dd>This website was created with HTML and CSS. I used a variety of HTML elements to provide structure and content to the website. The presentation of the HTML elements is styled with CSS, such as the blue-green color scheme and decorative borders. </dd>
      <strong><dt>DOM + JavaScript</dt></strong>
        <dd>This representation of this website’s HTML structure is referred to as the DOM, or its Document Object Model. The elements of my webpage, such as the headings and sections, are represented as “nodes” in the DOM, and can be modified using JavaScript.</dd>
      <strong><dt>Node.js + Express.js + REST</dt></strong>
        <dd>This website was built using Node.js and Express.js, and according to REST principles. Therefore, it is stateless and uses standard HTTP methods to perform tasks. Node.js is a runtime environment for developing server-side applications. Express.js, built specifically for Node.js, is a web application framework that provides APIs for tasks that web applications often need to complete. For example, Express provides a routing API that allowed me to define routes for handling HTTP requests. The code for this website is asynchronous, so execution of code can happen concurrently.</dd>
      <strong><dt>MongoDB + Mongoose</dt></strong>
        <dd>This website stores its data in MongoDB, a document-oriented database management system, and uses Mongoose, a JavaScript library, to easily interact with MongoDB and perform CRUD operations. </dd>
      <strong><dt>SPA + React</dt></strong>
        <dd>The website is a SPA (Single Page Application) because all of its HTML, CSS, and JS is sent to the browser once. The React front-end framework manipulates the DOM so it seems as if a new page is being loaded. I constructed pages using components, which React maps to a DOM tree. My code alters React state variables, prompting React to re-render only the modified parts of the DOM tree.</dd>
      </dl>
    </p>
  </article>
  </>);
}

export default HomePage;