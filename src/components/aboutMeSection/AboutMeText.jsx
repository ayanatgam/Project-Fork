import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I’m Ayan, an aspiring DevSecOps engineer with a passion for automation, cloud technologies, and 
      cybersecurity. I specialize in building secure and efficient CI/CD pipelines and integrating security into every 
      stage of the development lifecycle. I also enjoy creating tech content to help others learn DevOps, 
      DevSecOps, and cloud fundamentals. Outside of work, I focus on continuous learning and sharing 
      knowledge to inspire others in their tech journey.
      </p>
      <a
        href="/images/Ayan_Saiyad_CV.pdf"
        download
        className="border border-orange rounded-full py-4 px-8 text-2xl flex gap-3 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white text-center"
        >
        Download Resume
      </a>
    </div>
  );
};

export default AboutMeText;
