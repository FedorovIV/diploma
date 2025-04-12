import { ChangeEvent, FormEvent, useState } from "react";
import CategoriaService from "../../shared/services/CategoriaService";

const AddCategoria = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [name, setName] = useState<string>("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedImage(files[0]);
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedImage) {
      alert("Please select a image first!");
      return;
    }

    try {
      await CategoriaService.addCategoria({ image: selectedImage, name: name });
      setSelectedImage(null);
      setName("");
    } catch (e: unknown) {
      console.log(e);
    }
  };

  return (
    <form className="flex flex-col w-fit gap-2 p-3 border-dotted border-[2px] border-black" onSubmit={handleSubmit}>
      <div className="w-full flex justify-between ">
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div className="w-full flex justify-between">
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <button className="p-3 rounded-md bg-black text-white">Add</button>
    </form>
  );
};

export default AddCategoria;
