import { feedback } from "../constants";
import styles from "../style";
import SpeakerCard from "./SpeakerCard";

const Speakers = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`ml-[-2rem] ${styles.heading2}`}>
        OUR PREVIOUS SPEAKERS <br />{" "}
        <span className="text-red">20+ SPEAKERS</span>
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left ml-[10rem] max-w-[450px]`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          explicabo, perspiciatis libero reiciendis rerum animi dolorum ut
          architecto quos culpa deserunt, assumenda ea placeat consequatur
          tempore totam quis recusandae dolore.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <SpeakerCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Speakers;