import { Button } from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div id="contact" className="bg-dark mt-5">
      <footer className="py-3 text-center pb-3">
        <p className="fs-2 fw-bold">Get In Touch</p>
        <Button variant="outline-info" href="mailto:m.mes98@hotmail.com">
          Let's Connect{" "}
          <FontAwesomeIcon
            className="fa-shake"
            style={{ "--fa-animation-duration": "4s" }}
            size="1x"
            icon={faEnvelope}
          />
        </Button>
        <p className="mt-3">Developed By Muaz Almiskavi</p>
      </footer>
    </div>
  );
}
