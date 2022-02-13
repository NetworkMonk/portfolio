import Head from 'next/head'
import Image from 'next/image'
import Background from '../components/Background'
import GetInTouch from '../components/GetInTouch'
import Header from '../components/Header'
import MyStory from '../components/MyStory'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Interests from '../components/Interests'
import Achievements from '../components/Achievements'

export default function Home() {
  return (
    <div>
      <Head>
        <title>James Plant</title>
        <meta name="description" content="A portfolio for James Plant - Full Stack Developer based in Essex, UK." />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <main>
        <Background />
        <Header />
        <MyStory />
        <Skills />
        <Interests />
        <Achievements />
        <GetInTouch />
        <Footer />
      </main>

    </div>
  )
}
