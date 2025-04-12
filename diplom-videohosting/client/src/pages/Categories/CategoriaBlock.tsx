import React from "react";
import { Categoria } from "../../shared/models/categoria/Categoria";

interface CategoriaProps {
  categoria: Categoria;
}

const CategoriaBlock: React.FC<CategoriaProps> = ({ categoria }) => {
  return (
    <div className="w-[360px] aspect-video shadow-md relative">
      <img src={categoria.imageUrl} className="w-full h-full object-cover" />
      <div className=" absolute bottom-0 h-50px bg-[rgb(0,0,0,0.7)] w-full text-white pl-4 p-1 font-bold">
        <h2>{categoria.name}</h2>
      </div>
    </div>
  );
};

export default CategoriaBlock;
