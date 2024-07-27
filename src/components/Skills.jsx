import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconSkills } from "../lib/controller";
import { Row, Col } from "react-bootstrap";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container justify-content-center align-items-center">
        <h1 className="fw-bold mb-3">Skills</h1>
        <Row>
          {iconSkills.map((skill) => {
            return (
              <Col xs={4} key={skill.id} className="text-center">
                <FontAwesomeIcon
                  size="3x"
                  icon={skill.src}
                  style={{ "--fa-animation-duration": "8s" }}
                  className="fa-flip"
                  border
                />
                <p>{skill.name}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}
