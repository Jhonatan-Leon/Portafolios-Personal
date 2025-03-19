 import { NavLink } from "react-router-dom"

export const Items = ({content = "Desconocido", ruta = "/Home"}) => {
    return (
        <li className="font-bold"><NavLink to= {ruta}>{content}</NavLink></li>
    )
}