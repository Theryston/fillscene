import { ContainerItems, ContainerMenu, ItemMenu, LogoImage } from "./styles";
import FillsceneLogo from "../../../assets/fillscene/logo.png";
import Link from "next/link";
import IconButton from "../../common/IconButton/IconButton";

export default function Menu() {
  return (
    <ContainerMenu>
      <Link href="/">
        <a>
          <LogoImage src={FillsceneLogo} alt="Logo" />
        </a>
      </Link>
      <ContainerItems>
        <ItemMenu>
          <Link href="/">
            <a title="Home">
              <IconButton iconName="home" />
            </a>
          </Link>
        </ItemMenu>
        <ItemMenu>
          <Link href="/">
            <a title="Movies">
              <IconButton iconName="movie" />
            </a>
          </Link>
        </ItemMenu>
        <ItemMenu>
          <Link href="/">
            <a title="Categories">
              <IconButton iconName="gallery" />
            </a>
          </Link>
        </ItemMenu>
        <ItemMenu>
          <Link href="/">
            <a title="Favorites">
              <IconButton iconName="star-stroke" />
            </a>
          </Link>
        </ItemMenu>
      </ContainerItems>
    </ContainerMenu>
  );
}
