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
          <div className="contact">
            <a href="https://github.com/Deryx">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>          
            </a>
            <a href="https://www.linkedin.com/in/deryxescott/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>          
            </a>
            <a href="https://www.facebook.com/deryx.e.scott" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
          </div>
        </div>

        <div className="right">
          <section id="about">
            <h1>about</h1>
            <div className="content">
              <p className="about">
                My love affair with web development began the moment I discovered that websites were built with HTML. Armed with HTML For Dummies, I built my first interactive site (a personal training portal powered by Perl) in just two weeks—and I was hooked. "How could I turn this into a career?" I wondered.
              </p>
              <p className="about">
                The answer came when I created a financial aid estimation tool using classic ASP while working in higher education. Its success led my college—which had no web presence at the time—to offer me their first-ever Web Developer role. That leap of faith launched my 20+ year journey, evolving from HTML and Perl to mastering modern stacks like React, TypeScript, C#, and cloud-native architectures.
                </p>
              <p className="about">
                Today, I’m a Senior Full-Stack Engineer specializing in frontend modernization and legacy system migrations, with a proven track record at companies like JPMorgan Chase, where I worked on large-scale projects like migrating Web Components to React. I thrive on untangling complex JavaScript, mentoring developers (as I did at Springboard and Thinkful), and building tools that solve real-world problems—whether it’s a financial aid calculator or a bilingual learning app like MySpanishTutor.
              </p>
              <p className="about">
                When I’m not coding, you’ll find me:
                <ul>
                  <li>Traveling around the world (I've been to Mexico, Colombia, Panama, Costa Rica, Paris, Spain, Italy, Amsterdam, Berlin, Athens, Morocco, Thailand, Bali, and various Caribbean islands,</li>
                  <li>Watching movies (my favorite genre is action),</li>
                  <li>Curled up at Barnes & Noble (I really miss Borders though!) with a stack of tech or miscellaneously interesting books,</li>
                  <li>Practicing boxing on the VR or heavy bag (or lifting weights to balance out the bookstore trips).</li> 
                </ul>
              </p>
              <p className="about">I’m always exploring new technologies and opportunities to create clean, dynamic, and user-centric applications.</p>
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
                  <Pill value="Vanilla Extract" />
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
                  <Pill value="D3.js" />
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
                  <Pill value="Framer's Motion" />
                  <Pill value="React Beautiful DND" />
                </div>
              </section>
            </div>
          </section>

          <section id="experience">
            <h1>experience</h1>
            <div className="content">
              <section>
                <p>December 2017 &mdash; May 2025</p>
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
                <ul>
                  <li>Managed Raiser's Edge database operations ensuring data integrity and security for institutional advancement system</li>
                  <li>Developed WebFOCUS BI reporting solutions extracting AS/400 data for real-time donor analytics and strategic decision-making</li>
                  <li>Automated data import processes and generated annual reports using advanced SQL queries and stored procedures</li>
                  <li>Standardized data governance protocols improving data quality and reporting accuracy</li>
                </ul>
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
              <p className="resume">
                <a href="../../static/resume.pdf" target="_blank">View Full Resume</a>
              </p>            
            </div>
          </section>

          <section id="projects">
            <h1>projects</h1>
            <div className="content">
              <Carousel slides={ projectSlides } />
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
