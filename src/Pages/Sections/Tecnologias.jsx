import { SiReact,SiHtml5, SiJavascript, SiCss3, SiMysql, SiPython, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { Technology } from "../../Components/ItemsTechnology";
import { contentTechno } from "../Container/Content";

export const Technologias = () => {
  return (
    <section className="w-screen h-168 flex flex-row items-center justify-around gap-20 px-4 py-10 max-w-screen-lg mx-auto">
      <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl mb-5 font-bold text-primary"> Tecnologías </h2>
            <contentTechno className="grid grid-cols-3 md:grid-cols-4 gap-8">
              <Technology name="React"  level={20} icon={ <SiReact size={60} className="text-blue-500" />}/>
              <Technology name="HTML"  level={80} icon={<SiHtml5 size={60} className="text-orange-600" />} />
              <Technology name="Javascript" level={80} icon={<SiJavascript size={60} className="text-amber-300" />} />
              <Technology name = "Java" level={20} icon={<FaJava size={60} className="text-[#EA2D2E]" />} /> 
              <Technology name="Css" level={80} icon={<SiCss3 size={60} className="text-blue-500" />} />
              <Technology name="MySql" level={25} icon={<SiMysql size={60} className="text-[#00758F]" />} />
              <Technology name="Python" level={40} icon={<SiPython size={60} className="text-sky-300" />} />
              <Technology name="TypeScript" level={60} icon={<SiTypescript size={60} className="text-blue-800" />} />
            </contentTechno>
      </div>
      <contentTechno className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold"> Metodolgias </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
            <Technology name="Scrum" level={50} icon={<DiScrum size={60} className="text-[#1CA86E]" />} />
          </div>
      </contentTechno>
    </section>
  );
};


