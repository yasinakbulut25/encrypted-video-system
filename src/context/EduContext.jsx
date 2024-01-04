import { useContext, createContext, useState, useEffect } from "react";

const EduContext = createContext();

function Provider({ children }) {
  const [educations, setEducations] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const siteUrl = window.location.origin;

  const profileLinks = {
    instagram: "https://www.instagram.com/",
    whatsapp: "https://api.whatsapp.com/send?phone=+90&text=Merhaba!",
    youtube: "https://www.youtube.com/",
  };

  useEffect(() => {

    const tempEdu = [
      {
        id: 1,
        title: "Sağlıklı Beslenmenin Temelleri",
        exp: "Sağlıklı beslenme, vücudun ihtiyaç duyduğu besinleri dengeli ve doğru bir şekilde almayı içerir. Bu eğitimde, beslenme piramidi, doğru besin seçimleri ve günlük alınması gereken besin miktarları hakkında detaylı bilgiler sunulacaktır.",
        image: `${siteUrl}/src/assets/img/1.png`,
        link: "saglikli-beslenmenin-temelleri",
      },
      {
        id: 2,
        title: "Protein Zengini Beslenme Yöntemleri",
        exp: "Protein, vücudumuzun temel yapı taşlarından biridir. Bu eğitimde, protein içeren besinlerin seçimi, protein ihtiyacının nasıl karşılanacağı ve sağlıklı bir yaşam için önemli olan protein zengini beslenme yöntemleri anlatılacaktır.",
        image: `${siteUrl}/src/assets/img/2.png`,
        link: "protein-zengini-beslenme-yontemleri",
      },
      {
        id: 3,
        title: "Vücudumuz için Vitamin ve Mineraller",
        exp: "Vitaminler ve mineraller, vücudumuzun düzgün bir şekilde çalışması için önemlidir. Bu eğitimde, çeşitli vitamin ve minerallerin işlevleri, hangi besinlerde bulundukları ve eksiklik durumunda ortaya çıkabilecek sorunlar hakkında bilgiler verilecektir.",
        image: `${siteUrl}/src/assets/img/3.png`,
        link: "vucudumuz-icin-vitamin-ve-mineraller",
      },
      {
        id: 4,
        title: "Dengeli Diyet ve İdeal Beslenme",
        exp: "Dengeli bir diyet, vücudun ihtiyaç duyduğu tüm besin öğelerini içeren bir beslenme şeklidir. Bu eğitimde, dengeli bir diyetin nasıl oluşturulacağı, ideal beslenme alışkanlıkları ve sağlıklı yaşam için pratik öneriler sunulacaktır.",
        image: `${siteUrl}/src/assets/img/4.png`,
        link: "dengeli-diyet-ve-ideal-beslenme",
      },
      {
        id: 5,
        title: "Sağlıklı Tarifler ve Beslenme Önerileri",
        exp: "Sağlıklı beslenme, lezzetli tariflerle birleştiğinde daha keyifli hale gelir. Bu eğitimde, sağlıklı tariflerin yanı sıra beslenme önerileri ve pratik mutfak ipuçları paylaşılacaktır.",
        image: `${siteUrl}/src/assets/img/5.png`,
        link: "saglikli-tarifler-ve-beslenme-onerileri",
      },
  ];
  
  
    const tempVideos = [
      {
        id: 1,
        eduId: 1,
        title: "Egitim Videosu Basligi",
        link: "egitim-videosu-basligi",
        minute: "10",
        second: "29",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/1.png`
      },
      {
        id: 2,
        eduId: 1,
        title: "Egitim Videosu Basligi 2",
        link: "egitim-videosu-basligi-2",
        minute: "17",
        second: "42",
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster: `${siteUrl}/src/assets/img/1.png`
      },
      {
        id: 3,
        eduId: 1,
        title: "Egitim Videosu Basligi 3",
        link: "egitim-videosu-basligi-3",
        minute: "15",
        second: "18",
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        poster: `${siteUrl}/src/assets/img/1.png`
      },
      {
        id: 4,
        eduId: 1,
        title: "Egitim Videosu Basligi 4",
        link: "egitim-videosu-basligi-4",
        minute: "29",
        second: "37",
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: `${siteUrl}/src/assets/img/1.png`
      },
      {
        id: 5,
        eduId: 2,
        title: "Egitim Videosu Basligi",
        link: "egitim-videosu-basligi",
        minute: "10",
        second: "41",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/2.png`
      },
      {
        id: 6,
        eduId: 2,
        title: "Egitim Videosu Basligi 2",
        link: "egitim-videosu-basligi-2",
        minute: "17",
        second: "25",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/2.png`
      },
      {
        id: 7,
        eduId: 2,
        title: "Egitim Videosu Basligi 3",
        link: "egitim-videosu-basligi-3",
        minute: "15",
        second: "53",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/2.png`
      },
      {
        id: 8,
        eduId: 2,
        title: "Egitim Videosu Basligi 4",
        link: "egitim-videosu-basligi-4",
        minute: "29",
        second: "32",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/2.png`
      },
      {
        id: 9,
        eduId: 3,
        title: "Egitim Videosu Basligi",
        link: "egitim-videosu-basligi",
        minute: "10",
        second: "29",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/3.png`
      },
      {
        id: 10,
        eduId: 3,
        title: "Egitim Videosu Basligi 2",
        link: "egitim-videosu-basligi-2",
        minute: "17",
        second: "21",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/3.png`
      },
      {
        id: 11,
        eduId: 3,
        title: "Egitim Videosu Basligi 3",
        link: "egitim-videosu-basligi-3",
        minute: "15",
        second: "36",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/3.png`
      },
      {
        id: 12,
        eduId: 3,
        title: "Egitim Videosu Basligi 4",
        link: "egitim-videosu-basligi-4",
        minute: "29",
        second: "45",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/3.png`
      },
      {
        id: 13,
        eduId: 4,
        title: "Egitim Videosu Basligi",
        link: "egitim-videosu-basligi",
        minute: "10",
        second: "55",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/4.png`
      },
      {
        id: 14,
        eduId: 4,
        title: "Egitim Videosu Basligi 2",
        link: "egitim-videosu-basligi-2",
        minute: "17",
        second: "48",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/4.png`
      },
      {
        id: 15,
        eduId: 4,
        title: "Egitim Videosu Basligi 3",
        link: "egitim-videosu-basligi-3",
        minute: "15",
        second: "32",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/4.png`
      },
      {
        id: 16,
        eduId: 4,
        title: "Egitim Videosu Basligi 4",
        link: "egitim-videosu-basligi-4",
        minute: "29",
        second: "23",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/4.png`
      },
      {
        id: 17,
        eduId: 5,
        title: "Egitim Videosu Basligi",
        link: "egitim-videosu-basligi",
        minute: "10",
        second: "16",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/5.png`
      },
      {
        id: 18,
        eduId: 5,
        title: "Egitim Videosu Basligi 2",
        link: "egitim-videosu-basligi-2",
        minute: "17",
        second: "44",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/5.png`
      },
      {
        id: 19,
        eduId: 5,
        title: "Egitim Videosu Basligi 3",
        link: "egitim-videosu-basligi-3",
        minute: "15",
        second: "24",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/5.png`
      },
      {
        id: 20,
        eduId: 5,
        title: "Egitim Videosu Basligi 4",
        link: "egitim-videosu-basligi-4",
        minute: "29",
        second: "51",
        url: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        poster: `${siteUrl}/src/assets/img/5.png`
      },
    ];

    setEducations(tempEdu);
    setAllVideos(tempVideos);
  }, [siteUrl]);

  const sharedValuesAndMethods = { educations, setEducations, profileLinks, allVideos };

  return (
    <EduContext.Provider value={sharedValuesAndMethods}>
      {children}
    </EduContext.Provider>
  );
}

const useEduContext = () => useContext(EduContext);

export { Provider, useEduContext };
export default EduContext;
