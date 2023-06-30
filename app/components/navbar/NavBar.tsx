'use client';
import Logo from "./logo/Logo";
import styles from './index.module.scss';
import Search from "./search/Search";
import UserMenu from "./usermenu/UserMenu";
import Container from "../container/Container";
import { User } from "@prisma/client";

interface IPropsNavBar {
  currentUser?: User | null
}

const NavBar: React.FC<IPropsNavBar> = ({ currentUser }): JSX.Element => {
  return (
    <div className={styles.navbarContainer}>
    <div className={styles.navBarContainerWrapper}>
      <Container>
        <div className={styles.navBarContainerWrapperItems}>
          <Logo />
          <Search />
          <UserMenu currentUser={ currentUser }/>
        </div>
      </Container>
    </div>
  </div>
  )
}

export default NavBar