import { Paragraph } from "./paragraph"

export const ItemStudy = ({title, institucion, año}) => {
    return (
        <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-semibold text-primary"> {title} </h3>
            <Paragraph parrafo={institucion}/> 
            <Paragraph parrafo={año}/>

        </div>
    )
}