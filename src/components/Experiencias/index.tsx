import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Years" description="Experience" />

      <section>
        <ExperienciaItem
          year="2021"
          title="Dev FrontEnd"
          description="Lorem ipsum sss dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2022"
          title="Dev FullStack"
          description="Lorem idsadas psum dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
