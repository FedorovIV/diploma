import { Categoria } from "../categoria/Categoria";
import VideoInfo from "../video/VideoInfo";

export interface SearchDTO{
    fileDtoList: VideoInfo[];
    categoryDTOList : Categoria[];
}