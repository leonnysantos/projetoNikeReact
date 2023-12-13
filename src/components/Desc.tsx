import style from "./Desc.module.css"

const Desc = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>DevMentor.</h1>
            <div className={style.box}>
                <h1>Lançamento<br />Nike Air.</h1>
                <p>
                    O tênis do futuro.
                    <br />
                    O futuro a um passo do seu alcance!
                </p>
                <button>QUERO CONHECER!</button>
            </div>
        </div>
    )
}

export default Desc