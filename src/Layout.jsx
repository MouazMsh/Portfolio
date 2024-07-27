import Navb from "./components/Navb";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollButton from "./components/ScrollButton";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="container div-wrapper min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center">
          <Loading />
        </div>
      ) : (
        <div className="div-wrapper font text-light min-vh-100">
          <Navb />
          <Home />
          <Skills />
          <Projects />
          <Contact />
          <ScrollButton />
        </div>
      )}
    </>
  );
}
