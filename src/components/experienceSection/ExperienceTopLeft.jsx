import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Intern Since 2025
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="6" text="Websites" />
      </div>
      <p className="text-center">
      During my internships, I built secure and scalable systems using Python, DevSecOps practices, and Microsoft Azure, delivering real-world solutions focused on automation and cloud efficiency.
    </p>
     {/* <ExperienceInfo number="$100k" text="Internship Project Value" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
