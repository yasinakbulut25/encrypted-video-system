import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { MailIcon } from "./icons/MailIcon";
import { EyeFilledIcon } from "./icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";
import { useMemo, useState } from "react";
import { PhoneIcon } from "./icons/PhoneIcon";
import AlertMessage from "./AlertMessage";
import Loading from "./Loading";

function SignIn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [passwordValue, setPasswordValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState();

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (emailValue === "") return false;

    return validateEmail(emailValue) ? false : true;
  }, [emailValue]);

  const handleSubmit = (e) => {
    let alertInfo;

    // isInvalid:false and passwordValue and phoneValue is should be filled
    if (!isInvalid && passwordValue && phoneValue) {
      setIsLoading(true);
      const memberInfo = {
        email: emailValue,
        phone: phoneValue,
        password: passwordValue,
      };
      if (memberInfo) {
        // it should be sign in status
        alertInfo = {
          type: "success",
          title: "Üyelik Başarılı",
          exp: "Üyelik başarılı!",
        };
      } else {
        alertInfo = {
          type: "error",
          title: "Üyelik Başarısız",
          exp: "Üyelik oluşturulurken bir hata oluştu!",
        };
      }

      setEmailValue("");
      setPhoneValue("");
      setPasswordValue("");
      setIsLoading(false);
    } else {
      alertInfo = {
        type: "error",
        title: "Eksik Bilgi",
        exp: "Lütfen tüm alanları doldurunuz!",
      };
    }
    setAlertMessage(alertInfo);
    e.preventDefault();
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" variant="flat">
        Üye Ol
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <form action="" onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              <h3 className="text-3xl">
                <span className="relative text-after text-secondary">
                  Hesap
                </span>{" "}
                Oluştur
              </h3>
            </ModalHeader>
            <ModalBody>
              {alertMessage ? (
                <AlertMessage
                  type={alertMessage.type}
                  title={alertMessage.title}
                  exp={alertMessage.exp}
                />
              ) : (
                ""
              )}
              <Input
                isInvalid={isInvalid}
                onValueChange={setEmailValue}
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Email"
                placeholder="Email adresinizi giriniz"
                variant="bordered"
              />
              <Input
                type="tel"
                value={phoneValue}
                onValueChange={setPhoneValue}
                endContent={
                  <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Telefon"
                placeholder="Telefon numaranızı giriniz"
                variant="bordered"
              />
              <Input
                label="Şifre"
                variant="bordered"
                placeholder="Şifrenizi belirleyiniz"
                value={passwordValue}
                onValueChange={setPasswordValue}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />
              {isLoading ? (
                <Loading />
              ) : (
                <Button
                  className="mb-4"
                  color="secondary"
                  variant="flat"
                  size="lg"
                  type="submit"
                >
                  Hesap Oluştur
                </Button>
              )}
            </ModalBody>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default SignIn;
