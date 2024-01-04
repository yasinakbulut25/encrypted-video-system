import { Card, CardFooter, Image } from "@nextui-org/react";
import { Link as LinkRouter } from "react-router-dom";
import { useEduContext } from "../context/EduContext";

function Educations() {
  const { educations } = useEduContext();
  return (
    <div className="px-4 mt-8">
      <h2 className="text-center mb-8 text-4xl font-bold tracking-tight leading-none xl:text-5xl">
        <span className="relative text-secondary text-after px-2">Videolu</span>{" "}
        Egitimler
      </h2>
      <div className="grid gap-4 grid-cols-10">
        {educations.map((edu) => {
          return (
            <Card
              key={edu.id}
              isFooterBlurred
              className="w-full col-span-12 sm:col-span-5 aspect-video"
            >
              <LinkRouter to={"/egitim/" + edu.link}>
                <Image
                  isZoomed
                  removeWrapper
                  width={150}
                  alt={edu.title}
                  className="z-0 w-full h-full object-cover"
                  src={edu.image}
                />
                <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 grid grid-cols-10 border-zinc-100/50 z-10 justify-between">
                  <div className="w-full relative col-span-10 md:col-span-8">
                    <h2 className=" text-white font-medium text-2xl my-2">
                      {edu.title}
                    </h2>
                  </div>
                  <svg
                    className="hidden md:block absolute right-6"
                    fill="#fff"
                    viewBox="0 0 16 16"
                    height="1.75rem"
                    width="1.75rem"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
                    />
                  </svg>
                </CardFooter>
              </LinkRouter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Educations;
