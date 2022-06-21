import { ContainerItems, ContainerMenu, ItemMenu, LogoImage } from "./styles";
import FillsceneLogo from "../../../assets/fillscene/logo.png";
import Link from "next/link";
import IconButton from "../../common/IconButton/IconButton";
import { ImHome3 } from "react-icons/im";
import { MdLocalMovies } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

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
              <IconButton Icon={ImHome3} />
            </a>
          </Link>
        </ItemMenu>
        <ItemMenu>
          <Link href="/">
            <a title="Movies">
              <IconButton Icon={MdLocalMovies} />
            </a>
          </Link>
        </ItemMenu>
        <ItemMenu>
          <Link href="/">
            <a title="Categories">
              <IconButton Icon={BiCategory} />
            </a>
          </Link>
        </ItemMenu>
        <ItemMenu>
          <Link href="/">
            <a title="Favorites">
              <IconButton Icon={AiOutlineStar} />
            </a>
          </Link>
        </ItemMenu>
      </ContainerItems>
    </ContainerMenu>
  );
}
