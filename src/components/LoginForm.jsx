import { Input, Button } from "@nextui-org/react";
import { MailIcon } from "./icons/MailIcon";
import { EyeFilledIcon } from "./icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";
import { useState, useMemo } from "react";
import AlertMessage from "./AlertMessage";
import Loading from "./Loading";

function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState();

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (emailValue === "") return false;

    return validateEmail(emailValue) ? false : true;
  }, [emailValue]);

  const handleSubmit = async (e) => {
    let alertInfo;

    // isInvalid:false and passwordValue is should be filled
    if (!isInvalid && passwordValue) {
      setIsLoading(true);
      const memberInfo = {
        email: emailValue,
        password: passwordValue,
      };
      if (memberInfo) {
        // it should be login status
        alertInfo = {
          type: "success",
          title: "Giriş Başarılı",
          exp: "Giriş başarılı!",
        };
      } else {
        alertInfo = {
          type: "error",
          title: "Giriş Başarısız",
          exp: "Girilen bilgilere ait kayıt bulunamadı!",
        };
      }

      setEmailValue("");
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
    <form
      className="w-full max-w-md grid gap-4 mx-auto"
      onSubmit={handleSubmit}
    >
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
        value={emailValue}
        onValueChange={setEmailValue}
        endContent={
          <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Email"
        placeholder="Email adresinizi giriniz"
        variant="bordered"
      />
      <Input
        label="Şifre"
        variant="bordered"
        value={passwordValue}
        onValueChange={setPasswordValue}
        placeholder="Şifrenizi giriniz"
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
          Giriş Yap
        </Button>
      )}
    </form>
  );
}

export default LoginForm;
