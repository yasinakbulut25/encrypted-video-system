import { Listbox, ListboxItem } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function EducationVideos({ educationUrl, videoSystem, videos }) {
  return (
    <>
      <h2 className="text-2xl text-gray-800 font-bold mb-4">
        Eğitim Videoları
      </h2>
      <Listbox
        className="flex p-0 gap-0 bg-content1 lg:max-w-[700px] w-full overflow-visible shadow-small rounded-medium mb-8"
        itemClasses={{
          base: `px-4 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 data-[hover=true]:bg-default-100/80 data-[hover=true]:text-secondary ${
            videoSystem ? "h-14" : "h-20 cursor-default"
          }`,
        }}
      >
        {videos.map((video) => {
          return (
            <ListboxItem
              key={video.id}
              as={NavLink}
              to={`/video/${educationUrl}/${video.link}`}
              className={`listBoxItem py-9 ${
                videoSystem ? "" : " pointer-events-none"
              }`}
              endContent={
                <span className="text-default-400 text-tiny">
                  {`${video.minute < 10 ? "0" + video.minute : video.minute}:${
                    video.second < 10 ? "0" + video.second : video.second
                  }`}
                </span>
              }
              startContent={
                <div
                  className={`bg-secondary/10 text-secondary flex items-center rounded-small justify-center ${
                    videoSystem ? "w-7 h-7" : "w-12 h-12"
                  }`}
                >
                  <svg
                    height={`${videoSystem ? "1rem" : "2rem"}`}
                    viewBox="0 0 24 24"
                    width={`${videoSystem ? "1rem" : "2rem"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-xl"
                  >
                    <path
                      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                      fill="currentColor"
                    />
                    <path d="m9 17 8-5-8-5z" fill="currentColor" />
                  </svg>
                </div>
              }
            >
              <span className={`${videoSystem ? "text-md" : "text-lg"}`}>
                {video.title}
              </span>
            </ListboxItem>
          );
        })}
      </Listbox>
    </>
  );
}

export default EducationVideos;

EducationVideos.propTypes = {
  videoSystem: PropTypes.bool,
  videos: PropTypes.array.isRequired,
  educationUrl: PropTypes.string,
};
