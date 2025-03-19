import { Items } from "../../Components/Items"

export const Navbar = () => {
    return (
        <nav   className=" w-70 sm:w-80 h-auto">
            <ul className="flex items-center justify-between p-2.5">
                <Items content="Portafolio" ruta = "/"  />
                <Items content="Estudios" ruta= "/Experience" />
                <Items content="Tecnologias" ruta ="/Technologias" />
            </ul>
        </nav>
    )
}
