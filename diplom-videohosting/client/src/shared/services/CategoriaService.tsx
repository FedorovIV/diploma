import { AxiosResponse } from "axios";
import { AddCategoriaDto } from "../models/categoria/AddCategoriaDto";
import $api from "../http";
import { Categoria } from "../models/categoria/Categoria";

export default class CategoriaService {
    static async addCategoria(
      addCategoriaDto: AddCategoriaDto
    ): Promise<AxiosResponse> {

      const formData = new FormData();
      formData.append("image", addCategoriaDto.image);
      formData.append("name", addCategoriaDto.name);

  
      return $api.post("/rest/category/admin/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  
    static async deleteCategoria(categoriaId:string): Promise<AxiosResponse> {
      return $api.delete(`/rest/category/admin/delete/${categoriaId}`);
    }
   
    static async getAll(): Promise<Categoria[]> {
        try {
            return (await $api.get(`/rest/category/getAll`)).data
        } catch (e:unknown) {
            console.log(e);
        } 
        return [];
    }

  
  }
  