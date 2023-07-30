import { Component } from "react";
import { Container, NavProject, Project, ProjectBox, ProjectImage, TextProject } from "./projectStyle";
import { ourProjects } from "./data";

export default class Projects extends Component {

    navigateTo = (link: string) => {
        window.open(link);
    }

    render() {

        return (
            <Container>
                <TextProject>Conheça nossos Projetos</TextProject>
                <ProjectBox>
                    {ourProjects.map(project => 
                    <Project onClick={() =>this.navigateTo(project.link)}>
                        <NavProject>{project.projectName}</NavProject>
                        <ProjectImage src={project.image}></ProjectImage>
                    </Project>
                    )}
                </ProjectBox>
            </Container>
        )
    }
}
