import React from "react";
import Navbar from "../components/navbar/Navbar";
import styles from "./appLayout.module.css";
// import Footer from "../components/footer/Footer";

type IProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: IProps) => {
  return (
    <div className={styles.appLayout}>
      <div>
        <div className={styles.headerContainer}>
          <Navbar />
        </div>
        <div className={styles.mainContent}>{children}</div>
        {/* <div>
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default AppLayout;
