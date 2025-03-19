import { Button } from "../../Components/Button";
import { Paragraph } from "../../Components/paragraph";
import { ProfileImage } from "../../Components/ProfileImage";
import { Title } from "../../Components/Title";
import { ContactSection } from "../../Layouts/Contact/ContactSection";



export const Home = () => {
    return (
    <section className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 max-w-screen-lg mx-auto overflow-hidden">
        <ProfileImage />
        <div className="text-center md:text-left">
            <Title />
            <Paragraph parrafo="Estudiante de segundo semestre de Ingenieria de sistemas en la Universidad del Quindío,
            Estudiante Tecnologo de análisis y desarrollo de Software en el Servicio Nacional de Aprendizaje (SENA), Con
            ganas de seguir aprendiendo más, Enfocando mi especialización a back-end. "/>
            <div className="mt-6" >
                <Button />
            </div>
            <div className="mt-6 flex items-center gap-6">
                <h2 className="px-4 py-2 text-primary hover:bg-primary hover:text-blue-500 transition"> Contacto: </h2>
                <ContactSection className=""/>
            </div>
        </div>
    </section>
    );
};