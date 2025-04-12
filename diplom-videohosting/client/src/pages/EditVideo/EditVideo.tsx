import { useParams } from "react-router-dom";
import useSWR from "swr";
import VideoInfo from "../../shared/models/video/VideoInfo";
import { API_URL, defaultFetcher } from "../../shared/http";
import { ChangeEvent, useEffect, useState } from "react";
import AdminVideoService from "../../shared/services/AdminVideoService";
import { EditVideoDto } from "../../shared/models/video/EditVideoDto";

const EditVideo = () => {
  const { videoId } = useParams();
  const { data } = useSWR<VideoInfo>(
    `${API_URL}/rest/file/getById/${videoId}`,
    defaultFetcher
  );

  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");

  
  useEffect(() => {
    if (data) {
      setDescription(data.description ?? "");
      setTags(data.tags ?? []);
      setCategories(data.categories ?? []);
      setTitle(data.title ?? "");
    }
  }, [data]);

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleTagsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTags(event.target.value.split(",").map((tag) => tag.trim()));
  };

  const handleCategoriesChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategories(
      event.target.value.split(",").map((category) => category.trim())
    );
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleUpload = async () => {
    const editVideoDto: EditVideoDto = {
      description,
      tags,
      categories,
      title,
    };

    try {
      await AdminVideoService.EditVideo(editVideoDto, videoId ?? "");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-fit flex flex-col gap-3 pt-3 pl-3">
      <div className="w-full flex justify-between">
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div className="w-full flex justify-between">
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="w-full flex justify-between">
        <label>Tags (comma separated):</label>
        <input
          type="text"
          value={tags?.join(", ")}
          onChange={handleTagsChange}
        />
      </div>
      <div className="w-full flex justify-between">
        <label>Categories (comma separated):</label>
        <input
          type="text"
          value={categories?.join(", ")}
          onChange={handleCategoriesChange}
        />
      </div>
      <div className="w-full flex justify-between">
        <button
          onClick={handleUpload}
          className="p-2 text-white rounded-md bg-slate-800 "
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditVideo;
