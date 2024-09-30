import { React, useState, useEffect } from 'react';

function OtherProjectsPage() {
  return (<>
  <div class="project">
      <iframe class="project__video" width="560" height="315"
        src="https://www.youtube.com/embed/IRAuxP0G9sI?si=MVF3by972OVBSIGc"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div class="project__text">
        <h2 class="project__heading"><span class="emphasis">ChessVar Project:</span> Implemented a chess game for console-based play</h2>
        <div class="project__component">
          <h3 class="project__subheading">Background</h3>
          <ul class="project__description">
            <li>Highlights expertise in Python, object-oriented
              design, and game development</li>
            <li>Applied <span class="emphasis--black">problem-solving skills </span>
            to manage game state, track player turns, piece positions, and movement rules</li>
            <li>Utilized Python's <span class="emphasis--black">unittest framework to rigorously test </span>
            functions and gameplay mechanics for an error-free experience</li>
            <li>Implementation includes <span class="emphasis--black">special ‘fairy’ chess 
            pieces </span> like the hunter and falcon, which are kept in reserve until the game reaches a certain state</li>
          </ul>
        </div>
        <div class="project__component">
          <h3 class="project__subheading">Video</h3>
          <ul class="project__description">
            <li><span class="emphasis--black">0:00 - 1:10 | </span>
              Play-by-play of a chess game</li>
            <li><span class="emphasis--black">1:10 - END  | </span>
            'Fairy' chess pieces from the reserve are placed on the board</li>
          </ul>
        </div>
        <div class="project__links">
          <a href="https://github.com/hchao7/chess-game"
            target="_blank" class="project__button">Git Repo</a>
          <a href="https://github.com/hchao7/chess-game/blob/main/README.md"
          target="_blank" class="project__button">For More Info: README</a>
        </div>
      </div>
    </div>
  </>);
}

export default OtherProjectsPage;