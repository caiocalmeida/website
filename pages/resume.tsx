import React from "react";
import Head from 'next/head';
import styles from '../styles/Resume.module.css';

export default function Resume() {
  return (
    <>
      <Head>
      <title>Caio Almeida&apos;s Resume</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Caio C. V. de Almeida</h1>
          <h2>Software Engineer</h2>
        </header>
        <section className={styles.about}>
          <h1>About</h1>
          <p>
            Goal oriented software engineer with 4 years of experience developing solutions including web APIs, mobile apps and web UIs
            while collaborating with clients and colleagues in an agile environment to deliver quality software on time.
          </p>
        </section>
        <aside>
          <ul className={styles.contactList}>
            <li>Brazil (UTC -3)</li>
            <li><a href='mailto:caio@caiocalmeida.com' target='_blank' rel='noreferrer'>caio@caiocalmeida.com</a></li>
            <li><a href='https://github.com/caiocalmeida' target='_blank' rel='noreferrer'>Github</a></li>
            <li><a href='https://www.linkedin.com/in/caio-almeida-433019198' target='_blank' rel='noreferrer'>LinkedIn</a></li>
          </ul>
        </aside>
        <section className={styles.skills}>
          <h1>Skills</h1>
          <ul>
            <li>&gt;&nbsp;&nbsp;Back-end: REST, GraphQL, microservices, messaging, SQL, NoSQL, ASP.NET Web API, Redis.</li>
            <li>&gt;&nbsp;&nbsp;Front-end: HTML5, CSS3, Javascript, Typescript, React.js, Next.js, Redux.</li>
            <li>&gt;&nbsp;&nbsp;Mobile: Xamarin on Android and iOS.</li>
            <li>&gt;&nbsp;&nbsp;Quality: Test pyramid, xUnit on .NET, Jest on JS/TS, k6 for load testing, Cypress, SonarQube.</li>
            <li>&gt;&nbsp;&nbsp;Deployment: git, Docker, Kubernetes, Microsoft Azure, Google Play, App Store, Microsoft App Center.</li>
            <li>&gt;&nbsp;&nbsp;Soft skills: Proactivity, time management, goal orientation, self-teaching. </li>
          </ul>
        </section>
        <section className={styles.experience}>
          <h1>Work Experience</h1>
          <h2>Full Stack Developer @ dti digital (April 2018 - March 2022)</h2>
          <ul>
            <li>&gt;&nbsp;&nbsp;Built reliable and scalable microservices to replace legacy CRM monolith at the core of a partner company&apos;s sales systems. Leveraged messaging solutions to manage the services&apos; coexistence during the transition period.</li>
            <li>&gt;&nbsp;&nbsp;Developed a core web API and several broker APIs for an IBM Watson Assistant powered chatbot accessible across different platforms (WhatsApp, Facebook Messenger, a custom web interface and a custom app interface).</li>
            <li>&gt;&nbsp;&nbsp;Improved a cross-platform mobile app focused on after-sales customer relations, ultimately changing a downward app rating trend to a climb to an all time high (from 2.6 to 3.6 stars in a few months).</li>
            <li>&gt;&nbsp;&nbsp;Worked closely with a partner company&apos;s intelligence department to tailor an in-house mobile app for visualizing and simulating financial data used by the company&apos;s upper management.</li>
          </ul>
        </section>
        <section className={styles.accomplishment}>
          <h1>Accomplishment</h1>
          <h2>Speaker (September 2021)</h2>
          <p>Invited to talk about state management in react with redux at a Digital Innovation One bootcamp. Used original resources to teach in a livestream for a couple of hours.</p>
        </section>
        <section className={styles.education}>
          <h1>Education</h1>
          <h2>Associate Degree in<br />Systems Analysis and Development</h2>
          <p>C. Un. Estácio de Belo Horizonte, August 2019</p>
        </section>
        <footer><a href='https://www.caiocalmeida.com/resume'>find the latest version at www.caiocalmeida.com/resume</a></footer>
      </main>
    </>
  );
}