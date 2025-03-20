import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6"
 
 export const ContactIcon = () => {
     return(
         <div className="flex gap-4 justify-center items-center">
              <a href="https://www.linkedin.com/in/jhonatan-cardona-a421a92b9/" >
                  <FaLinkedin size="40" className="text-3xl text-gray-600 hover:text-blue-500 transition"/> 
             </a>
             <a href="https://github.com/Jhonatan-Leon" className="text-black hover:text-orange-700">
                 <FaGithub size="40" />
             </a>
             <a href="mailto:c.jhonatan2007@gmail.com" className="text-gray-600 hover:text-red-700">
                 <FaEnvelope size="40" />
             </a>
         </div>
     )
 }