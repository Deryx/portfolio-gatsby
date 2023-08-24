import * as React from "react";
import LeftNavigation from "../components/leftNavigation/leftNavigation";

// import Layout from "../components/layout"
// import Seo from "../components/seo"
import "./styles.scss";

const IndexPage = () => (
  <div className="container">
    <LeftNavigation />
    <section id="intro">
      <h1></h1>
    </section>

    <section id="about">
      <h1>about</h1>
      <div className="content">
        <p className="about">My name is pronounced like "Derricks", not "Dexter", as pronounced by a 3rd grade substitute teacher who came across my name while calling attendance (still shaking my head about that one!). Anyway, I am a Software Engineer III for JP Morgan Chase, working on a team that serves as the bank's Material UI for web teams.</p>
        <p className="about">While attending high school, I became enamored with computers when I came across the Commodore 64 my senior year (I know! I'm dating myself!). I immediately joined the school's computer club to find that I had no idea about computers or programming! During my sophomore year at Stanford University, I again tried my hand at computer programming during the fall semester while also walking on the baseball team. Bad idea! While I didn't fail, I barely passed! Undaunted, I took the course again the following falls. I passed this time, instituting solutions others in the class did not implement, garnering a modicum of praise from class teaching assistants. I went on to take, and pass, other computer courses but did not major in computer science because it would have added time to get my degree.</p>
        <p className="about">For quite a few years after college, while I didn't do any programming, I did learn a lot about computers - learning about relational databases; doing some batch programming in MS_DOS; building PCs; and becoming a MS Word and Excel expert. It wasn't until the late nineties with the explosion in popularity of the Internet did I return to programming. In 1999, a group of friends and I decided we wanted to create an online culture-based magazine. While the project never got off the ground, I did teach myself how web pages were created using HTML and pushed to a server using the File Transfer Protocol (FTP). I used my new found to create an interactive personal training site using HTML and Perl in less than a month. You can still see vestiges of it on the <a href='https://web.archive.org/web/20010401185236/http://des-healthsmith.com/' target="_blank">Wayback Machine</a>. From there, I created a financial aid estimator program in HTML and classic ASP just to see if I could do it (I was an Associate Financial Aid Director at the time). This led me to become The College of New Rochelle's sole Web Developer, creating their first web presence in 2000.</p>
      </div>
    </section>

    <section id="skills">
      <h1>skills</h1>
      <div className="content">
        <section>
          <h3>front end</h3>
          <div className="tech-container">
            <div className="pill">JavaScript</div>
            <div className="pill">TypeScript</div>
            <div className="pill">React</div>
            <div className="pill">Next.js</div>
            <div className="pill">Gatsby</div>
            <div className="pill">Angular 1.x</div>
            <div className="pill">Angular 2+</div>
            <div className="pill">HTML</div>
            <div className="pill">CSS</div>
            <div className="pill">Less</div>
            <div className="pill">Sass</div>
            <div className="pill">Bootstrap</div>
          </div>
        </section>
        <section>
          <h3>back end</h3>
          <div className="tech-container">
            <div className="pill">ASP.NET(4.x)</div>
            <div className="pill">C#</div>
            <div className="pill">SQL</div>
            <div className="pill">Java</div>
            <div className="pill">Python</div>
            <div className="pill">GraphQL</div>
            <div className="pill">Prisma</div>
          </div>
        </section>
        <section>
          <h3>databases</h3>
          <div className="tech-container">
            <div className="pill">SQL Server</div>
            <div className="pill">Access</div>
            <div className="pill">MySQL</div>
            <div className="pill">SQLite3</div>
            <div className="pill">MongoDB</div>
            <div className="pill">Raiser's Edge</div>
          </div>
        </section>
        <section>
          <h3>other tech</h3>
          <div className="tech-container">
            <div className="pill">Git</div>
            <div className="pill">GitHub</div>
            <div className="pill">Storybook</div>
            <div className="pill">Visual Studio</div>
            <div className="pill">Visual Studio Code</div>
            <div className="pill">WebStorm</div>
            <div className="pill">Atom</div>
            <div className="pill">Eclipse</div>
            <div className="pill">Dreamweaver</div>
            <div className="pill">Photoshop</div>
            <div className="pill">Android Studio</div>
            <div className="pill">Karma</div>
            <div className="pill">Jest</div>
          </div>
        </section>
      </div>
    </section>

    <section id="experience">
      <h1>experience</h1>
      <div className="content">
      </div>
    </section>

    <section id="projects">
      <h1>projects</h1>
      <div className="content"></div>
    </section>

    <section id="contact">
      <h1>contact</h1>
      <div className="content"></div>
    </section>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage
