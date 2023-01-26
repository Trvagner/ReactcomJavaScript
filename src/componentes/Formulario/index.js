import CampoTexto from '../CampoTexto'
import './Formulario.css'
const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto label="Nome" placeholder="Digite seu cargo" />
                <CampoTexto label="Nome" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )

}

export default Formulario