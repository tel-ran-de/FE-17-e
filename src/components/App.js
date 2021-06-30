import React, {Fragment} from 'react'
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Todo from "./Todo";

const App = () => {


    return (
        <Fragment>
            <Header/>
            <Form/>
            <Todo/>
            <Footer/>
        </Fragment>
    )
}

export default App