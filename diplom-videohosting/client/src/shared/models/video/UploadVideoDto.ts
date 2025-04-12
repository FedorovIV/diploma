export interface UploadVideoDTO {
    file:File;
    preview:File
    teaser:File;
    description:string;
    tags: string[];
    title:string;
    categories:string[];
  }