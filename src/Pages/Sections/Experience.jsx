import { ItemStudy } from "../../Components/ItemStudy";


export const Experience = () => {
    return (
          <section className="w-full h-auto  flex flex-col items-center justify-center gap-8 px-4 py-8 sm:px-6 sm:py10 md:px-8 md:py-12 max-w-screen-lg mx-auto bg-[#0A192F]">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Mis Estudios</h2>
            <div  className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl">
              <ItemStudy title="Educación Primaria" institucion="Institución educativa Camara Junior" año="2017" />
              <ItemStudy title="Bachillerato" institucion="Institución educativa Camara Junior" año="2023" />
              <ItemStudy title="Tecnologo" institucion="SENA" año="Actualidad" />
              <ItemStudy title="Universidad" institucion="Universidad del Quindío" año="Actualidad" />
              <ItemStudy title="Nivel de ingles" institucion="Actual:" año="A2" />
            </div>
          </section>
    );
};
