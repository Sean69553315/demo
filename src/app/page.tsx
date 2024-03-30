'use client';
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import SkinSwitcher from '../app/components/SkinSwither';

export default function Home() {
  const [cosmosValue, setCosmosValue] = useState<string>("")
  const [themeValue, setThemeValue] = useState<string>("dark")
  const [themeColor, setThemeColor] = useState<string>('dark');

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', themeColor);
  }, [themeColor]);

  const changeCosmos = () => {
    setCosmosValue("")
  }

  const [themeType, setThemeType] = useState<string>('light');

  const handleThemeChange = (selectedTheme: string) => {
    setThemeType(selectedTheme);
    console.log(selectedTheme)
  };

  return (
    <>
      <main className={styles.main}>
        <SkinSwitcher onThemeChange={handleThemeChange} />
        <div className={`theme-${themeType}`}>
          <div className={styles.description}>
            <div className={styles.viewContainer}>
              <div>
                Deposit ATOM
              </div>
              <div className={styles.selectContainer}>
                <div>
                  <div>From Cosmos Hub</div>
                  <input type="text" value={cosmosValue} onChange={changeCosmos} />
                </div>
                <div>
                  <div style={{ marginTop: "13px" }}>-></div>
                </div>
                <div>
                  <div>To Osmosis</div>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.amoutContainer}>
                <div className={styles.amoutTitle}>
                  <div>Select amount</div>
                  <div>Available 2 ATOM</div>
                </div>
                <div className={styles.displayContainer}>
                  <span>
                    2 ATOM
                  </span>&nbsp;
                  <span>
                    = $ 1,013
                  </span>
                </div>
                <div className={styles.amoutBottom}>
                  <div>1/3</div>
                  <div>1/2</div>
                  <div>Max</div>
                </div>
              </div>
              <div className={styles.timeContainer}>
                Estimated Time : 20 seconds
              </div>
              <div className={styles.buttonContainer}>
                <div>
                  <button className={styles.buttonTran}>Transfer</button>
                </div>
                <div className={styles.cancelButton}>
                  <span>Cancel</span>
                </div>
              </div>
            </div >
          </div>
        </div>
      </main>
    </>
  );
}
