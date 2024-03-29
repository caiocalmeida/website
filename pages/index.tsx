import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Project, { ProjectType } from '../components/project'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Caio Almeida - Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <section>
          <h1>Hi! <br />I&apos;m Caio&nbsp;Almeida.</h1>
          <h3>I build software focusing on quality and agility.</h3>
          <p>
            I have four years of professional experience designing, building and maintaining software. In this time, I&apos;ve had the opportunity to work on microservices, monolithic web services, front-end web apps, mobile apps for Android and iOS, chatbots and more.
          </p>
        </section>
        <section id='Projects' className={styles.projects}>
          <h2 className={styles.sectionHeader}>Projects</h2>
          <Project
            title='.NET Web Service'
            srcLink='https://github.com/caiocalmeida/dotnet-webservice-ref'
            swaggerLink='https://caiocalmeida-api-gateway.azurewebsites.net/swagger'
            graphqlLink='https://caiocalmeida-api-gateway.azurewebsites.net/graphql'
            type={ProjectType.Dotnet}
            tags={['REST', 'GraphQL', 'SQL', '.NET 6', 'ASP.NET', 'Azure']} />
          <Project
            title='Go Web Service'
            srcLink='https://github.com/caiocalmeida/golang-webservice-ref'
            type={ProjectType.Go}
            tags={['REST', 'SQL', 'Gin', 'Go']} />
          <Project
            title='This website'
            srcLink='https://github.com/caiocalmeida/website'
            type={ProjectType.React}
            tags={['HTML', 'CSS', 'Node.js', 'Next.js', 'Typescript', 'CircleCI']} />
          <Project
            title='.NET API Gateway'
            srcLink='https://github.com/caiocalmeida/api-gateway'
            docsLink='https://caiocalmeida-api-gateway.azurewebsites.net'
            type={ProjectType.Dotnet}
            tags={['Ocelot', 'REST', 'GraphQL', '.NET 6', 'ASP.NET', 'Azure']} />
        </section>
      </main>
    </>
  )
}

export default Home
