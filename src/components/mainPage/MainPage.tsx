import * as React from "react";
import Footer from "../universal/Footer/Footer";
import Header from "../universal/Header/Header";
import './styles/MainPage.scss'

const MainPage = () => {
    // будем учитывать, что шаблон с хедером и футером распространяется лишь на две страницы
    // и с целью масштабирования (допустим, есть другие страницы в SPA, где нет хедеров и футеров) вынесем эти две страницы в отдельный компонент (не App.tsx).
    // по идее, в рамках данного задания, можно было обойти из без этого компонента, работая только в app.tsx
    return (
        <>
            <Header />
            <Footer />
        </>
    );
};

export default MainPage;

