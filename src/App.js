import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from "./Search";
import Home from "./Home";
import {Route , BrowserRouter,Switch} from "react-router-dom"

class BooksApp extends React.Component {
  

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/search" render={()=>
        <Search/>
        }>

        </Route>
        <Route path="/" exact render={
          ()=>
          <Home/>
        }>

        </Route>

      </Switch>
 
      </BrowserRouter>
         )
  }
}

export default BooksApp
