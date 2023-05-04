import { tedx } from "../assets";
import styles, { layout } from "../style";

const Tedx = () => {
  return (
    <section
      id="product"
      className={`flex md:flex-row flex-col justify-center items-start ${styles.paddingY} `}
    >
      <div className={layout.sectionInfo}>
        <h1 className="flex-1 font-poppins font-semibold text-secondary ss:text-[72px] text-[52px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
          About TEDx
        </h1>
        <p className={`${styles.paragraph} max-w-[500px] mt-6 mb-12 my-10`}>
          TED has established a programme called TEDx with the intention of
          disseminating worthwhile ideas. The 'x' stands for 'independently
          organized,' and it allows communities to create their own TED-like
          events. TEDx events are locally organized, community-driven, and
          focused on ideas worth spreading. <br />
          <br />
          Local, independently organised gatherings called "TEDx" bring people
          together to have a TED-like experience. TEDx is an independently
          organized event that follows the same principles as TED. TEDx is a
          program where live speakers will combine to spark deep discussion and
          connection in a small group. TEDx grants free licenses to like-minded
          individuals worldwide to organize a TED-style event to share ideas and
          foster innovation.
        </p>
      </div>

      <div className={layout.sectionImgReverse}>
        <img src={tedx} alt="Tedx" className="w-[80%] h-[75%] relative z-[5]" />
      </div>
    </section>
  );
};

export default Tedx;
