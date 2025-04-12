import { AxiosProgressEvent, AxiosResponse } from "axios";
import $api from "../http";
import { UploadVideoDTO } from "../models/video/UploadVideoDto";
import { EditVideoDto } from "../models/video/EditVideoDto";

export default class AdminVideoService {

  static async uploadVideo(
    uploadVideoDto: UploadVideoDTO,
    onUploadProgress: (progressEvent: AxiosProgressEvent) => void
  ): Promise<AxiosResponse> {
    const formData = new FormData();
    formData.append("file", uploadVideoDto.file);
    formData.append("preview", uploadVideoDto.preview);
    formData.append("teaser", uploadVideoDto.teaser);
    formData.append("description", uploadVideoDto.description);
    formData.append("title", uploadVideoDto.title);

    uploadVideoDto.tags.forEach((tag, index) => {
      formData.append(`tags[${index}]`, tag);
    });

    uploadVideoDto.categories.forEach((category, index) => {
      formData.append(`categories[${index}]`, category);
    });

    return $api.post("/rest/file/admin/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  static async EditVideo(editVideDto: EditVideoDto, videoId:string): Promise<AxiosResponse> {
    return $api.post(`/rest/file/admin/edit/${videoId}`, editVideDto);
  }

  static async DeleteVideo(videoId:string): Promise<AxiosResponse> {
    return $api.delete(`/rest/file/admin/delete/${videoId}`);
  }

  static async WatchVideo(videoId:string): Promise<AxiosResponse> {
    return $api.post(`/rest/file/watch/${videoId}`);
  }

}
