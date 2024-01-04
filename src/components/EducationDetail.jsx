import { Link as LinkRouter, useParams } from "react-router-dom";
import EducationVideos from "./EducationVideos";
import ProfileCard from "./ProfileCard";
import Error from "./Error";
import { useEduContext } from "../context/EduContext";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function EducationDetail() {
  const { educations, allVideos } = useEduContext();
  const { educationUrl } = useParams();
  const [findEduItem, setEduItem] = useState({});
  const [findVideos, setFindVideos] = useState([]);
  const [totalMinute, setTotalMinute] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const findEdu = educations.find((edu) => edu.link === educationUrl);
        setEduItem(findEdu);

        const eduId = findEdu.id;
        const videos = allVideos.filter((video) => video.eduId === eduId);
        setFindVideos(videos);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [allVideos, educationUrl, educations]);

  useEffect(() => {
    let totalMin = 0;
    let totalSec = 0;

    findVideos.map((video) => {
      totalMin += Number(video.minute);
      totalSec += Number(video.second);
    });

    totalMin += Math.ceil(totalSec / 60);
    setTotalMinute(totalMin);
  }, [findVideos]);

  return loading ? (
    <Loading />
  ) : findEduItem && findVideos.length > 0 ? (
    <main className="mt-10">
      <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:space-x-12 mt-12">
        <div className="lg:px-0 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <img
            src={findEduItem.image}
            className="w-full object-cover rounded h-full max-h-96 aspect-video"
          />
        </div>
        <div className="w-full lg:w-1/4 mx-auto flex max-w-screen-sm">
          <div className="bg-secondary/20 min-w-full grid gap-6 grid-cols-2 lg:grid-cols-1 p-8 md:rounded">
            <div className="flex flex-col gap-2 items-center justify-center">
              <span className="text-5xl md:text-7xl lg:text-7xl font-extrabold text-secondary font-number">
                {findVideos.length}
              </span>
              <span className="text-md text-secondary font-number">
                Video İçeriği
              </span>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <span className="text-5xl md:text-7xl lg:text-7xl font-extrabold text-secondary font-number">
                {`${Math.floor(totalMinute / 60)}:${totalMinute % 60}`}
              </span>
              <span className="text-md text-secondary font-number">
                Saat Eğitim
              </span>
            </div>
            <div className="flex flex-col gap-2 lg:col-span-1 col-span-2 items-center justify-center">
              <LinkRouter
                to={`/video/${educationUrl}/${findVideos[0].link}`}
                className="flex items-center justify-center min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium bg-secondary text-secondary-foreground w-full max-w-[300px]"
              >
                Şimdi İzle
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="1em"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="1em"
                  className="flex mx-1 text-current self-center"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </LinkRouter>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="lg:px-0 mt-12 text-gray-700 text-md md:text-lg leading-relaxed w-full lg:w-3/4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-8">
            {findEduItem.title}
          </h2>
          <div className="detail-content mb-8">
            <div dangerouslySetInnerHTML={{ __html: findEduItem.exp }}></div>
          </div>
          <EducationVideos
            educationUrl={educationUrl}
            videos={findVideos}
            videoSystem={false}
          />
        </div>

        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-[400px] lg:sticky top-24">
          <ProfileCard />
        </div>
      </div>
    </main>
  ) : (
    <Error />
  );
}

export default EducationDetail;
