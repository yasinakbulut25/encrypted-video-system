import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CryptoJS from "crypto-js";
import Plyr from "plyr";
import { useEduContext } from "../context/EduContext";
import EducationVideos from "./EducationVideos";
import ProfileCard from "./ProfileCard";
import Loading from "./Loading";
import Error from "./Error";

function VideoSystem() {
  new Plyr("#VideoPlyr");

  const { educations, allVideos } = useEduContext();
  const { educationUrl, videoUrl } = useParams();
  const [findEduItem, setEduItem] = useState([]);
  const [findEduVideos, setFindVideos] = useState([]);
  const [videoItem, setVideo] = useState();
  const [videoData, setVideoData] = useState();
  const [isLoading, setIsLoading] = useState(null);
  const secretKeyForCrypto = "##SECRET_KEY_YOU_WANT##";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const findEdu = educations.find((edu) => edu.link === educationUrl);
        setEduItem(findEdu);

        const eduId = findEdu.id;
        const videos = allVideos.filter((video) => video.eduId === eduId);
        setFindVideos(videos);

        const findVideo = allVideos.find((video) => video.link === videoUrl);
        setVideo(findVideo);
        setVideoData(findVideo.url);
      } catch (error) {
        setIsLoading(false);
        return <Error />;
      }
      setIsLoading(false);
    };

    fetchData();
  }, [allVideos, educationUrl, educations, videoUrl]);


  useEffect(() => {
    const handleEncrypt = () => {
      if (videoData) {
        CryptoJS.AES.encrypt(videoData, secretKeyForCrypto);
        const encodedString = encodeURIComponent(secretKeyForCrypto);
        const base64Encoded = btoa(encodedString);
        setVideoData(base64Encoded);
      }
    };

    handleEncrypt();
  }, [videoData, videoItem, videoUrl]);

  return (
    <main className="mt-10">
      {isLoading ? (
        <Loading />
      ) : videoItem && findEduVideos && findEduItem ? (
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:space-x-12 mt-12">
          <div className="w-full lg:w-2/3">
            <h1 className="text-2xl text-gray-800 font-semibold mb-4">
              {videoItem.title}
            </h1>
            <video id="VideoPlyr" controls poster={videoItem.poster}>
              <source src={videoData} type="video/mp4" />
            </video>
            <h2 className="text-2xl text-gray-800 font-semibold my-4">
            {videoItem.title}
            </h2>
            <div className="detail-content mb-8">
              <div dangerouslySetInnerHTML={{ __html: findEduItem.exp }}></div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:sticky top-24">
            <div className="lg:sticky top-24 ">
              <EducationVideos
                educationUrl={educationUrl}
                videos={findEduVideos}
                videoSystem={true}
              />
              <ProfileCard />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
}

export default VideoSystem;
