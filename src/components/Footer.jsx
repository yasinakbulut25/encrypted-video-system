import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full text-center mt-20 mb-8">
      <span className="text-sm text-gray-500 sm:text-center">
        © 2024 Tūm hakları saklıdır
      </span>
      <span className=" block mt-2 text-sm text-gray-500 sm:text-center">
        Developed by{" "}
        <Link
          className="text-sm text-gray-500 sm:text-center underline underline-offset-4"
          to="https://tr.linkedin.com/in/yasinakbulut"
          target="_blank"
        >
          Yasin Akbulut
        </Link>
      </span>
    </footer>
  );
}

export default Footer;
