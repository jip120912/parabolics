import React, { useEffect} from 'react';
import {HashRouter, Routes, Route } from "react-router-dom";
import './style/App.css';
import "./fontend/Assets/Styles/styles.css"
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import News from './components/pages/News';
import NoMatch from './components/pages/NoMatch';
import Screener from "./components/pages/Screener";
import Crypto from "./components/pages/Crypto";
import Forex from "./components/pages/Forex";
import TradingChart from "./components/pages/tradingChart";
import Insider from "./components/pages/Insider";
import Watchlists from "./components/pages/Watchlists";
import Portfolios from "./components/pages/Portfolios";
import LiveTrade from "./components/pages/LiveTrade";
import Reddit from "./components/pages/Reddit";
//Pages (Presentational Components)
import Fontpage from "./fontend/Pages/Fontpage";
import Pricing from "./fontend/Pages/Pricing";
import Login from "./fontend/Pages/Login";
import Signup from "./fontend/Pages/Signup";
import PublicRoute from "./fontend/Layouts/PublicRoute"
import PublicRouteDash from "./components/layouts/PublicRouteDash";
import Heatmap from './components/pages/Heatmap';
import IsLoggedIn from './components/layouts/IsLoggedIn';
import {  Navigate } from 'react-router-dom'; 
import Settings from './components/layouts/Settings';
import Profile from './components/layouts/Profile';


function App(){

  return (
    <div className="App">
      <ToastContainer/>
           <HashRouter basename="/" forceRefresh>   
            
                       <Routes >
                          <Route path="/" element={<PublicRoute/>} >
                            <Route index element={<Fontpage/>}/>
                            <Route path="/pricing" element={<Pricing/>}/>
                          </Route>
                          {
                              !IsLoggedIn() && 
                                <Route path="/">
                                      <Route path="/login" element={<Login/>}/>
                                       <Route path="/register" element={<Signup/>}/>
                                 </Route>
                          }
                         
                         {
                           IsLoggedIn() ? 
                            <Route path="/" element={<PublicRouteDash/>}>
                                <Route path="/stock" element={<Home />} />
                                <Route path="/news" element={<News />} />
                                <Route path="*" element={<NoMatch/>} /> 
                                <Route path="/screener" element={<Screener/>} /> 
                                <Route path="/heatmap" element={<Heatmap/>} />
                                <Route path="/crypto" element={<Crypto/>} /> 
                                <Route path="/forex" element={<Forex/>} />
                                <Route path="/chart/:id" element={<TradingChart/>} />  
                                <Route path="/insider" element={<Insider/>} />  
                                <Route path="/watchlists" element={<Watchlists/>} />  
                                <Route path="/settings" element={<Settings/>} />
                                <Route path="/portfolio" element={<Portfolios/>} />
                                <Route path="/livetrade" element={<LiveTrade/>} />
                                <Route path="/reddit" element={<Reddit/>} />
                                <Route path="/profile" element={<Profile/>} />
                            </Route>
                            :
                            <Route
                                  path="*"
                                  element={<Navigate to="/login" replace />}
                              />
                             
                          }
                         </Routes>
                   <Footer/>

          </HashRouter>
    </div>
  );
}

export default App;
