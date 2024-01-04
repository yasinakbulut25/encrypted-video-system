import { Accordion, AccordionItem } from "@nextui-org/react";
import ChatIcon from "./icons/ChatIcon";

function Faq() {
  const faqs = [
    {
      question: "Eğitim programınıza nasıl kayıt olabilirim?",
      answer:
        'Kayıt işlemleri genellikle online olarak gerçekleştirilir. Ana sayfamızda bulunan "Kayıt Ol" veya "Üye Ol" bağlantısını kullanarak kişisel bilgilerinizi girmeniz ve gerekli adımları takip etmeniz yeterlidir.',
    },
    {
      question: "Eğitim içeriğini nasıl erişebilirim?",
      answer:
        "Kayıt olduktan sonra, size verilen kullanıcı adı ve şifre ile giriş yapabilirsiniz. Ardından, kullanıcı panelinizden ders içeriklerine, materyallere ve diğer kaynaklara erişim sağlayabilirsiniz.",
    },
    {
      question: "Eğitim süresince öğrencilere destek sağlanıyor mu?",
      answer:
        "Evet, öğrencilere çeşitli destek kanalları aracılığıyla yardım sunuyoruz. Öğrenci destek ekibimize e-posta, canlı sohbet veya telefon yoluyla ulaşabilirsiniz. Ayrıca, forumlar veya çevrimiçi topluluklar aracılığıyla diğer öğrencilerle etkileşimde bulunabilirsiniz.",
    },
    {
      question: "Eğitim sonunda bir sertifika alabilir miyim?",
      answer:
        "Evet, başarıyla tamamladığınızda size bir sertifika verilecektir. Sertifika, eğitimi başarıyla tamamladığınızı ve belirli bir yetkinliğe sahip olduğunuzu doğrular.",
    },
    {
      question: "Eğitim ücreti ne zaman ödenmelidir?",
      answer:
        "Eğitim ücreti genellikle kayıt sırasında veya eğitim başlamadan önce ödenir. Ödeme yöntemleri ve detayları, kayıt sırasında size sağlanan bilgilerde belirtilmiştir. Ödeme süreci hakkında sorularınız varsa, müşteri destek ekibimizle iletişime geçebilirsiniz.",
    },
  ];
  return (
    <div className="mt-24">
      <h2 className="text-center mb-8 text-4xl font-bold tracking-tight leading-none xl:text-5xl">
        <span className="relative text-secondary text-after px-2">
          Sıkça Sorulan
        </span>{" "}
        Sorular
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion selectionMode="multiple">
          {faqs.map((faq, key) => (
            <AccordionItem
              key={key}
              aria-label={faq.question}
              startContent={
                <ChatIcon className="text-xl text-secondary bg-secondary-50 w-10 h-10 rounded-xl px-2" />
              }
              title={faq.question}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
