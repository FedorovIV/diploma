import useSWR from "swr";
import { API_URL, defaultFetcher } from "../../shared/http";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SearchDTO } from "../../shared/models/search/SearchDTO";

const Search = () => {
  const [isBlockOpen, setBlockOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { data } = useSWR<SearchDTO>(
    `${API_URL}/rest/search/getAll`,
    defaultFetcher
  );

  const [filtredData, setFiltredData] = useState<SearchDTO>({} as SearchDTO);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);

    if (!value) {
      setFiltredData({} as SearchDTO);
      setBlockOpen(false);

      return;
    }
    const newFiltred: SearchDTO = {} as SearchDTO;

    newFiltred.fileDtoList =
      data?.fileDtoList.filter((file) => {
        return file.title.toLowerCase().includes(value);
      }) ?? [];

    newFiltred.categoryDTOList =
      data?.categoryDTOList.filter((category) => {
        return category.name.toLowerCase().includes(value);
      }) ?? [];

    setFiltredData(newFiltred);
    setBlockOpen(true);
  };

  const isFiltredDataEmpty = (data: SearchDTO): boolean => {
    try {
      if (data.categoryDTOList.length > 0 || data.fileDtoList.length > 0) {
        return false;
      } else return true;
    } catch (e: unknown) {
      return true;
    }
  };

  const handleChoosed = () => {
    setBlockOpen(false);
    setInputValue("");
  };

  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      elementRef.current &&
      !elementRef.current.contains(event.target as Node)
    ) {
      setBlockOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="w-full h-[40px] flex flex-col" ref={elementRef}>
      <input
        className="w-full h-[40px] rounded-md p-3 border-2 border-black"
        placeholder="Search..."
        onChange={handleChange}
        value={inputValue}
      />
      {isBlockOpen && (
        <div
          className="w-full bg-white flex flex-col mt-[2px]rounded-md shadow-xl rounded-md"
          onClick={handleChoosed}
        >
          {isFiltredDataEmpty(filtredData) ? (
            <p>Nothing was found </p>
          ) : (
            <>
              <ul className="w-full">
                {filtredData?.fileDtoList?.map((value) => (
                  <li key={value.id} className="w-full">
                    <Link to={`/video/${value.id}`}>
                      <div className="w-full hover:bg-slate-400 transition-all">
                        <p className="w-fit underline font-bold p-2">
                          {value.title}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="w-full">
                {filtredData?.categoryDTOList?.map((value) => (
                  <li key={value.id} className="w-full">
                    <Link to={`/category/${value.name}`}>
                      <div className="w-full hover:bg-slate-400 transition-all px-2">
                        <p className="py-1 px-2 bg-slate-700 text-white w-fit rounded-md mb-1">
                          {value.name}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
