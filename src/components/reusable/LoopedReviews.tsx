"use client";

import { QuoteIcon, CircleEmpty, CircleFilled } from "../../assets/icon";
import { useState } from "react";
import { useSanityData } from "../../utils";
import { useAutoLoop, useAnimatedReview } from "../../utils";
import { frontpageQuery } from "@/lib/queries";
import { HomePageInterface } from "@/data/interface/frontpageInterface";
import { PortableText } from "@portabletext/react";

const LoopedReviews: React.FC = () => {
  const [paused, setPaused] = useState(false);

  const settings = useSanityData<HomePageInterface>(frontpageQuery);

  // Hent reviewData, fallback til tom array hvis ikke funnet
  const reviewData = settings?.reviewsSection?.ReviewSection || [];

  // Hook for animasjon + current review
  const { current, isAnimating, changeReview } = useAnimatedReview();

  // Hook for auto-looping
  useAutoLoop(
    () => {
      if (reviewData.length > 0) {
        changeReview((current + 1) % reviewData.length);
      }
    },
    5000,
    !paused && reviewData.length > 0
  );

  // Tidlige returer må komme etter at hooks er kalt!
  if (!settings) {
    return null;
  }

  if (reviewData.length === 0) {
    return null;
  }

  // Resten av JSX...
  return (
    <section className="main-bg-color">
      <div className="container pb-45 pg-lg-90">
        <div className="row mx-15">
          <div className="review-content col-12 col-lg-6 offset-lg-3 border-full border-radius-5 text-center p-30 px-lg-60" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <QuoteIcon className={"accent-fill"} />
            <div className={`review-content py-15 fs-1-rem-lg-1-25rem ${isAnimating ? "fade-out" : ""}`}>
              <PortableText value={reviewData[current].reviewSectionText} />
            </div>
            <div
              className={`review-content 
                fs-0-75-rem-lg-0-875rem italic ${isAnimating ? "fade-out" : ""}`}
            >
              {reviewData[current].reviewSectionName}
            </div>
          </div>
          <div className="d-flex justify-content-center p-30 review-pagination">{reviewData.map((_, i) => (i === current ? <CircleFilled key={i} onClick={() => changeReview(i)} /> : <CircleEmpty key={i} onClick={() => changeReview(i)} />))}</div>
        </div>
      </div>
    </section>
  );
};

export default LoopedReviews;
