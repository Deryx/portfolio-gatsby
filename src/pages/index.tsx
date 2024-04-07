import React from "react";
import TopNavigation from "../components/topNavigation/topNavigation";
import SiteNavigation from "../components/siteNavigation/siteNavigation";
import Pill from "../components/pill/pill";
import Carousel from "../components/carousel/carousel";
import "./styles.scss";

const IndexPage = () => {
  const tutorMap = {
    'projectName': 'MySpanishTutor',
    'projectDescription': 'An application created to learn beginning Spanish and sharpen my React/TypeScript skills. The original application, spanish-tutor-2, was built to learn Angular 1.x, Angular 2+, and React. The app features flashcards for learning verb conjugations and vocabulary; verb conjugator and slider games for verbs; and completion, fill-in, quiz, scramble, and sliders games for vocabulary.',
    'image': 'MySpanishTutor.png',
    'company': 'Personal',
    'webAddress': 'https://deryx.github.io/spanish-tutor-2/',
    'technology': ['HTML', 'CSS/Sass', 'React', 'Angular 1.x', 'Angular 2+', 'Next.js', 'TypeScript', 'SQLite3', 'JSON', 'Framer Motion', 'React Beautiful DND'] 
  }

  const requestMap = {
    'projectName': 'Work Request',
    'projectDescription': '  This application was created so that College of New Rochelle students, employees, and faculty could request maintenance work from the school\'s Facilities Management. After receiving requests, the app allowed Facilities to list all requests according to certain designations; assign work requests to workers; update request status; and print work request tickets to give assigned workers.' ,
    'image': 'work-request-3.png',
    'company': 'The College of New Rochelle',
    'webAddress': 'N/A',
    'technology': ['HTML', 'CSS', 'ASP.NET', 'C#', 'DB2', 'SQL', 'Active Directory']
  }

  const scheduleMap = {
    'projectName': 'Course Schedule',
    'projectDescription': 'An application created so that all students that attended CNR could have an Internet-friendly way of viewing the courses available by selecting school, year, and/or semester. The information provided included the maximum number of students allowed in the course and the number of students already registered along with other course particulars as meeting times, location, and name of the professor.',
    'image': 'course-schedule-1.png',
    'company': 'The College of New Rochelle',
    'webAddress': 'N/A',
    'technology': ['HTML', 'CSS', 'ASP.NET', 'C#', 'DB2', 'SQL', 'Active Directory']
  }
  
  const gpaMap = {
    'projectName': 'GPA Calculator',
    'projectDescription': 'The application allowed the user, a student or advisor, to list all courses taken by the student and the cumulative gpa for the listed courses. With the current gpa calculated, the user could input a desired gpa and the credits to be taken in a subsequent semester to calculate the quality points/gpa needed to achieve a desired gpa.',
    'image': 'gpa-calculator-3.png',
    'company': 'The College of New Rochelle',
    'webAddress': 'N/A',
    'technology': ['HTML', 'CSS', 'ASP.NET', 'C#', 'DB2', 'SQL', 'Active Directory']
  }

  const portalMap = {
    'projectName': 'Grant Portal',
    'projectDescription': 'The application allowed access to particular members of the college community and only three people were allowed to upload documents to the server and be displayed on the portal (the document upload panel only appears to these three people). The portal also featured a message board where the messages appeared and disappeared according to input dates and jQuery/JavaScript-generated calendars.', 
    'image': 'portal-2.png',
    'company': 'The College of New Rochelle',
    'webAddress': 'N/A',
    'technology': ['HTML', 'CSS', 'ASP.NET', 'C#', 'DB2', 'SQL', 'Active Directory']
  }

  const employmentMap = {
    'projectName': 'Off-campus Employment',
    'projectDescription': 'Off-campus employers used the form to input off-campus employment opportunities into a SQL Server database. Once the jobs are in the database they appear until a Career Services administrator removed them. The jobs links, once clicked, opens up another browser window with the details of the selected job.', 
    'image': 'oc-employment-2.png',
    'company': 'The College of New Rochelle',
    'webAddress': 'N/A',
    'technology': ['HTML', 'CSS', 'jQuery', 'ASP.NET', 'C#', 'DB2', 'SQL', 'Active Directory']
  }

  const npcMap = {
    'projectName': 'Net Price Calculator',
    'projectDescription': 'The application calculates a student\'s estimated family contribution (efc) using the Federal Methodology. On the results page, the student is presented with the College of New Rochelle\'s cost of attendance, total amount of state grants and scholarships, total amount of college grants and scholarships and the net amount the student is responsible for after all estimated aid is subtracted from the cost of attendance.',
    'image': 'npc-1.png',
    'company': 'Personal',
    'webAddress': 'https://deryx.github.io/npc/',
    'technology': ['HTML', 'CSS', 'Angular.js', 'jQuery', 'jQueryUI', 'json', 'ASP.NET', 'C#']
  }

  const simonMap = {
    'projectName': 'Simon',
    'projectDescription': 'This application is computer reproduction of the classic pattern-matching game, Simon. The game creates a series of lights and tones that requires the user to reproduce immediately after they are presented. If the player succeeds, the sequence gets longer by one until a max series of 20.', 
    'image': 'simon.png',
    'company': 'Personal',
    'webAddress': 'https://simon-gatsby.vercel.app/',
    'technology': ['Gatsby', 'React', 'TypeScript', 'Sass']
  }

  const blackjackMap = {
    'projectName': 'Blackjack',
    'projectDescription': 'This application is a computer reproduction of the classic casino card game, Blackjack. Each player\'s goal is to achieve a score of 21. Furthermore, each player plays to beat the score of the dealer whether he/she achieves the score of 21. Any player that goes above 21 automatically loses.', 
    'image': 'blackjack.png',
    'company': 'Personal',
    'webAddress': 'https://blackjack-gatsby.vercel.app/',
    'technology': ['Gatsby', 'React', 'TypeScript', 'Sass']
  }

  const projectSlides: any = [tutorMap, requestMap, scheduleMap, gpaMap, portalMap, employmentMap, npcMap, simonMap, blackjackMap];

  return (
    <>
      <TopNavigation />
      <div className="container">
        <div className="left">
          <section id="intro">
            <h1>Deryx E. Scott</h1>
            <h3>Web Developer &bull; Software/App Engineer</h3>
          </section>
          <SiteNavigation />
        </div>

        <div className="right">
          <section id="about">
            <h1>about</h1>
            <div className="content">
              <p className="about">
                My name is pronounced like "Derricks", not "Dexter", as pronounced by a 3rd grade substitute teacher who came across my name while calling attendance (still shaking my head about that one!). Anyway, I am a Software Engineer III for JP Morgan Chase, working on a team that serves as the bank's Material UI for web teams.
              </p>
              <p className="about">
                While attending high school, I became enamored with computers when I came across the Commodore 64 my senior year (I know! I'm dating myself!). I immediately joined the school's computer club to find that I had no idea about computers or programming! During my sophomore year at Stanford University, I again tried my hand at computer programming during the fall semester while also walking on the baseball team. Bad idea! While I didn't fail, I barely passed! Undaunted, I took the course again the following falls. I passed this time, instituting solutions others in the class did not implement, garnering a modicum of praise from class teaching assistants. I went on to take, and pass, other computer courses but did not major in computer science because it would have added time to get my degree.
                </p>
              <p className="about">
                For quite a few years after college, while I didn't do any programming, I did learn a lot about computers - learning about relational databases; doing some batch programming in MS_DOS; building PCs; and becoming a MS Word and Excel expert. It wasn't until the late nineties with the explosion in popularity of the Internet did I return to programming. In 1999, a group of friends and I decided we wanted to create an online culture-based magazine. While the project never got off the ground, I did teach myself how web pages were created using HTML and pushed to a server using the File Transfer Protocol (FTP). I used my new skills to create an interactive personal training site using HTML and Perl in less than a month. You can still see vestiges of it on the <a href="https://web.archive.org/web/20010401185236/http://des-healthsmith.com/" target='_blank'>Wayback Machine</a>. From there, I created a financial aid estimator program in HTML and classic ASP just to see if I could do it (I was an Associate Financial Aid Director at the time). This led me to become The College of New Rochelle's sole Web Developer, creating their first web presence in 2000.
              </p>
            </div>
          </section>

          <section id="skills">
            <h1>skills</h1>
            <div className="content">
              <section>
                <h3>front end</h3>
                <div className="tech-container">
                  <Pill value="JavaScript" />
                  <Pill value="TypeScript" />
                  <Pill value="React" />
                  <Pill value="Next.js" />
                  <Pill value="Gatsby" />
                  <Pill value="Angular 1.x" />
                  <Pill value="Angular 2+" />
                  <Pill value="HMTL" />
                  <Pill value="CSS" />
                  <Pill value="Sass" />
                  <Pill value="Less" />
                  <Pill value="Bootstrap" />
                </div>
              </section>
              <section>
                <h3>back end</h3>
                <div className="tech-container">
                  <Pill value="ASP.NET" />
                  <Pill value="C#" />
                  <Pill value="SQL" />
                  <Pill value="Java" />
                  <Pill value="Python" />
                  <Pill value="GraphQL" />
                  <Pill value="Prisma" />
                  <Pill value="Vanilla Extract" />
                  <Pill value="Framer's Motion" />
                  <Pill value="React Beautiful DND" />
                </div>
              </section>
              <section>
                <h3>databases</h3>
                <div className="tech-container">
                <Pill value="SQL Server" />
                  <Pill value="MS Access" />
                  <Pill value="MySQL" />
                  <Pill value="SQLite3" />
                  <Pill value="Postgresql" />
                  <Pill value="MongoDB" />
                  <Pill value="Raiser's Edge" />
                </div>
              </section>
              <section>
                <h3>other tech</h3>
                <div className="tech-container">
                  <Pill value="Git" />
                  <Pill value="Github" />
                  <Pill value="BitBucket" />
                  <Pill value="Jira" />
                  <Pill value="Storybook" />
                  <Pill value="Visual Studio" />
                  <Pill value="Visual Studio Code" />
                  <Pill value="WebStorm" />
                  <Pill value="Atom" />
                  <Pill value="Dreamweaver" />
                  <Pill value="Photoshop" />
                  <Pill value="Karma" />
                  <Pill value="Mocha" />
                  <Pill value="Jest" />
                  <Pill value="Cypress" />
                </div>
              </section>
            </div>
          </section>

          <section id="experience">
            <h1>experience</h1>
            <div className="content">
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
                <ul>
                  <li><strong>Facilities Management System:</strong> Streamlined facility repair requests and work order management</li>
                  <li><strong>Grade Point Average Calculator:</strong> Enabled students to calculate current and future GPAs</li>
                  <li><strong>Faculty Directory Update:</strong> Facilitated faculty profile updates on the college website</li>
                </ul>

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
              <Carousel slides={ projectSlides } />
            </div>
          </section>

          <section id="contact">
            <h1>contact</h1>
            <div className="content">
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage;
