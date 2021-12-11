import { data } from "../../libs/data";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  description: string;
  preview: string;
  repoUrl: string;
  hostUrl?: string;
}

const Project = ({
  id,
  name,
  description,
  preview,
  repoUrl,
  hostUrl,
}: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 justify-center px-8 md:px-52 py-8 text-white">
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content="Front-end developer portfolio mail:jorgesaldivar0611@gmail.com"
        />
        <link rel="icon" href="/my-logo.ico" />
      </Head>
      <main className="space-y-8">
        {/*  */}

        <div>
          <Link href={"/"}>
            <a href="" className="hover:text-blue-400">
              {"<<< "}Go back
            </a>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl md:text-4xl tracking-widest">{name}</p>
          </div>
          <div className="flex flex-col">
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 uppercase"
            >
              Visit repository
            </a>
            {hostUrl && (
              <a
                href={hostUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 uppercase"
              >
                View website
              </a>
            )}
          </div>
        </div>
        {/*  */}
        <div>
          <p className="first-letter:uppercase">{description}</p>
        </div>

        {/*  */}
        <div></div>

        {/*  */}
        <div>
          <div className="relative aspect-[2/1] items-center">
            <Image src={preview} alt={name} layout="fill" />
          </div>
        </div>
      </main>
      <footer>
        <div></div>
      </footer>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;
  const { name, description, preview, repoUrl, hostUrl } = data.find(
    (item) => item.id === id
  )!;

  return {
    props: {
      id,
      name,
      description,
      preview,
      repoUrl,
      hostUrl,
    },
  };
}

export default Project;
