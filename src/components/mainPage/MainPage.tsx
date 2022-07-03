import * as React from "react";
import { Link, Route, Routes, useLocation  } from "react-router-dom";
import Footer from "../universal/Footer/Footer";
import Header from "../universal/Header/Header";
import Ipsum from "./Ipsum/Ipsum";
import Lorem from "./Lorem/Lorem";
import "../../../public/fonts.css"
import './styles/MainPage.scss'

const MainPage = () => {
    let location = useLocation();
    // будем учитывать, что шаблон с хедером и футером распространяется лишь на две страницы
    // и с целью масштабирования (допустим, есть другие страницы в SPA, где нет хедеров и футеров) вынесем эти две страницы в отдельный компонент (не App.tsx).
    // по идее, в рамках данного задания, можно было обойти из без этого компонента, работая только в app.tsx
    return (
        <>
            <div className="main-page">
                <Header />
                <main className="main_main-page">
                    <div className="container">
                        <header className="main-page-header">
                            <Link className={`lorem-ipsum-routes ${location.pathname === '/' ? 'active' : 'passive'}`} to="/">Lorem</Link>
                            <Link className={`lorem-ipsum-routes ${location.pathname === '/ipsum' ? 'active' : 'passive'}`} to="/ipsum">Ipsum</Link>
                        </header>
                        <Routes>
                            <Route path='/' element={<Lorem />} />
                            <Route path='/ipsum' element={<Ipsum />} />
                        </Routes>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default MainPage;

