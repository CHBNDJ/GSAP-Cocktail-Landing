import { useGSAP } from "@gsap/react";
import React from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        ease: "expo.out",
        stagger: 0.02,
      })

      .from(".top-grid div, .bottom-grid div", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.04,
      });
  });
  return (
    <div id="about">
      <div className="mb-16 md:px-28 lg:px-6 px-5">
        <div className="content">
          <div className="md:col-span-6">
            <p className="badge">Best Cocktails</p>
            <h2>
              Precision in every pour
              <span className="text-white">-</span>
              from mix to masterpiece
            </h2>
          </div>

          <div className="sub-content">
            <p>
              From the delicate balance of each ingredient to the final flourish
              in the glass, our cocktails are crafted with intention — where
              refinement meets creativity, and every detail whispers
              sophistication
            </p>

            {/* <div className="flex flex-row items-center justify-between gap-6 md:gap-6 md:justify-center"> */}
            <div className="flex flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-4 min-w-[168px]">
                <div className="flex flex-row gap-1 w-24 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/images/star.png"
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
                </div>

                <div className="flex flex-col text-left gap-2">
                  <p className="text-xl md:text-2xl font-bold whitespace-nowrap">
                    4.5/5
                  </p>
                  <p className="text-xs md:text-sm font-normal whitespace-nowrap">
                    More than +30000 customers
                  </p>
                </div>
              </div>

              <div className="border-[#565656] border-1 h-24"></div>

              <div className=" bg-gradient-to-l from-[#313131] to-[#0F0F0F] rounded-full px-6 py-6 sm:w-48 w-20 flex items-center flex-row justify-center">
                <div className="space-y-[-35px] sm:space-y-0 sm:-space-x-6 flex flex-col sm:flex-row sm:flex-center">
                  <img
                    src="/images/profile1.png"
                    alt="profile1"
                    className="w-11 h-11 rounded-full border-2 border-white"
                  />
                  <img
                    src="/images/profile2.png"
                    alt="profile2"
                    className="w-11 h-11 rounded-full border-2 border-white"
                  />
                  <img
                    src="/images/profile3.png"
                    alt="profile3"
                    className="w-11 h-11 rounded-full border-2 border-white"
                  />
                  <div className="w-11 h-11 rounded-full bg-[#C9C2FA] text-black font-semibold flex items-center justify-center text-sm border-2 border-white">
                    +12k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>
        <div className="md:col-span-6">
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>
        <div className="md:col-span-3">
          <img src="/images/abt5.png" alt="grid-img-3" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-6">
          <img src="/images/abt3.png" alt="grid-img-4" />
        </div>
        <div className="md:col-span-6">
          <img src="/images/abt4.png" alt="grid-img-5" />
        </div>
      </div>
    </div>
  );
};

export default About;
