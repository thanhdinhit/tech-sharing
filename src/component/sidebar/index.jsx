import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';
import { routes } from '../../data/sidebar';
import ReactMarkdown from 'react-markdown';
import AppMarkdown from '../../data/Post01.md';
import AppMarkdown2 from "../../data/Post02.md";
import MarkDown from 'markdown-to-jsx';

//$FlowFixMe
class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckMobile: false,
            markdown: '',
            markdown2: '',
            dataSource: "",
        }
    }


    componentWillMount() {
        // const { dataSource } = this.state;
        // const path = window.location.href; // returns the absolute URL of a page
        // let result = path.match(/\w+:\/\/+\w+:3000(\/+\w+\/+\d+)/);
        // const pathname = window.location.pathname //returns the current url minus the domain name
        // this.findArrayElementByTitle(dataMarkDown, pathname);
        // this.findArrayElementByTitle(dataMarkDown, pathname);
        fetch(AppMarkdown).then((response) => response.text()).then((text) => {
            this.setState({ markdown: text })
        })
    }

    findArrayElementByTitle = (data, val) => {
        let matches = data.filter(v => v.path.toLowerCase().includes(val));
        this.setState({
            // dataSource: matches[0].file
            // dataSource: dataMD
        }, () => {
            fetch(this.state.dataSource).then(res => res.text()).then(text => this.setState({ markdown: text }));
        })
    }

    render() {
        const { markdown } = this.state;
        return (
            <BrowserRouter>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            padding: "10px",
                            width: "200px",
                            background: "#f0f0f0"
                        }}
                    >
                        <div className='title-style'>
                            Document
                        </div>
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/txt01">txt01</Link>
                            </li>
                            <li>
                                <Link to="/txt02">txt02</Link>
                            </li>
                            <li>
                                <Link to="/txt03">txt03</Link>
                            </li>
                            <li>
                                <Link to="/txt04">txt04</Link>
                            </li>
                            <li>
                                <Link to="/txt05">txt05</Link>
                            </li>
                            <li>
                                <Link to="/txt06">txt06</Link>
                            </li>
                            <li>
                                <Link to="/txt07">txt07</Link>
                            </li>
                            <li>
                                <Link to="/txt08">txt08</Link>
                            </li>
                            <li>
                                <Link to="/txt09">txt09</Link>
                            </li>
                            <li>
                                <Link to="/txt10">txt10</Link>
                            </li>
                            <li>
                                <Link to="/txt11">txt11</Link>
                            </li>
                        </ul>

                        <p>Design by DinhNguyen</p>
                        {/* {routes.map((route, index) => (
                            // You can render a <Route> in as many places
                            // as you want in your app. It will render along
                            // with any other <Route>s that also match the URL.
                            // So, a sidebar or breadcrumbs or anything else
                            // that requires you to render multiple things
                            // in multiple places at the same URL is nothing
                            // more than multiple <Route>s.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))} */}
                    </div>

                    <div style={{ flex: 1, padding: "10px" }}>
                        aaa
                        {routes.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                        <MarkDown>
                            {markdown}
                        </MarkDown>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default SideBar;