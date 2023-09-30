import { Component } from "react";
import { Container, NavProject, Project, ProjectBox, ProjectBoxMobile, ProjectImage, TextProject } from "./projectStyle";
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
                <ProjectBoxMobile>
                    {ourProjects.slice(0,2).map(project => 
                    <Project onClick={() =>this.navigateTo(project.link)}>
                        <NavProject>{project.projectName}</NavProject>
                        <ProjectImage src={project.image}></ProjectImage>
                    </Project>
                    )}
                </ProjectBoxMobile>
            </Container>
        )
    }
}
