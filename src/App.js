import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize=12;
  apiKey = 'feb09f8648ab44dab080f7b8e4160779'
  
  state = {
    progress : 0
  }
  setProgress = (progress)=>{
    this.setState({progress : progress})
  }
  
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            color='white'
            progress={this.state.progress}
          />
          <Routes>
            <Route path = "/" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "/general" pageSize = {this.pageSize} country = {"in"} category = {"general"} />} />  
            <Route path = "/business" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "business" pageSize = {this.pageSize} country = {"in"} category = {"business"}   />} />
            <Route path = "/sports" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "sports" pageSize = {this.pageSize} country = {"in"} category = {"sports"}/>} />
            <Route path = "/science" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "science" pageSize = {this.pageSize} country = {"in"} category = {"science"}/>} />
            <Route path = "/entertainment" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}   key = "entertainment" pageSize = {this.pageSize} country = {"in"} category = {"entertainment"}/>} />
            <Route path = "/health" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "health" pageSize = {this.pageSize} country = {"in"} category = {"health"}/>} />
            <Route path = "/technology" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "technology" pageSize = {this.pageSize} country = {"in"} category = {"technology"}/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}


