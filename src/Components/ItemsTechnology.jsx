import { Paragraph } from "./paragraph";
import { ProgressBar } from "../Hooks/ProgressBar";

export const Technology = ({ name, icon, level }) => {
    return (
        <div className="flex flex-col items-center gap-2 w-24">
            {icon}
            <Paragraph parrafo={name} />
            <ProgressBar porcentaje={level} /> 
        </div>
    );
};