import { useEffect, useState } from "react";
import CategoriaService from "../../shared/services/CategoriaService";
import CategoriaBlock from "./CategoriaBlock";
import { Categoria } from "../../shared/models/categoria/Categoria";
import AddCategoria from "./AddCategoria";
import { RootState } from "../../shared/stores/store";
import { useSelector } from "react-redux";
import { UserRoles } from "../../shared/auth/AuthController";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState<Categoria[]>([]);
  const fetchCategories = async () => {
    setCategories(await CategoriaService.getAll());
  };
  const { user } = useSelector((state: RootState) => state.authController);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col w-full ml-2 mt-2">
      {user?.role === UserRoles.ADMIN && <AddCategoria />}
      <div className="categories__container">
        {categories?.map((value) => (
          <Link  key={value.id} to={`/category/${value.name}`}>
            <CategoriaBlock categoria={value} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
