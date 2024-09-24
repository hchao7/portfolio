import { React, useState, useEffect } from 'react';

function LeadershipPage() {
  return (<>
  <div class="project">
      <img src={`${process.env.PUBLIC_URL}/datathon_promo.jpg`} alt="Description of the image"
        class="project__img"/>
      <div class="project__text">
        <span class="emphasis"></span>
        <h2 class="project__heading">Led execution of <span class="emphasis">UC
            x Imagine</span>, a two-day <span class="emphasis">datathon </span>
          with coding workshops and guest panels</h2>
        <div class="project__component">
          <h3 class="project__subheading">Background</h3>
          <ul class="project__description">
            <li>Fundraise $465 for education nonprofit Imagine Scholar by
              engaging 56 attendees from 8 UC schools</li>
            <li><span class="emphasis--black">Collaborate:</span> Work with
              Berkeley Data Science Society, engineering grad
              students, and UCLA staff to create the datathon prompt on load
              shedding and design a comprehensive coding curriculum for 6
              workshops</li>
            <li><span class="emphasis--black">Outreach:</span> Reached out to
              and secured 12 data scientists to share their
              experiences across five diverse panels, covering various
              industries, early career insights, and real-world case studies in
              data science
            </li>
          </ul>
        </div>
        <div class="project__links">
          <a
            href="https://www.facebook.com/events/1982477842058924/?active_tab=discussion"
            target="_blank" class="project__button">Facebook Event</a>
          <a href={`${process.env.PUBLIC_URL}/Datathon Schedule of Events.pdf`}
            target="_blank" class="project__button">Full Schedule</a>
        </div>
      </div>
    </div>
  </>);
}

export default LeadershipPage;