import Desc from "./components/Desc"
import Tenis from "./components/Tenis"

import style from "./App.module.css"

const App = () => {
  return (
    <div className={style.container}>
      <section className={style.box}>
        <Desc />
        <Tenis />
      </section>
    </div>
  )
}

export default App