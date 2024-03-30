import { FC, useEffect, useState } from 'react';
import sytles from './index.module.css';

interface ThemeSwitcherProps {
  onThemeChange: (theme: string) => void;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ onThemeChange }) => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    onThemeChange(theme);
  }, [theme]);

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  return (
    <div className={sytles.controlButtons}>
      <button onClick={() => handleThemeChange('light')}>Light Theme</button>
      <button onClick={() => handleThemeChange('dark')}>Dark Theme</button>
      {/* <button onClick={() => handleThemeChange('custom')}>Custom Theme</button> */}
    </div>
  );
};

export default ThemeSwitcher;