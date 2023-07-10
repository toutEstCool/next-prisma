'use client';

import Logo from "./logo/Logo";
import styles from './index.module.scss';
import Search from "./search/Search";
import UserMenu from "./usermenu/UserMenu";
import Container from "../container/Container";
import { SafeUser } from "@/app/types";
import Categories from "./categories/Categories";

interface IPropsNavBar {
  currentUser?: SafeUser | null
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
    <Categories />
  </div>
  )
}

export default NavBar