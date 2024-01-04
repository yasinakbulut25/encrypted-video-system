import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import LoginForm from "./LoginForm";

function Login() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} color="secondary" variant="flat">
        Giriş Yap
      </Button>
      <Modal
        className="sm:w-max-w-lg max-w-sm"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <h3 className="text-3xl">
              <span className="relative text-after text-secondary">Giriş</span>{" "}
              Yap
            </h3>
          </ModalHeader>
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Login;
