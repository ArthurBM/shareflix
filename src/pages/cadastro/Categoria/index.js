import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        // Chave: nome, descricao, etc
        setValues({
            ...values,
            [chave]: valor, //nome: 'valor'
        });
    }

    function handleChange(infoEvent) {
        setValue(
            infoEvent.target.getAttribute('name'),
            infoEvent.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault()
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais)
            }}>

                <FormField
                label="Nome da Categoria"
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange}
                />                

                {/* <FormField
                label="Descrição"
                type="????"
                name="descricao"
                value={values.name}
                onChange={handleChange}
                />    */}
                <div>
                    <label>
                        Descrição:
                        <input
                            type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <FormField
                label="Cor"
                type="color"
                name="cor"
                value={values.nome}
                onChange={handleChange}
                />   

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>


            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;