
import principal from '../../assets/img/principalInatu.png';
import login from '../../assets/img/loginInatu.png';
import processos from '../../assets/img/processosInatu.png';
import CRUD from '../../assets/img/CRUDInatu.png';
import rastreabilidade from '../../assets/img/rastreabilidadeInatu.png';


export default function SectionProjetoInatu() {
    return(
        <>
            <h1>Plataforma Inatú</h1>
            <img src={principal}/>
            <p>
                O Sistema de Gestão Produtiva da marca coletiva das comunidades da Amazônia.
            </p>

            <div>
                <h2>Funcionalidade</h2>
                <ul>
                    <li>Gestão Produtiva</li>
                    <li>Gestão Administrativa</li>
                    <li>Rastreabilidade</li>
                </ul>
                <h2>Tecnologias Utilizadas</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                </ul>
            </div>

            <div>
                <h2>Login</h2>
                <img src={login}/>
                <p>
                    Sistema de login utilizando serviços do Firebase para autenticação, 
                    usando contexto global para gerenciar usuraios "AuthContext".
                </p>
            </div>

            <div>
                <h2>Controle e Precificação de Processos</h2>
                <img src={processos}/>
                <p>
                    Cada matéria prima passa por diferentes processos para que seja extraido o óleo.
                    A plataforma conduz o passa a passo registrando todos os gastos, como mão de obra,
                    depreciação de maquinas, energia, insumos utilizados etc.
                </p>
            </div>

            <div>
                <h2>CRUD</h2>
                <img src={CRUD}/>
                <p>
                    Todos as operações principais são realizadas, get, post, put e delete.
                </p>
            </div>

            <div>
                <h2>Rastreabilidade</h2>
                <img src={rastreabilidade}/>
                <p>
                    Todas as informações de coleta e de processo que o óleo sofreu são armazenadas
                    e a cada lote frabricado  é gerado um QRcode que leva a página com as informações
                    de seus respectivos lotes.
                </p>
            </div>
        </>
    )
}