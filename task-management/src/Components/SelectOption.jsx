import { useState } from 'react';
import styles from './SelectOption.module.css';


import Board from './Board'; 

const SelectOption = () => {
  const [selectedOption, setSelectedOption] = useState(false);

  const boardHandler = () => {
    setSelectedOption((prev) => !prev); 
  };

  return (
    <div className={styles['select-option-container']}>
      <h5 className={styles.list}>List</h5>
      <h5 onClick={boardHandler}>
        Board {selectedOption ? <Board /> : null}
      </h5>
    </div>
  );
};

export default SelectOption;