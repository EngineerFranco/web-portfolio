import About from "@/components/about";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="mt-36 flex flex-col items-center gap-20 mx-auto mb-auto">
    <Intro/>
    <SectionDivider/>
    <About/>
    <Projects/>
    <Skills/>
    <Experiences/>
    <Contact/>
    </main>
  )
}
  