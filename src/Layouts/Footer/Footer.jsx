import { ContactSection } from "../Contact/ContactSection"
 
 export const Footer = () => {
   return (
     <footer className=" w-screen h-30 bg-gray-900 text-white py-4 flex flex-row justify-center items-center absolute bottom-0">
         <div className="w-[67%] min-xs:w-[90%]: h-auto flex justify-between items-center">
           <p  className="text-sm"> © 2025 Jhonatan Cardona León. Derechos reservados </p>
           <ContactSection />
       </div>
     </footer>
   )
 }
