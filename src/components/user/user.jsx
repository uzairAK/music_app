import React from 'react';
import { Provider } from 'react-redux';
import './user.css'
// import '../../bootstrap/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class UserDashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: 1
        };
        this.toggleClass= this.toggleClass.bind(this);
    }
    toggleClass(i) {
    //   const currentState = this.state.active;
    console.log(i);
      this.setState({ active: i });
    };
    render() {
        var state = this.state;
        var toggleClass = this.toggleClass;
        var list_reports= [
            {name:'Area', link:'#'}, 
            {name:'Genre', link:'#'}, 
            {name:'Album by Artist', link:'#'}, 
            {name:'Long Songs', link:'#'}, 
            {name:'Users', link:'#'}, 
            {name:'Average', link:'#'}, 
            {name:'Recent Albums', link:'#'}, 
            {name:'Collaborative', link:'#'}, 
        ];
        // const { pathname } = this.props.location;
        return (
          <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark m-auto">
    <ul className="navbar-nav nav mr-0 ml-auto">
     <li className="nav-item active">
        <a className="nav-link" href="#">Sign Out <span className="sr-only">(current)</span></a>
      </li>
    </ul>
</nav>
            <div className="dashboard" style={{
                overflow: 'auto'
              }}>
            <div className="dashboard-pag ui-view"> 
              <div className="container-fluid"> 
                <div className="row"> 
                  <div className="col-sm-3 col-md-2 sideba"> 
                    <div className="text-center"> 
                      <h3 className="brand"><small>Andreas</small></h3> 
                      <img alt="" src={process.env.PUBLIC_URL + '/avatar-user.png'} className="user-avatar border rounded" />
                    </div> 
                    <hr></hr>
                    <h2 className=""><small>Reports by:</small></h2>
                    <ul className="list-grou nav flex-column nav-sidebar justify-content-start"> 
                    {list_reports.map(function(item, i){
                        return(<li key={i} className={( state.active === i) ? 'list-group-item active': ''} >
                            <a href={item.link} className="btn" onClick={() => toggleClass(i)}>{item.name}</a>
                        </li> 
                        )
                    })}
                    </ul>
                    <div className="text-cente m-2" style={{position: "absolute", bottom: '60px'}}>
                      <h2 className="text-white">Page Name</h2>
                      </div> 
                  </div>
    
                  <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 mai ui-view ng-enter-active">
                    {React.cloneElement(<div id="body-container" className="ui-view">{this.props.content}</div> || <div />)}
                  </div>
                </div> 
              </div> 
            </div>
          </div>
          </div>
        );
    }
};

var styles = {
	width: '-webkit-fill-available'
}

export default UserDashboard