import { Link, useParams } from "react-router-dom";
import VideoPlayer from "../../widgets/Video/VideoPlayer";
import useSWR from "swr";
import VideoInfo from "../../shared/models/video/VideoInfo";
import { API_URL, defaultFetcher } from "../../shared/http";
import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";
import { RootState } from "../../shared/stores/store";
import { UserRoles } from "../../shared/auth/AuthController";
import { MdDelete } from "react-icons/md";
import AdminVideoService from "../../shared/services/AdminVideoService";
import { useEffect } from "react";

const WatchVideoPage = () => {
  const { videoId } = useParams();
  const { data } = useSWR<VideoInfo>(
    `${API_URL}/rest/file/getById/${videoId}`,
    defaultFetcher
  );
  const role = useSelector(
    (state: RootState) => state.authController.user?.role
  );

  useEffect(() => {
    AdminVideoService.WatchVideo(videoId ?? "");
  }, [videoId]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      try {
        await AdminVideoService.DeleteVideo(videoId ?? "");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col w-full gap-3 px-3 mt-3">
        <div className="w-full h-fit  flex justify-center gap-4">
          <div className="w-full md:w-4/5 bg-inherit shadow-xl aspect-video">
            <VideoPlayer url={data ? data.url : ""} />
          </div>

          {role === UserRoles.ADMIN && (
            <div className="flex gap-3 h-fit">
              <Link to={`/edit/${videoId}`}>
                <CiEdit size={40} />
              </Link>
              <button onClick={handleDelete}>
                <MdDelete size={40} color="rgb(129, 0, 0)" />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-3xl">Tags:</h2>
          <div className="flex flex-grow gap-2">
            {data?.tags?.map((value, index) => (
              <Link to={`/tags/${value}`} key={index}>
                <h3 className="p-2 font-bold bg-gray-700 text-white rounded-xl">
                  {`#${value}`}
                </h3>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-3xl">Categories:</h2>
          <div className="flex flex-grow gap-2">
            {data?.categories?.map((value, index) => (
              <Link to={`/categories/${value}`} key={index}>
                <h3 className="p-2 font-bold bg-gray-700 text-white rounded-xl">
                  {`${value}`}
                </h3>
              </Link>
            ))}
          </div>
        </div>
        <article className=" md:flex-grow  w-full">
          <h2 className=" text-3xl font-bold">{data?.title}</h2>
          <h3 className="width-[300px] break-words text-xl">
            {data?.description}
          </h3>
        </article>
        <p className="font-bold text-2xl">
          Views: <span className="  font-normal">{data?.views}</span>
        </p>
      </div>
    </div>
  );
};

export default WatchVideoPage;
