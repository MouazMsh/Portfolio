import { Button, Col, Image, Row, Stack } from "react-bootstrap";
import { projects } from "../lib/controller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaperclip } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container justify-content-center align-items-center">
        <h1 className="fw-bold my-3">Projects</h1>
        <Row>
          {projects.map((project) => {
            return (
              <Col key={project.id} xs={12} md={6}>
                <div className="mt-5">
                  <h3 className="mt-3 text-info">{project.name}</h3>
                  <Image
                    src={project.src}
                    fluid
                    alt="project"
                    className="project-div"
                  />
                  <div>
                    <Stack direction="horizontal" gap={2} className="mt-3">
                      {project.tec.map((teco) => {
                        return (
                          <FontAwesomeIcon
                            key={teco.id}
                            size="2x"
                            icon={teco.src}
                            style={{ color: "#7ce75a" }}
                          />
                        );
                      })}
                    </Stack>
                    <p className="mt-2 fs-5">{project.description}</p>
                    <Stack direction="horizontal" gap={2} className="mt-2">
                      <Button
                        target="_blank"
                        variant="outline-success"
                        href={project.github_url}
                      >
                        <FontAwesomeIcon size="1x" icon={faCode} />
                      </Button>
                      <Button
                        target="_blank"
                        variant="outline-success"
                        href={project.website_url}
                      >
                        <FontAwesomeIcon size="1x" icon={faPaperclip} />
                      </Button>
                    </Stack>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}
