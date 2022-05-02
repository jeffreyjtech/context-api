import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/theme';
import { Card, Icon, Switch } from '@blueprintjs/core';

function Header() {
  // This is React hooks equivalent of wrapping a component in a MyContext.Consumer component
  const theme = useContext(ThemeContext);
  const [checked, setChecked] = useState(false)
  const [style, setStyle] = useState(theme.mode === 'light' ? null : 'bp4-dark');

  function handleCheck(e) {
    setChecked(!checked);
  }

  useEffect(() => {
    theme.setMode(checked ? 'light' : 'dark')
    setStyle(theme.mode === 'light' ? null : 'bp4-dark');
  }, [theme, checked]);

  return (
    <div id="header">
      <Card className={style}>
        <h2>Settings</h2>
        <Icon icon="contrast" />
        <Switch label={`${theme.mode} Mode`} checked={checked} onChange={handleCheck} />
      </Card>
    </div>
  )
}

export default Header;
