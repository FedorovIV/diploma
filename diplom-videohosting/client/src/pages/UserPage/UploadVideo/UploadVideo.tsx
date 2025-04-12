import { ChangeEvent, useState } from "react";
import AdminVideoService from "../../../shared/services/AdminVideoService";
import { UploadVideoDTO } from "../../../shared/models/video/UploadVideoDto";
import { AxiosProgressEvent } from "axios";

const UploadVideo = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedPreview, setSelectedPreview] = useState<File | null>(null);
  const [selectedTeaser, setSelectedTeaser] = useState<File | null>(null);

  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");

  const [progress, setProgress] = useState(0);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handlePreviewChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedPreview(files[0]);
    }
  };

  const handleTeaserChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedTeaser(files[0]);
    }
  };

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
    setProgress(0);
    if (!selectedFile) {
      alert("Please select a video first!");
      return;
    }

    if (!selectedPreview) {
      alert("Please select a preview first!");
      return;
    }

    if (!selectedTeaser) {
      alert("Please select a preview first!");
      return;
    }

    const uploadVideoDto: UploadVideoDTO = {
      preview: selectedPreview,
      file: selectedFile,
      teaser: selectedTeaser,
      description,
      tags,
      title,
      categories,
    };

    try {
      await AdminVideoService.uploadVideo(uploadVideoDto, progressHandler);
    } catch (error) {
      console.log(error);
    }
  };

  const progressHandler = (progressEvent: AxiosProgressEvent) => {
    console.log(progressEvent.progress);
    setProgress(progressEvent.progress ?? 0);
  };

  return (
    <div className="w-fit flex flex-col gap-2 border-dashed border-[2px] p-2 border-black">
      <h2>Video Uploader</h2>
      <div className="w-full flex justify-between">
        <label>Video:</label>
        <input type="file" accept="video/*" onChange={handleFileChange} />
      </div>
      <div className="w-full flex justify-between">
        <label>Teaser:</label>
        <input type="file" accept="video/*" onChange={handleTeaserChange} />
      </div>
      <div className="w-full flex justify-between">
        <label>Preview:</label>
        <input type="file" accept="image/*" onChange={handlePreviewChange} />
      </div>
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
          value={tags.join(", ")}
          onChange={handleTagsChange}
        />
      </div>
      <div className="w-full flex justify-between">
        <label>Categories (comma separated):</label>
        <input
          type="text"
          value={categories.join(", ")}
          onChange={handleCategoriesChange}
        />
      </div>
      <div className="w-full flex justify-between">
        <button
          onClick={handleUpload}
          className="p-2 text-white rounded-md bg-slate-800 "
        >
          Upload
        </button>
      </div>
      <div className="flex justify-between items-center">
        <p>Progress</p>
        <div className="w-[300px] border-[2px] border-solid h-fit">
          <div className={`h-3 bg-green-600`} style={{width:`${progress*100}%`}}></div>
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
