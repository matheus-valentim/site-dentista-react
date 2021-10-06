import './mainInicial.css'
import Card from './Card'
import { Link } from 'react-router-dom'
import PaginaContato from '../../PaginaContato'

export default function MainInicial(){
    return(
        <main>
            <article className='centralizar'>
                <h2 className='espaco'>por que usar <strong>aparelho</strong></h2>
                <img src='assets/aparelho.png'/>
            </article>
            <section className='limitador'>
                <Card>
                        <h3>Dentes alinhados</h3>
                        <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
                </Card>
                <Card>
                        <h3>Melhorar a dicção e a higiene dentária</h3>
                        <p>Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
                </Card>
                <Card>
                        <h3>Corrigir espaço entre os dentes</h3>
                        <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
                </Card>
            </section>
            <article>
            <h2 className='centralizar'>veja o que os nossos <strong>clientes</strong> estão falando</h2>
            <section className='limitador espaco'>
                <Card>
                    <img src='assets/cliente01.png' className='imagem-cliente'/>
                    <p>Alberto</p>
                    <p>Usei aparelho por 2 anos e agora posso sorrir novamente.</p>
                </Card>
                <Card>
                    <img src='assets/cliente02.png'className='imagem-cliente'/>
                    <p>Eliana</p>
                    <p>Meus dentes eram espaçados e depois de 1 ano estão no lugar certo.</p>
                </Card>
                <Card>
                    <img src='assets/cliente03.png' className='imagem-cliente'/>
                    <p>Carla</p>
                    <p>Começei a usar ano passado e já estou notando a diferença.</p>
                </Card>
            </section>
            </article>
            <Link to='/contato' className='botao'>entrar em contato</Link>
        </main>
    )
}