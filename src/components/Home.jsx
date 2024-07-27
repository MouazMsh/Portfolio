import { useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import coding from "../assets/coding.jpg";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Home() {
  const title = `<Hello, I am Muaz />`;
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imagRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      duration: 5,
      text: `Passionate web developer. Eager to create exceptional digital experiences.`,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      imagRef.current,
      { opacity: 0, y: 500 },
      { opacity: 1, y: 0, duration: 2 }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -500 },
      { opacity: 1, y: 0, duration: 2 }
    );
  }, []);

  return (
    <>
      <section id="home" className="mt-3">
        <div className="container col-xxl-8 px-4 py-5 ">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div ref={imagRef} className="col-12 col-sm-8 col-lg-6">
              <img
                src={coding}
                className="d-block mx-lg-auto img-fluid"
                alt="coding"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 ref={titleRef} className="display-5 fw-bold lh-1 mb-3 ">
                {title}
              </h1>
              <p ref={textRef} className="lead mt-5 text-info fw-bold "></p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button
                  variant="outline-success"
                  target="_blank"
                  className="btn btn-lg px-4 me-md-2 mt-3"
                  href="https://drive.google.com/file/d/144-OSqP0IvsmdPR9OZy2stN2u2o5pbwM/view?usp=sharing"
                >
                  View My CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
