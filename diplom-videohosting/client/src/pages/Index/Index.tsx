import useSWR from "swr";
import Video from "../../widgets/Video/Video";
import { API_URL } from "../../shared/http";
import VideoInfo from "../../shared/models/video/VideoInfo";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../widgets/Pagination/Pagination";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Index = () => {
  const { data } = useSWR<VideoInfo[]>(`${API_URL}/rest/file`, fetcher);
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "12");


  return (
    <div className="w-full flex flex-col">
      <div className="index__container">
        {data &&
          data.slice((page-1)*limit, page*limit).map((value, index) => <Video videoInfo={value} key={index} />)}
      </div>
      <div className="w-full flex justify-center mt-4">
        <Pagination
          total={data?.length ?? 0}
          limit={limit}
          currentPage={page}
        />
      </div>
    </div>
  );
};

export default Index;
