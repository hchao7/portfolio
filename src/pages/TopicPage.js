import { React, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 

function TopicPage() {
  return (<>
        <h2>Web Dev Concepts</h2>
        <nav class="local">
          <a href="#servers">Web Servers</a>
          <a href="#frontEndDesign">Frontend Design</a>
          <a href="#images">Optimizing Images</a>
          <a href="#favicons">Favicons</a>
        </nav>
        <p>Here is an overview of various concepts I learned about in OSU's Web Development class and applied to this website.</p>
        <article id="servers">
          <h3>Web Servers</h3>
          {/* Explain the concept of a designated home page and how its name relates to different servers and languages. */}
          <p>The <strong>designated home page</strong> is the default file that
            is
            returned by the server when a GET request is received for /.
            The / represents the <strong>root directory</strong> of the website,
            and
            <strong>index.html</strong> is typically the name of the default
            file.
            However, the file name can differ based on the server or language.
            OSU
            Engineering’s server returns index.html,
            but Microsoft’s .NET platform can return default.html. If the web
            application is built using the JavaScript language,
            a web server might be configured to return index.js.
          </p>
          {/* Explain what can be seen in the browser's Web Dev/Inspector Network tab output screen (use the concepts provided in the Exploration). What is different about the file's details when viewed from the web server versus the local computer? */}
          <p>On the local computer, the file name is index.html, and on the web
            server, the name is a1-chaohe/.
            However, / indicates that the server is returning the designated
            home
            page, which is still index.html.
            Under <strong>General</strong>, the server includes the <strong>key-value
              pair</strong> for Remote Address, and the computer does not.
            For the <strong>Response Headers</strong>, the server includes 9
            more
            key-value pairs than the computer.
            One example is Server, which describes the machine processing the
            request.
            For the <strong>Request Headers</strong>, the server includes 15
            more
            key-value pairs than the computer.
            One example is User-Agent, which describes the machine making the
            request.</p>
          {/* Explain why the favicon.ico file has a status 200, but the main.css and main.js files have a status 404. */}
          <p><strong>Status codes</strong> indicate the result of an <strong>HTTP
              request</strong>.
            The favicon.ico file has status 200 because the request for this
            resource
            succeeded.
            The server is returning favicon.ico to the client.
            The main.css and main.js files have status 404 because these
            resources
            are
            not found
            on the server. Their requests are invalid, and the server cannot
            complete
            them.
            The <strong>Request URL</strong> for main.css indicates that the
            server
            should be looking for main.css
            inside the a1-chaohe directory, but no such file exists. This same
            reasoning applies to
            the main.js file.</p>
          {/* Explain the parts of your web server's URL. What are the scheme, the subdomains, the host domain, and the resources? */}
          <p>My web server’s URL is
            https://web.engr.oregonstate.edu/~chaohe/a1-chaohe/.
            The <strong>scheme</strong> is <strong>HTTPS</strong>, an encrypted
            protocol that describes how requests are sent
            from the client to the server, which sends a response back to the
            client.
            The <strong>subdomains</strong> include web and engr, which are
            subsections of the host domain.
            The <strong>host domain</strong> is oregonstate.edu, which is the
            name
            of
            the machine where the
            request is sent and where the resource resides. The <strong>path</strong>
            to the requested <strong>resource</strong>
            is /~chaohe/a1-chaohe/. The server will return the resource
            index.html,
            which is
            inside the a1-chaohe directory.</p>
        </article>
        <article id="frontEndDesign">
          <h3>Frontend Design</h3>
          <p>
            {/* The concept of frontend design */}
            <strong>Frontend design</strong> focuses on creating a seamless and
            aesthetic user
            experience through the <strong>visual design</strong> of the page
            and
            the <strong>graphical
              user-interface (GUI)</strong>. Visual design considers factors
            like
            color and
            font schemes and navigation systems. The GUI is a way of visually
            interacting with the page, through graphics like icons and buttons.
            A
            key component to frontend design is <strong>usability</strong>,
            which
            is an evaluation
            of the user’s experience with the website.
          </p>
          {/* The five of "E"s of usability */}
          Websites should meet the <strong>five “E”s of usability</strong>.
          <dl>
            <dt>Effective</dt>
            <dd>Users can easily achieve their goal. If users cannot easily
              achieve their goal, they may look for another product to use. If
              there are no alternatives available, this will lead to frustration
              and a loss in productivity.</dd>
            <dt>Efficient</dt>
            <dd>Users can quickly achieve their goal in the minimum number of
              steps. This can be achieved by limiting the use of or shift
              between <strong>input devices</strong>.</dd>
            <dt>Easy to navigate</dt>
            <dd>First-time users can smoothly navigate the page through clicks
              or searches to complete their task, and easily repeat the process.
              For example, <strong>breadcrumb navigation</strong> should be used
              if a user has
              to travel through five or more levels of content to reach their
              goal.</dd>
            <dt>Error-free</dt>
            <dd>Users do not encounter obstacles (accessibility and
              availability issues) when trying to achieve their goal. For
              example, if the response to a user action takes more than 10
              seconds, a progress bar should be shown the percent complete, so
              the user is reassured that the delay is productive, rather than an
              error.</dd>
            <dt>Engaging</dt>
            <dd>Users will return to the website due to their enjoyable user
              experience, as determined by the previous four “E”s. User
              experience can be refined through <strong>usability testing</strong>,
              which
              identifies common problems that users struggle with while
              navigating the web app. </dd>
          </dl>
          <p>
            {/* The purpose of each of the page layout tags */}
            There are several important <strong>page layout tags</strong>. The
            <strong>header</strong> element is
            the banner for the site, stays consistent for all pages, and
            includes
            general information like a company name. The <strong>nav</strong>
            element represents a
            portion of a page that has navigation links to other pages. The
            <strong>main</strong>
            element is the main content block and represents the central topic
            of
            the page. A <strong>section</strong> element represents a group of
            related content that
            is not significant enough to be on its own. An <strong>article</strong>
            element is
            included in a section element and represents one topic. The <strong>footer</strong>
            element is placed below &lt;/main&gt; and contains
            legal and contact information.
          </p>
          {/* How anchors link to external content, internal content, and from page-page */}
          <ol>
            <li>An <strong>anchor</strong> element acts as an <strong>external
                anchor</strong> by creating a
              hyperlink to external content. Its <strong>href</strong> attribute
              is set to the
              external website’s URL. Typically, an <strong>absolute path</strong>
              is used for
              linking to external resources like a news article or map. It is a
              complete URL because it consists of the scheme, subdomains,
              domain, etc.</li>
            <li>An anchor element can act as an <strong>internal anchor</strong>
              and link to
              internal content, or from one text item to another on the same
              page.
              The linked-to item has an <strong>ID attribute</strong>, and the
              href of the anchor
              is set to the same attribute value, prepended by a #. A <strong>relative
                path</strong> is used for linking to website’s internal
              resources, in a way
              that is relative to the current location. </li>
            <li>Anchor elements styled as buttons can be used to navigate from
              <strong>page-to-page</strong>. Their href attribute is set to the
              relative path of
              the linked page.</li>
          </ol>
        </article>
        <article id="images">
          <h3>Optimizing Images</h3>
          {/* Name and explain the purpose of the 6 major image optimizing specifications. */}
          <p>There are 6 major image optimizing specifications. Image
            compression can be used to <strong>minimize file size</strong> without severely
            degrading image quality. Different <strong>file formats</strong> will use different
            compression algorithms and <strong>color modes</strong>. For example, the JPG file
            format is best suited for colorful photographs, and it uses the RGB
            color mode. Additionally, images should be resized to <strong>exact
            dimensions</strong> so they are the exact size needed for the web page. If
            the image is too large, the browser needs to scale it down, which
            leads to extra processing time. Monitors and screens also display
            certain resolutions best. For example, devices with high-resolution
            screens should display higher resolution images. A low-resolution
            device can use a <strong>reduced resolution</strong> image, rather than take the time
            to load a high-resolution image. Generally, images with a small file
            size, exact dimensions, and an appropriate resolution will save on
            load time and usage of server space. Images should also allow for
            SEO optimization by having <strong>descriptive file names</strong> that describe the
            subject, location, and time.</p>
          {/* Name and explain the file formats appropriate for photos and for line art? */}
          <p>The file formats appropriate for photos include <strong>JPG and WebP</strong>.
            Photos usually have large file sizes due to their greater level of
            detail, variety of colors, and high-resolution. JPG and WebP can
            compress these photos to a small file size and still maintain
            acceptable image quality. <strong>GIF, PNG, and SVG</strong> are appropriate for line
            art. GIFs have 8-bit <strong>transparency</strong>, are suitable for animations, and
            their edges are anti-aliased for a smoother appearance. Unlike GIFs,
            PNGs have true transparency, and are also suitable for biomorphic
            shapes (like curves and flowing lines) and solid colors. Finally,
            SVGs are special because they are defined by mathematical
            descriptions, and therefore <strong>resolution-independent</strong>. They can also be
            used for interactive or animated images.</p>
        </article>
        <article id="favicons">
          <h3>Favicons</h3>
          {/* How do browsers and devices use favicons? */}
          <p>Browsers and devices use favicons to recognize a website or app.
            For example, the small symbol in the left corner of the browser tab,
            or the symbol you tap on to access an app on your phone are both
            favicons. Typically, this symbol is an image, and it has its
            resolution, dimensions, file size, and file format modified to
            display appropriately on different browsers and devices. Popular
            file formats for favicons include <strong>ICO</strong>, SVG, and PNG.</p>
        </article>
     </>
      );
}
export default TopicPage;