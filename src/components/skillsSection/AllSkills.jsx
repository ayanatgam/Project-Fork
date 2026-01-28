import SingleSkill from "./SingleSkill";
import { FaLinux } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { SiPython } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { SiJenkins } from "react-icons/si";
import { SiAnsible } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "Linux", icon: FaLinux },
  { skill: "Git", icon: DiGit },
  { skill: "Scripting", icon: SiGnubash },
  { skill: "Python", icon: SiPython },
  { skill: "Docker", icon: SiDocker },
  { skill: "Jenkins", icon: SiJenkins },
  { skill: "AWS", icon: FaAws },
  { skill: "Ansible", icon: SiAnsible },
  { skill: "Terraform", icon: SiTerraform },
  { skill: "Kubernetes", icon: SiKubernetes },
  { skill: "Security", icon: MdSecurity },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
