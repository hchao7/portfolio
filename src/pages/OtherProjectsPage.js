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
        <span class="emphasis"></span>
        <h2 class="project__heading">ChessVar project: An implementation of a
          <span class="emphasis"> chess
            game</span> variant for <span class="emphasis">console-based</span> play</h2>
        <div class="project__component">
          <h3 class="project__subheading">Background</h3>
          <ul class="project__description">
            <li>Highlights expertise in Python, object-oriented
              design, and game development</li>
            <li><span class="emphasis--black">Variant-Specific Rules: </span>
              Encodes unique rules and piece movements specific to the chess
              variant</li>
            <li><span class="emphasis--black">Console-Based Interaction: </span>
              Facilitates gameplay through a
              text-based interface, allowing players to make moves, view game
              status, and interact with the board using the console</li>
            <li><span class="emphasis--black">Game State Management: </span>
              Manages game state effectively, including piece positions,
              turn tracking, and detection of winning scenarios</li>
          </ul>
        </div>
        <div class="project__component">
          <h3 class="project__subheading">Video</h3>
          <ul class="project__description">
            <li><span class="emphasis--black">0:00 - 1:10 | </span>
              Play-by-play of a chess game</li>
            <li><span class="emphasis--black">1:10 - END  | </span>
              Special 'fairy' chess pieces from the reserve placed on board</li>
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