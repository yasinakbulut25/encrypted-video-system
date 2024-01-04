import { Chip } from "@nextui-org/react";
import { useEduContext } from "../context/EduContext";
import Profile from "../assets/img/profile.jpg";

function ProfileCard() {
  const { profileLinks } = useEduContext();
  return (
    <div className="px-4 py-5 flex flex-col gap-3 border-t border-b md:border md:rounded">
      <div className="flex items-center gap-2">
        <img src={Profile} className="h-12 w-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-gray-700 text-sm">
            Beslenme Dunyasi
          </p>
          <p className="font-semibold text-gray-500 text-xs">Diyetisten</p>
        </div>
      </div>
      <p className="text-gray-700 py-3">
        Merhaba, ben eğitim videolarının sahibiyim ve tutkulu bir eğitmenim.
        Sizinle paylaştığım içeriklerde, bilgiyi sade ve etkili bir şekilde
        iletmek amacıyla çaba gösteriyorum. Her bir videoyu öğrenmeye ve
        gelişmeye olan inancımla hazırlıyorum.
      </p>
      <div className="flex gap-4 flex-col">
        <a target="_blank" href={profileLinks.instagram} rel="noreferrer">
          <Chip
            className="max-w-none w-full text-center py-5"
            variant="flat"
            color="secondary"
          >
            Instagram
          </Chip>
        </a>
        <a target="_blank" href={profileLinks.whatsapp} rel="noreferrer">
          <Chip
            className="max-w-none w-full text-center py-5"
            variant="flat"
            color="success"
          >
            Whatsapp
          </Chip>
        </a>
        <a target="_blank" href={profileLinks.youtube} rel="noreferrer">
          <Chip
            className="max-w-none w-full text-center py-5"
            variant="flat"
            color="danger"
          >
            YouTube
          </Chip>
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
