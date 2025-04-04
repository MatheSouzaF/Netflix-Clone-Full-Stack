// import React from "react";

// // 1. Tipando as props corretamente
// interface Props {
//     name: string;
//     idade: number;
//     job: string;
// }

// // 2. Componente filho que recebe props
// const TesteProps: React.FC<Props> = ({ name, idade, job }) => {
//     return (
//         <div className="text-white">
//             <h2>Nome: {name}</h2>
//             <p>Idade: {idade}</p>
//             <p>Profissão: {job}</p>
//         </div>
//     );
// };

// const TestePros = () => {
//     return (
//         <div>
//             <TesteProps name="John Doe" idade={30} job="Developer" />
//         </div>
//     );
// }

// export default TestePros


import { useState } from "react";

const Contador = () => {
    // 1️⃣ Criando o estado
    const [contador, setContador] = useState(0);

    // 2️⃣ Função que incrementa o contador
    const incrementar = () => {
        setContador(contador + 1);
    };
    const zerar = () => {
        setContador(0);
    };


    return (
        <div className="flex flex-col gap-50 justify-center items-center h-screen" style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Contador: {contador}</h1>
            <div className="flex gap-20 text-center">

                <button onClick={incrementar}>
                    Clique aqui
                </button>
                <button className="text-white" onClick={() => setContador(contador - 1)}>
                    Diminuir
                </button>
                <button className="text-red" onClick={zerar}>
                    Zerar
                </button>

            </div>

        </div>
    );
};

export default Contador;
