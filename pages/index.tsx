import type { NextPage } from "next";
import Head from "next/head";
import { data } from "../libs/data";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 justify-center px-8 md:px-80 py-20 text-white">
      <Head>
        <title>Front-end developer - Jorge Saldivar</title>
        <meta
          name="description"
          content="Front-end developer portfolio mail:jorgesaldivar0611@gmail.com"
        />
        <link rel="icon" href="/my-logo.ico" />
      </Head>

      <main className="space-y-8 scroll-smooth">
        <nav className="fixed top-0 left-0 right-0 h-12 bg-zinc-900 bg-opacity-90 flex justify-center items-center text-sm px-4 py-8 space-x-6 md:space-x-8">
          <a href="#about-me" className="hover:text-blue-400">
            about me
          </a>
          <a href="#technical-skills" className="hover:text-blue-400">
            technical skills
          </a>
          <a href="#my-projects" className="hover:text-blue-400">
            my projects
          </a>
          <a href="#contacts" className="hover:text-blue-400">
            contacts
          </a>
        </nav>

        {/* about me */}

        <section id="about-me" className="scroll-mt-20">
          <div className="space-y-8">
            <p className="text-slate-400">Hello world! 🚀</p>
            <p>
              I&apos;m Jorge Luis Saldivar Castillo, I&apos;m a{" "}
              <span className="text-blue-400">
                front-end software developer{" "}
              </span>
              aspiring to be a full-stack developer.
            </p>
            <p>
              My interest in making the apps and websites I create to have a
              modern and beautiful user interface, while maintaining the good
              user experience, is what motivated me to focus my knowledge in the
              frontend. Because of this, I&apos;ve been learning and improving
              my skills creating projects to show what I&apos;ve learned.✨
            </p>
          </div>
        </section>

        {/* technical skills */}
        <section id="technical-skills" className="scroll-mt-20">
          <div>
            <p>
              My technical skills include,{" "}
              <code className="text-blue-400">
                html & css, javascript, typescript, react, nextjs, tailwind css,
                redux, bootstrap, git, java, php, android, mongodb, mysql,
                firebase
              </code>{" "}
              , and some other frameworks and libraries.
            </p>
          </div>
        </section>

        {/* my projects */}
        <section id="my-projects" className="scroll-mt-20">
          <div className="space-y-4">
            <p>
              I worked in the development of{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.caonainteractive.elnuevodiario&hl=es_PY"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline decoration-blue-400 hover:text-white cursor-pointer"
              >
                El Nuevo Diario App
              </a>
              . my role in this was to fix every error and reintegrated the api
              with the application, which wasn&apos;t working before i started
              working there. This app was using the Ionic technologies,
              alongside wordpress api to fetch the news from the website.
            </p>

            {data.map((items, key) => (
              <p key={"project-" + key}>
                I built{" "}
                <span className="text-blue-400 font-semibold">
                  {items.name}
                </span>{" "}
                - {items.description}
                <Link href={`/project/${items.id}`}>
                  <a className="uppercase text-red-400 hover:text-white">
                    {" >>>"} View project{" "}
                  </a>
                </Link>
              </p>
            ))}
          </div>
        </section>

        {/* contacts */}
        <section id="contacts" className="space-y-4">
          <p>
            I&apos;ve built other different projects, if you want to have a look
            you can{" "}
            <a
              href="https://github.com/Jorge0611"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-white underline decoration-blue-400 "
            >
              visit my github repository.
            </a>
          </p>
          <p>
            you can have a look at my{" "}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-white underline decoration-blue-400"
            >
              resume
            </a>{" "}
            or my{" "}
            <a
              href="/vitae.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-white underline decoration-blue-400"
            >
              curriculum vitae
            </a>
            .
          </p>
          <p>
            you can also check my diplomas and certifications{" "}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-white underline decoration-blue-400"
            >
              here
            </a>
            .
          </p>
          <p>
            you can contact me via email at{" "}
            <a
              href="mailto:jorgesaldivar0611@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-white underline decoration-blue-400"
            >
              jorgesaldivar0611@gmail.com
            </a>{" "}
            📧
          </p>
        </section>
      </main>

      <footer className="text-slate-400 mt-16">
        <p>
          built by me -{" "}
          <a href="" className="underline decoration-blue-400 hover:text-white">
            jorge saldivar
          </a>{" "}
          with next js for static site generation, the slide up animation
          created with react-reveal, styled with tailwind css, and font family
          ‘ibm plex mono’ from google font, you can check out the source code{" "}
          <a href="" className="underline decoration-blue-400 hover:text-white">
            here❤️
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
