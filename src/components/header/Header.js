import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/theme';
import { Button, Card, Icon, Switch } from '@blueprintjs/core';

function Header() {
  // This is React hooks equivalent of wrapping a component in a MyContext.Consumer component
  const theme = useContext(ThemeContext);
  const [checked, setChecked] = useState(false)
  const [style, setStyle] = useState(theme.mode === 'light' ? null : 'bp4-dark');
  const [textInput, setTextInput] = useState('')

  function handleCheck(e) {
    setChecked(!checked);
    theme.toggleMode(checked ? 'light' : 'dark');
  }

  function handleInput(e) {
    e.preventDefault();
    setTextInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitting:', textInput);
    theme.toggleMode(textInput);
  }

  useEffect(() => {
    setStyle(theme.mode === 'light' ? null : 'bp4-dark');
    setTextInput('');
  }, [theme]);

  // useEffect(() => {
    // theme.toggleMode(checked ? 'light' : 'dark');
  // }, [checked]);
  

  return (
    <div id="header">
      <Card className={style}>
        <h2>Settings</h2>
        <Icon icon="contrast" />
        <Switch label={`${theme.mode} Mode`} checked={checked} onChange={handleCheck} />
        <form onSubmit={handleSubmit}>
          <input placeholder='Enter display mode' value={textInput} onChange={handleInput} />
          <Button type='submit'>Change mode</Button>
        </form>
      </Card>
    </div>
  )
}

export default Header;
