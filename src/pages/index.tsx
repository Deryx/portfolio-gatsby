import React from "react";
import SiteNavigation from "../components/siteNavigation/siteNavigation";

// import Layout from "../components/layout"
// import Seo from "../components/seo"
import "./styles.scss";

const IndexPage = () => 
(
  <>
    <SiteNavigation />
    <div className="container">
      <section id="intro">
        <h1><span className="first-letter">D</span>eryx <span className="first-letter">E</span>. <span className="first-letter">S</span>cott</h1>
        <h3>Web Developer &bull; Software/App Engineer</h3>
      </section>

      <section id="about">
        <h1>about</h1>
        <div className="content">
          <p className="about">My name is pronounced like "Derricks", not "Dexter", as pronounced by a 3rd grade substitute teacher who came across my name while calling attendance (still shaking my head about that one!). Anyway, I am a Software Engineer III for JP Morgan Chase, working on a team that serves as the bank's Material UI for web teams.</p>
          <p className="about">While attending high school, I became enamored with computers when I came across the Commodore 64 my senior year (I know! I'm dating myself!). I immediately joined the school's computer club to find that I had no idea about computers or programming! During my sophomore year at Stanford University, I again tried my hand at computer programming during the fall semester while also walking on the baseball team. Bad idea! While I didn't fail, I barely passed! Undaunted, I took the course again the following falls. I passed this time, instituting solutions others in the class did not implement, garnering a modicum of praise from class teaching assistants. I went on to take, and pass, other computer courses but did not major in computer science because it would have added time to get my degree.</p>
          <p className="about">For quite a few years after college, while I didn't do any programming, I did learn a lot about computers - learning about relational databases; doing some batch programming in MS_DOS; building PCs; and becoming a MS Word and Excel expert. It wasn't until the late nineties with the explosion in popularity of the Internet did I return to programming. In 1999, a group of friends and I decided we wanted to create an online culture-based magazine. While the project never got off the ground, I did teach myself how web pages were created using HTML and pushed to a server using the File Transfer Protocol (FTP). I used my new skills to create an interactive personal training site using HTML and Perl in less than a month. You can still see vestiges of it on the <a href='https://web.archive.org/web/20010401185236/http://des-healthsmith.com/' target="_blank">Wayback Machine</a>. From there, I created a financial aid estimator program in HTML and classic ASP just to see if I could do it (I was an Associate Financial Aid Director at the time). This led me to become The College of New Rochelle's sole Web Developer, creating their first web presence in 2000.</p>
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
              <div className="pill">Postgresql</div>
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
              <div className="pill">Dreamweaver</div>
              <div className="pill">Photoshop</div>
              <div className="pill">Android Studio</div>
              <div className="pill">Karma</div>
              <div className="pill">Jest</div>
              <div className="pill">Cypress</div>
            </div>
          </section>
        </div>
      </section>

      <section id="experience">
        <h1>experience</h1>
        <div className="content">
        <section>
            <p>June 2022 &mdash; December 2023</p>
            <h3>Software Engineering Mentor &bull; Springboard</h3>
            <p>Mentored students in project-based curriculum covering HTML, CSS, JavaScript, React, Python, SQL, and data structures and algorithms. Provided one-on-one feedback on student code and projects, guiding them through challenges and best practices. Fostered a supportive learning environment, helping students become successful software developers.</p>
            <div className="tech-container">
              <div className="pill">HTML</div>
              <div className="pill">CSS</div>
              <div className="pill">JavaScript</div>
              <div className="pill">TypeScript</div>
              <div className="pill">React</div>
            </div>
          </section>
          <section>
            <p>2017 &mdash; PRESENT</p>
            <h3>Software Engineer III &bull; JP Morgan Chase & Co.</h3>
            <p>Create, enhance, and debug reusable web components used by over 100 web teams responsible for building user interfaces (UI). Transition JavaScript Web Components to pure React components, improving maintainablity, efficiency, and composability of existing components. Originally worked on CXO teams responsible for creating full-stack UIs for payments and collections.</p>
            <div className="tech-container">
              <div className="pill">BlueJS</div>
              <div className="pill">JavaScript (ES5)</div>
              <div className="pill">TypeScript</div>
              <div className="pill">React</div>
              <div className="pill">HTML</div>
              <div className="pill">Less</div>
              <div className="pill">Sass</div>
              <div className="pill">Vanilla Extract</div>
              <div className="pill">Mocha</div>
              <div className="pill">Karma</div>
              <div className="pill">Jest</div>
              <div className="pill">Cypress</div>
              <div className="pill">Storybook</div>
              <div className="pill">Git</div>
              <div className="pill">Jira</div>
              <div className="pill">Bitbucket</div>
        </div>
          </section>
          <section>
            <p>2013 &mdash; 2017</p>
            <h3>Front End Web Development Mentor &bull; Thinkful</h3>
            <p>Mentored students in project-based curriculum covering HTML, CSS, JavaScript. Provided one-on-one feedback on student code and projects, guiding them through challenges and best practices. Fostered a supportive learning environment, helping students become successful front-end web developers.</p>
            <div className="tech-container">
              <div className="pill">HTML</div>
              <div className="pill">CSS</div>
              <div className="pill">JavaScript</div>
            </div>
        </section>
          <section>
            <p>2005 &mdash; 2016</p>
            <h3>Raiser's Edge Database Administrator &bull; The College of New Rochelle</h3>
            <div className="tech-container">
              <div className="pill">Raiser's Edge</div>
              <div className="pill">MS Excel</div>
              <div className="pill">AS400/DB2</div>
              <div className="pill">SQL</div>
            </div>
          </section>
          <section>
            <p>2000 &mdash; 2016</p>
            <h3>Web Developer &bull; The College of New Rochelle</h3>
            <p>Sole developer that created the College's first web presence and responsible for designing, developing, and maintaining various web applications:</p>

            <div className="tech-container">
              <div className="pill">HTML</div>
              <div className="pill">CSS</div>
              <div className="pill">JavaScript</div>
              <div className="pill">jQuery</div>
              <div className="pill">ASP.NET</div>
              <div className="pill">C#</div>
              <div className="pill">SQL</div>
              <div className="pill">AS400/DB2</div>
              <div className="pill">MS Access</div>
              <div className="pill">SQL Server</div>
              <div className="pill">Internet Information Services (IIS)</div>
            </div>
          </section>
        </div>
      </section>

      <section id="projects">
        <h1>projects</h1>
        <div className="content">
        <section>
            <h3>MySpanishTutor</h3>
            <p>An application created to learn beginning Spanish and sharpen my React/TypeScript skills. The original application, spanish-tutor-2, was built to learn <strong>Angular 1.x</strong>, <strong>Angular 2+</strong>, and <strong>React</strong>.</p>
            <div className="tech-container">
              <div className="pill">HTML</div>
              <div className="pill">CSS/Sass</div>
              <div className="pill">React</div>
              <div className="pill">Next.JS</div>
              <div className="pill">TypeScript</div>
              <div className="pill">Sqlite3</div>
              <div className="pill">Prisma</div>
              <div className="pill">Framer Motion</div>
              <div className="pill">React Beautiful DND</div>
            </div>
          </section>
          <section>
            <h3>Work Order Request</h3>
            <p>This application was created so that College of New Rochelle students, employees, and faculty could request maintenance work from the school's Facilities Management. The application:</p>
            <ul>
              <li>Had a sign-in form that checked the School's Active Directory to allow them to use the form</li>
              <li>Sent an email to the user once the form was successfully submitted</li>
              <li>Created an interactive menu so that the Facilities staff could input/retrieve request information</li>
              <li>
                Allowed Facilities Staff to:
                <ul>
                  <li>Retrieve all unassigned/incomplete/complete work orders by time period, requester name, work order number, email, and/or location</li>
                  <li>Assign work requests</li>
                  <li>update work request statuses</li>
                  <li>Send requesters email updates</li>
                  <li>Print work request tickets to give assigned workers</li>
                </ul>
              </li>
            </ul>
            <div className="tech-container">
              <div className="pill">HTML</div>
              <div className="pill">CSS</div>
              <div className="pill">ASP.NET</div>
              <div className="pill">C#</div>
              <div className="pill">Active Directory</div>
              <div className="pill">DB2</div>
              <div className="pill">SQL</div>
            </div>
          </section>
          <section>
            <h3>College of New Rochelle (CNR) Course Schedule</h3>
            <p>An application created so that all students that attended CNR could have an Internet-friendly way of viewing the courses available, by school, year, and semester.</p>
            <div className="tech-container">
              <div className="pill">HTML</div>
              <div className="pill">CSS</div>
              <div className="pill">ASP.NET</div>
              <div className="pill">C#</div>
              <div className="pill">DB2</div>
              <div className="pill">SQL</div>
            </div>
          </section>
          <section>
            <h3>CNR GPA Calculator</h3>
            <p>An application that allowed the user to search for a student, list all courses taken for the selected student, and the cumulative grade point average (gpa) for those courses. With the current gpa calculated, the user could input the desired cumulative gpa and credits to be taken in the subsequent semester to calculate the quality points/gpa needed to achieve the desired gpa.</p>
            <div className="tech-container">
              <div className="pill">HTML</div>
              <div className="pill">CSS</div>
              <div className="pill">ASP.NET</div>
              <div className="pill">C#</div>
              <div className="pill">Active Directory</div>
              <div className="pill">DB2</div>
              <div className="pill">SQL</div>
            </div>
          </section>
          <section>
            <h3>CNR Grant Portal</h3>
            <p>The application allowed access to particular members of the college community and only three people are allowed to upload documents to the server and be displayed on the portal (the document upload panel only appears to these three people). The portal also featured a message board where the messages appeared and disappeared according to input dates and jQuery/JavaScript-generated calendars.</p>
            <div className="tech-container">
              <div className="pill">HTML</div>
              <div className="pill">CSS</div>
              <div className="pill">jQuery</div>
              <div className="pill">JavaScript</div>
              <div className="pill">ASP.NET</div>
              <div className="pill">C#</div>
              <div className="pill">SQL Server</div>
              <div className="pill">SQL</div>
            </div>
          </section>
          <section>
            <h3>CNR Off-Campus Employment</h3>
            <p>Off-campus employers used the form to input off-campus employment opportunities into a SQL Server database. Once the jobs are in the database they appear until a Career Services administrator removed them. The jobs links, once clicked, opens up another browser window with the details of the selected job.</p>
            <div className="tech-container">
              <div className="pill">HTML</div>
              <div className="pill">CSS</div>
              <div className="pill">jQuery</div>
              <div className="pill">JavaScript</div>
              <div className="pill">ASP.NET</div>
              <div className="pill">C#</div>
              <div className="pill">SQL Server</div>
              <div className="pill">SQL</div>
            </div>
          </section>
          <section>
            <h3>CNR Net Price Calculator</h3>
            <p>The application is essentially a wizard program, taking the user through 5 screens, if the student is independent, or 6 screens, if the student is dependent. The final screen is always the results. The application calculates a student's estimated family contribution (efc) using the Federal Methodology, the same methodology used when a student completes the Free Application for Federal Student Aid (FAFSA). On the results page, the student is presented with the College of New Rochelle's cost of attendance, total amount of state grants and scholarships, total amount of college grants and scholarships and the net amount the student is responsible for after all estimated aid is subtracted from the cost of attendance.</p>
            <div className="tech-container">
              <div className="pill">HTML</div>
              <div className="pill">CSS</div>
              <div className="pill">AngularJS</div>
              <div className="pill">jQuery</div>
              <div className="pill">jQueryUI</div>
              <div className="pill">JSON</div>
            </div>
          </section>
          <section>
            <h3>Simon&trade; Matching Game</h3>
            <p>This application is computer reproduction of the classic pattern-matching game, Simon. The game creates a series of lights and tones that requires the user to reproduce immediately after they are presented. If the player succeeds, the sequence gets longer by one until a max series of 20. If the user fails, one of two things can happen: if the strict mode is activated, Simon presents the player with double exclamation points and the user has to start all over with a new sequence. If strict mode is off, the user is again presented with double exclamation points, indicating failure, however, the sequence continues.</p>
            <div className="tech-container">
              <div className="pill">Gatsby</div>
              <div className="pill">React</div>
              <div className="pill">TypeScript</div>
              <div className="pill">Sass</div>
            </div>
          </section>
          <section>
            <h3>Blackjack</h3>
            <p>This application is computer reproduction of the classic casino card game, Blackjack. As with the card game, players play against the dealer, each trying to achieve a score of 21. Each player's goal is to achieve a score of 21 or less that beats the score of the dealer. If a player or the dealer gets a score above 21, he/she goes "bust" or automatically loses. Each player has a HIT, STAND, and ACE = 11 button. Each player presses the HIT button to add a new card to their hand. To stop receiving cards and end their hand, each player presses the STAND button. To make an ace worth 11 instead of 1, players press the ACE = 11 to add a one addition of 10 points to their hand score.</p>
            <div className="tech-container">
              <div className="pill">Gatsby</div>
              <div className="pill">React</div>
              <div className="pill">TypeScript</div>
              <div className="pill">Sass</div>
            </div>
          </section>
        </div>
      </section>

      <section id="contact">
        <h1>contact</h1>
        <div className="content">
        </div>
      </section>
    </div>
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage;
