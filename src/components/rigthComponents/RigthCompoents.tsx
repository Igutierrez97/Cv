import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export default function RigthComponents() {
  return (
    <>
    <div className="w-[310px] h-[830px]  mb-4 bg-white rounded-[10px]">
    <Experience />
    <Education/>
    <Skills/>
    </div>
     
      
    </>
  );
}
