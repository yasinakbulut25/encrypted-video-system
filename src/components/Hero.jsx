import { useEduContext } from "../context/EduContext";
import LoginForm from "./LoginForm";
import { Chip } from "@nextui-org/react";

function Hero() {
  const { profileLinks } = useEduContext();
  return (
    <section className="grid max-w-screen-xl px-4 md:pt-4 pt-8 md:pb-8 pb-8 mx-auto lg:gap-8 md:grid-cols-12">
      <div className="place-self-center text-center md:text-left md:col-span-7 lg:col-span-6">
        <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Bilinçli Beslenmeyle <br />
          <span className="relative text-secondary text-after px-2">
            Yepyeni
          </span>{" "}
          Bir Siz!
        </h1>

        <p className="text-balance max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
          Sağlıklı bir yaşamın kapılarını açmak için bilinçli beslenmenin gücünü
          keşfedin! Yepyeni bir siz olmak için bu keyifli yolculuğa bugün
          başlayın.
        </p>
        <div className="flex gap-4 flex-wrap md:justify-start justify-center">
          <a target="_blank" href={profileLinks.instagram} rel="noreferrer">
            <Chip variant="flat" color="secondary">
              Instagram
            </Chip>
          </a>
          <a target="_blank" href={profileLinks.whatsapp} rel="noreferrer">
            <Chip variant="flat" color="success">
              Whatsapp
            </Chip>
          </a>
          <a target="_blank" href={profileLinks.youtube} rel="noreferrer">
            <Chip variant="flat" color="danger">
              YouTube
            </Chip>
          </a>
        </div>
      </div>

      <div className="hidden md:block w-full place-self-center md:col-span-5 lg:col-span-6">
        <h3 className="max-w-md mx-auto mb-8 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl">
          <span className="relative text-after text-secondary">Giriş</span> Yap
        </h3>
        <LoginForm />
      </div>
    </section>
  );
}

export default Hero;
