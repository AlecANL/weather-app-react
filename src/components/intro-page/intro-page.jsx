import LoaderImage from '../../assets/images/loader.png';
import { MainStyled } from './intro-page.styled';

function IntroPage() {
  return (
    <MainStyled>
      <img src={LoaderImage} alt="intro loader" />
    </MainStyled>
  );
}

export default IntroPage;
