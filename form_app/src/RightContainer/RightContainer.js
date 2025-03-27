import styles from "./RightContainer.module.css";
const RightContainer = () => {
  const services = [
    { title: "Presentation Design" },
    { title: "Audio - Visual Production" },
    { title: "Translation Services" },
    { title: "Graphic Design" },
    { title: "Research & Analytics" },
    { title: "Data Processing" },
  ];
  return (
    <div className={styles.rightcontainer}>
      <div className={styles.servicesgrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.servicecard}>
            <h3>{service.title}</h3>
            <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RightContainer;
