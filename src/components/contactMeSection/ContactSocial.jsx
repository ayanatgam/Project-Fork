import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/ayan-saiyad-793146129/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/ayansaiyad" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/ayansaiyad.5/" Icon={FaInstagram} />
      <SingleContactSocial link="https://www.youtube.com/@Ayansaiyad5" Icon={FaYoutube} />
    </div>
  );
};

export default ContactSocial;
