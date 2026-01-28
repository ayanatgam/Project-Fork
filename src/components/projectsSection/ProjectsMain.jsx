import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Shop Contact",
    year: "Jun2025",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://shopcontact.in/",
  },
  {
    name: "Road Safety",
    year: "May2025",
    align: "left",
    image: "/images/website-img-2.jpg",
    link: "https://roadsafety-mu.vercel.app/",
  },
  {
    name: "Mini E-Book Store",
    year: "Apr2025",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/ayansaiyad5/Ecommerse-Book-Mini-Project",
  },
  {
    name: "Text to Handwriting",
    year: "Nov2024",
    align: "left",
    image: "/images/website-img-3.jpg",
    link: "https://ayansaiyad5.github.io/Text-To-Handwriting/",
  },
  {
    name: "Attendance System",
    year: "Mar2023",
    align: "right",
    image: "/images/Attendance.jpg",
    link: "https://github.com/ayansaiyad5/Attendance-Management-System",
  },
  {
    name: "Blood Bank System",
    year: "Sep2023",
    align: "left",
    image: "/images/blood.jpg",
    link: "https://github.com/ayansaiyad5/Blood-Bank-Management-System",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
