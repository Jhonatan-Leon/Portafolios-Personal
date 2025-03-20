import { Button } from "../../Components/Button";
 import { Paragraph } from "../../Components/paragraph";
 import { ProfileImage } from "../../Components/ProfileImage";
 import { Title } from "../../Components/Title";
 import { ContactSection } from "../../Layouts/Contact/ContactSection";
 
 
 
 export const Home = () => {
    return (
      <section className="w-full h-[73vh] flex flex-col sm:flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12 max-w-screen-lg mx-auto overflow-hidden">
        <ProfileImage />
        <div className="text-center sm:text-center md:text-left">
          <Title />
          <Paragraph parrafo="Estudiante de segundo semestre de Ingeniería de Sistemas en la Universidad del Quindío,
          Estudiante Tecnólogo en Análisis y Desarrollo de Software en el SENA. Con ganas de seguir aprendiendo más, enfocando mi especialización a back-end."/>
          
          <div className="mt-4 sm:mt-6">
            <Button />
          </div>
  
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <h2 className="px-3 py-2 text-primary hover:bg-primary hover:text-blue-500 transition">
              Contacto:
            </h2>
            <ContactSection className="" />
          </div>
        </div>
      </section>
    );
  };
  
  