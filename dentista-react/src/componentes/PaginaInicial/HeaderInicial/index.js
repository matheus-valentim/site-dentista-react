import './headerInicial.css'
export default function HeaderInicial(){
    return(
        <header>
            <section className='centralizar'>
                <h1><span className='amareloA'>Os melhores</span> <strong className='amareloB'>aparelhos dentários!</strong></h1>
                <p className='branco'>Confira abaixo todas as expecialidades odontológicas que temos a disposição!</p>
            </section>
            <section className='itens'>
                <div className='item branco'>
                    <img src='assets/dente.png'/>
                    <p>pré-avaliação</p>
                </div>
                <div className='item branco'>
                    <img src='assets/dente.png'/>
                    <p>Aparelhos Dentários</p>
                </div>
                <div className='item branco'>
                    <img src='assets/dente.png'/>
                    <p>Raio-X Digital</p>
                </div>
                <div className='item branco'>
                    <img src='assets/dente.png'/>
                    <p>Clareamento Dental</p>
                </div>
            </section>
        </header>
    )
}