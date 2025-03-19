import { useEffect, useState } from "react";
import { Progress } from "../Components/Progress";


export const ProgressBar = ({ porcentaje = 0 }) => {
  const [progress, setProgress] = useState(0);
  console.log("Valor de barra:", porcentaje);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(porcentaje); 
    }, 500);

    return () => clearTimeout(timeout);
  }, [porcentaje]);

  return <Progress progress={progress} />;

};