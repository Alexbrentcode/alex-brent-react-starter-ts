import styles from "./Header.module.css";

type HeaderProps = {
  text: string;
};

const Header = (props: HeaderProps) => {
  return <h1 className={styles["header"]}>{props.text}</h1>;
};

export default Header;
