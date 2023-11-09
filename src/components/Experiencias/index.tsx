import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="04 Years" description="Experience" />

      <section>
        <ExperienciaItem
          year="2021"
          title="Dev FrontEnd"
          description="I started my experiences as FrontEnd exploring the development of projects 
          from scratch, styling, componentization, consumption of REST APIs, HTML, CSS, JavaScript, TypeScript,
          libraries and various frameworks, having with react.js main stack."
        />
        <ExperienciaItem
          year="2022"
          title="Dev FullStack"
          description="As a FullStack I had experiences in PERN and MERN production, REST API productions and 
          integration with FrontEnd, CRUD operations, use of Node.js, Express, Docker, ORM's, DataBases and CMS,
          studies in SOLID architecture, use of Github and Gitpod development tools."
        />
        <ExperienciaItem
          year="2023"
          title="Dev Mobile"
          description="As a mobile developer I integrated with Rest's API using
          React Native for app production, Expo and working with styling libraries like Nativewind, 
          styled-components and others. Also using virtual workspaces in tunnel."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
