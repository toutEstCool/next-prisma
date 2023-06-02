'use client';
import Logo from "./logo/Logo";
import styles from './index.module.scss';
import Search from "./search/Search";
import UserMenu from "./usermenu/UserMenu";
import Container from "../container/Container";

const NavBar: React.FC = (): JSX.Element => {
  return (
    <div className={styles.navbarContainer}>
    <div className={styles.navBarContainerWrapper}>
      <Container>
        <div className={styles.navBarContainerWrapperItems}>
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </div>
  </div>
  )
}

export default NavBar