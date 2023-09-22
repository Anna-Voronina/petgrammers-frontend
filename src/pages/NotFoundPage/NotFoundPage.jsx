import { Container } from "@/shared/components/Container/Container";

import sprite from "@/shared/icons/sprite.svg";
import NotFoundImg from "@/shared/assets/images/notFound/not-found@1x.png";
import NotFoundImgRetina from "@/shared/assets/images/notFound/not-found@2x.png";
import NotFoundImgWebp from "@/shared/assets/images/notFound/not-found@1x.webp";
import NotFoundImgWebpRetina from "@/shared/assets/images/notFound/not-found@2x.webp";

import {
  HomeLinkLabel,
  HomeLink,
  NotFoundPicture,
  NotFoundTitle,
  NotFoundWrapper,
  PawPrintIcon,
} from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <Container>
      <NotFoundWrapper>
        <NotFoundTitle>
          <span>Ooops!</span>
          <span>This page not found :(</span>
        </NotFoundTitle>
        <NotFoundPicture>
          <source
            srcSet={`${NotFoundImg} 1x, ${NotFoundImgRetina} 2x`}
            type="image/png"
          />
          <source
            srcSet={`${NotFoundImgWebp} 1x, ${NotFoundImgWebpRetina} 2x`}
            type="image/webp"
          />
          <img src={NotFoundImg} alt="404 - not found" />
        </NotFoundPicture>
        <HomeLink to="/">
          <HomeLinkLabel>To main page</HomeLinkLabel>
          <PawPrintIcon width="24" height="24">
            <use href={sprite + "#pawprint"}></use>
          </PawPrintIcon>
        </HomeLink>
      </NotFoundWrapper>
    </Container>
  );
};

export default NotFoundPage;
