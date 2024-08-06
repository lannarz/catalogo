export default function Header ({ title, FuncaoAlerta }) {
    return(
        <header>
            <h1> {title} </h1>
            <button onClick={FuncaoAlerta}> Alerta </button>
        </header>
    )
};

