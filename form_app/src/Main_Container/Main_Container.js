import styles from "./Main_Container.module.css";
import LeftContainer from "../LeftContainer/LeftContainer";
import RightContainer from "../RightContainer/RightContainer";
const Main_Container = () => {
  return (
    <div className={styles.block}>
      <LeftContainer />
      <RightContainer />
    </div>
  );
};
export default Main_Container;
