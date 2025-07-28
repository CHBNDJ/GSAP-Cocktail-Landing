import React from "react";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Footer = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
    });
    tl.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
      ease: "power1.inOut",
    }).from("#contact h3, #contact p", {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
      ease: "power1.inOut",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      })
      .to("#f-left-leaf", { y: -100 }, 0)
      .to("#f-right-leaf", { y: 200 }, 0);
  });

  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="r-leaf" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="l-leaf" id="f-left-leaf" />
      <img src="/images/footer-drinks.png" alt="drink" className="drink-img" />

      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Visit our BAR</h3>
          <p>Wehntalerstrasse 544/A, 8046 Zürich, Switzerland</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>Phone: +41 79 123 45 67</p>
          <p>Email: bar@switzerland.ch</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label="{social.name}"
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
