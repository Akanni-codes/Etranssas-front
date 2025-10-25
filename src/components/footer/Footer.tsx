import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  // eslint-disable-next-line prefer-const
  let data = new Date().getFullYear();
  return (
    <>
      <div className="flex justify-center bg-[#69140E] text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Anansi Conectando Trancistas | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes</p>
          <div className="flex gap-2">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <LinkedinLogoIcon size={48} weight="bold" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <InstagramLogoIcon size={48} weight="bold" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FacebookLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
