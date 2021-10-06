import NavBar from "../NavBar";
import HeaderInicial from "./HeaderInicial";
import MainInicial from "./MainInicial";
import Footer from "../Footer";

export default function PaginaInicial(){
    return(
        <div>
            <NavBar/>
            <HeaderInicial/>
            <MainInicial/>
            <Footer/>
        </div>
    )
}