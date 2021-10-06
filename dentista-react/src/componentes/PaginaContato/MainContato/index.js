import Card from "../../PaginaInicial/MainInicial/Card"
import './contato.css'

export default function MainContato(){
    return(
        <main>
            <section className='espaco'>
                <h1>horários de <strong>atendimento</strong></h1>
                <p>agende uma consulta pelo telefone <a href='tel:(21)3699-9999'>(21)3699-9999</a></p>
            </section>
            <article className='limitador'>
                <Card>
                    <img src='assets/medico01.png' className='imagem-cliente'/>
                    <p>Dr. Hélio</p>
                    <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
                </Card>
                <Card>
                    <img src='assets/medico02.png' className='imagem-cliente'/>
                    <p>Dr. Carlos</p>
                    <p>Terças e quintas das 13:00 às 18:00</p>
                </Card>
                <Card>
                    <img src='assets/medico03.png' className='imagem-cliente'/>
                    <p>Dra. Suzana</p>
                    <p>Terças, quintas e sábados das 08:00 às 12:00</p>
                </Card>
            </article>
            <article className='mapa'>
                <section className='espaco'>
                    <h1>onde estamos <strong>localizados?</strong></h1>
                    <p>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904</p>
                </section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14695.828171666277!2d-43.184392599999995!3d-22.951809100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1627308409387!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>
            </article>
        </main>
    )
}