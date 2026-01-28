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
  { skill: "security Basics", icon: MdSecurity },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <IconComponent className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
