import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Robiul Islam ",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {

  const links = <>
    <li>
      <div className="flex gap-2">
        <div className="w-16 h-[2px] bg-cyan-800 mt-3"></div>
        <Link href='/About'>About</Link>
      </div>
    </li>

    <li>
      <div className="flex gap-2">
        <div className="w-16 h-[2px] bg-cyan-800 mt-3"></div>
        <Link href='/Skills'>Skills</Link>
      </div>
    </li>

    <li>
      <div className="flex gap-2">
        <div className="w-16 h-[2px] bg-cyan-800 mt-3"></div>
        <Link href='/Education'>Education</Link>
      </div>
    </li>

    <li>
      <div className="flex gap-2">
        <div className="w-16 h-[2px] bg-cyan-800 mt-3"></div>
        <Link href='/Projects'>Project</Link>
      </div>
    </li>
    <li>
      <div className="flex gap-2">
        <div className="w-16 h-[2px] bg-cyan-800 mt-3"></div>
        <Link href='/Projects'>Contact</Link>
      </div>
    </li>
  </>

  return (
    <html lang="en" data-theme="black">
      <body className={inter.className}>
        <div className="h-screen overflow-hidden flex p-24">

          <div className="w-full sticky top-0 h-screen">
            <div>
              <Link href='/'>
                <h2 className="text-5xl font-bold font-mono">Robiul Islam</h2>
                <p className="text-xl font-semibold text-cyan-600">Front-End Developer</p><br />
              </Link>
            </div>
            <p className="text-cyan-600">I create pixel-perfect, interesting, and easily navigable, and <br /> accessible web application.</p> <br /> <br />
            <h2><ul>{links}</ul></h2>

            <div className="flex gap-3 mt-[15rem] ">
              <a href="https://github.com/Robiul178"><FaGithub className="text-2xl" /></a>
              <a href="https://www.linkedin.com/in/robiulislam007"><FaLinkedin className="text-2xl" /></a>
              <a href="https://www.instagram.com/robiul.islam__"><FaInstagram className="text-2xl" /></a>
              <div className="tooltip" data-tip="r.robiul.me@gmail.com">
                <IoMailOpenOutline className="text-2xl" />
              </div>
            </div>
          </div>

          <div className="w-full overflow-y-scroll h-screen no-scrollbar">
            <div>
              {children}
            </div>
          </div>
        </div>

      </body>
    </html >
  );
}
