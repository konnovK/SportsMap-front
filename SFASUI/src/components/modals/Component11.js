import styles from "./Component11.module.css";

const Component11 = ({ onClose }) => {
  return (
    <div className={styles.div}>
      <img
        className={styles.icArrowsLeftIcon}
        alt=""
        src="../icarrowsleft.svg"
      />
      <img
        className={styles.imagePlaceholderIcon}
        alt=""
        src="../imageplaceholder@2x.png"
      />
      <div className={styles.lLabelDiv}>
        <div className={styles.labelDiv}>Тип: Спортивный зал</div>
        <div className={styles.hintDiv}>Optional Hint</div>
      </div>
      <div className={styles.labelDiv1}>Fitness House</div>
      <div className={styles.labelDiv2}>
        Адрес: Выборгская набережная, д. 1, корп.1, лит. А-БВГД
      </div>
      <div className={styles.labelDiv3}>
        Номер телефона: +7 (923) 1234 - 123
      </div>
      <div className={styles.labelDiv4}>
        <span className={styles.labelTxtSpan}>
          <span>{`Сайт: `}</span>
          <span className={styles.httpsfitnessHouseruSpan}>
            https://fitness-house.ru
          </span>
        </span>
      </div>
      <div className={styles.labelDiv5}>Режим работы: ПН-ВС 8.00 - 22.00</div>
      <div className={styles.labelDiv6}>Платные услуги: только платные</div>
      <div className={styles.labelDiv7}>“Доступная среда”:</div>
      <img className={styles.togglerIcon} alt="" src="../toggler2.svg" />
    </div>
  );
};

export default Component11;
