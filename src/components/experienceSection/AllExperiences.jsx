import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: <a href="https://drive.google.com/drive/folders/1jHz3vw5CrUbqJdP-j7Ah252DAZgwLqLH?usp=sharing" target="_blank">Microsoft Azure Intern</a>,
    company: "Microsoft — GTU Internship Program",
    date: "02 July – 15 July 2025",
    responsibilities: [
      "Hands-on experience with Azure Cloud Services.",
      "Worked with VMs, resource groups, and cloud architecture.",
      "Completed a capstone project on cloud deployment.",
    ],
  },
  {
    job: <a href="https://drive.google.com/drive/folders/1CehXwLBejhKWJehkrm-D3LQwBdG3kVsd?usp=sharing" target="_blank">MERN Stack Intern</a>,
    company: "CreArt Solution",
    date: "02 July – 15 July 2025",
    responsibilities: [
      "Built full-stack apps using MongoDB, Express.js, React, and Node.js.",
      "Practiced API development, user authentication, and state management",
      "Built project with CRUD operations and responsive UI.",
    ],
  },
  {
    job: <a href="https://drive.google.com/file/d/1pBDslat78Kv7pEYD1t9Bfxd34H7pihqd/view?usp=sharing" target="_blank">Certified Ethical Hacking Course</a>,
    company: "FN Careers",
    date: " 2024 – 2027 ",
    responsibilities: [
      "Completed advanced ethical hacking training via HackTheTech (FN Careers)",
      "80+ hands-on modules: XSS, SQLi, DDoS, Forensics, Cloud, Wireless",
      "Tools: Metasploit, Wireshark, Testing",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
