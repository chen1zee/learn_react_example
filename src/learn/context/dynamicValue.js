import React from "react"

const themes = {
  light: {
    foreground: "#000",
    background: "#eee",
  },
  dark: {
    foreground: "#fff",
    background: "#222",
  }
}

const ThemeCtx = React.createContext(themes.dark)

class ThemeButton extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  static contextType = ThemeCtx
  render() {
    let props = this.props
    let themeCtx = this.context
    return (
      <button {...props}
        style={{backgroundColor: themeCtx.background,color: themeCtx.foreground}} />
    )
  }
}

function Toolbar(props) {
  return (
    <ThemeButton {...props} />
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light
    }
  }
  toggleTheme = () => {
    this.setState(state => {
      return {
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }
    })
  }
  render() {
    return (
      <div>
        <ThemeCtx.Provider value={this.state.theme}>
          <Toolbar onClick={this.toggleTheme}>
            changeTheme kkk
          </Toolbar>
        </ThemeCtx.Provider>
        <section>
          <ThemeButton>
            changeTheme 2
          </ThemeButton>
        </section>
      </div>
    )
  }
}

export default App
