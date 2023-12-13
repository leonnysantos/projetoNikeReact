import tenisImg from "../assets/tenis.png"

import style from "./Tenis.module.css"

const Tenis = () => {
    return (
        <div className={style.container}>
            <img src={tenisImg} alt="Imagem do Tênis" className={style.imagem} />
        </div>
    )
}

export default Tenis