import { useParams, useSearchParams } from "react-router-dom";
import useSWR from "swr";
import VideoInfo from "../../shared/models/video/VideoInfo";
import { API_URL, defaultFetcher } from "../../shared/http";
import Video from "../../widgets/Video/Video";
import Pagination from "../../widgets/Pagination/Pagination";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const { data } = useSWR<VideoInfo[]>(
    `${API_URL}/rest/file/getByCategory/${categoryName}`,
    defaultFetcher
  );
  const [searchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "12");

  return (
    <div className="w-full flex flex-col">
      <div className="index__container">
        {data &&
          data
            .slice((page - 1) * limit, page * limit)
            .map((value, index) => <Video videoInfo={value} key={index} />)}
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

export default CategoryPage;
