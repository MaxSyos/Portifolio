/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, Image1, Image2, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/Imagem_1.png';
import photo from '../../assets/desenho2.png'

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <Image1 src={picture} alt="Minha foto" />
      <Image2 src={photo} alt="Minha foto2" />
      <div>
        <TextContainer>
          <h1>Hello!</h1>
          <h2>I am André</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Window</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Name: <span className="blue">André</span>
            </div>
            <div>
              Last name: <span className="blue">Abreu de Sá</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Employ</span> {'\u007B'}
            <div>
              Function: <span className="blue">Developer</span>
            </div>
            <div>
              Type: <span className="blue">FrontEnd</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
