import Link from "next/link";
import Image from "next/image";
import { frontpageAlternatingBlocksData as blocks } from "../../data/text";

const HomepageAlternatingBlocks: React.FC = () => {
  return (
    <section className="alt-bg-color">
      <div className="container pb-45 pb-lg-90">
        {blocks.map((block, i) => {
          const isEven = i % 2 === 0;

          return (
            <div key={i} className="row pos-relative pb-60 align-items-center">
              <div className={`col-12 col-lg-6 ${!isEven ? "offset-lg-4" : "offset-lg-2"}`}>
                <Image width={636} height={477} className="img-full border-radius-5" src={block.image} alt="" />
              </div>
              <div className={`col-10 col-lg-4 offset-1 offset-lg-0 text-center text-lg-start dark-bg-color border-radius-5 p-30 p-lg-45 mt--75 mt-lg-0 ${isEven ? "text-overlay-right" : "text-overlay-left"}`}>
                <h2 className="mb-15 custom-border-bottom pos-relative custom-border-bottom-25-percent-tc-lg-te">Overskrift</h2>
                <div className="pb-15">{block.textContent}</div>
                <Link className="btn btn-primary" href={block.linkDestination}>
                  {block.linkText}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomepageAlternatingBlocks;
