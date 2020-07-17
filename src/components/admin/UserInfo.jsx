import React from 'react';
import { Provider } from 'react-redux';
import ToggleButton from 'react-toggle-button'
import './UserInfo.css';
import { Button, Input, ButtonDropdown, DropdownItem } from 'reactstrap';
import Dropdown from './Dropdown';

class UserInfo extends React.Component{
    constructor(props) {
		super(props);
		console.log(props);
        this.state = {
			search: '',
			addMusic: true,
			changeMusic: true,
			blockMusic: false
		};
		this.AddtoggleHandler = this.AddtoggleHandler.bind(this);
		this.ChangetoggleHandler = this.ChangetoggleHandler.bind(this);
		this.BlocktoggleHandler = this.BlocktoggleHandler.bind(this);
	}
	componentDidMount(){
	}
	AddtoggleHandler(event){
		var addMusic = this.state.addMusic;
		this.setState({
			addMusic: !addMusic,
		})
	}
	ChangetoggleHandler(event){
		var changeMusic = this.state.changeMusic;
		this.setState({
			changeMusic: !changeMusic,
		})
	}
	BlocktoggleHandler(event){
		var blockMusic = this.state.blockMusic;
		this.setState({
			blockMusic: !blockMusic,
		})
	}
	
    render() {
		const {search, addMusic, changeMusic, blockMusic} = this.state;
		var AddtoggleHandler = this.AddtoggleHandler;
		var ChangetoggleHandler = this.ChangetoggleHandler;
		var BlocktoggleHandler = this.BlocktoggleHandler;
        var list_users= [
            {id: 1, name:'Mary J. Espino', link:'#', img: 'https://randomuser.me/api/portraits/women/33.jpg'}, 
            {id: 2, name:'Robert A. Diehl', link:'#', img: 'https://randomuser.me/api/portraits/men/86.jpg'}, 
            {id: 3, name:'Kurt L. Henry', link:'#', img: 'https://randomuser.me/api/portraits/men/79.jpg'}, 
            {id: 4, name:'Ema J. Thomas', link:'#', img: 'https://randomuser.me/api/portraits/women/84.jpg'}, 
            {id: 5, name:'Gladys E. Davis', link:'#', img: 'https://randomuser.me/api/portraits/men/32.jpg'}, 
        ];
        // const { pathname } = this.props.location;
        return (
            <div className="reports">
			<div key="reports" className="row reports-page ui-view main" style={styles}>
				<div className="col"> 
					<a href="/user" className="pull-right btn btn-outline-secondary btn-outline btn-rounded">Back to User Mode</a> 
					<h2>Reports</h2> 

					<i className="fa fa-dashboard bg-fade"></i>
					{list_users.filter((list) => {return (list.name.toLowerCase().includes(this.props.searchText.toLowerCase()) || !this.props.searchText)}).map(function(item, i){
                        return(
					<div key={item.id} className="jumbotron media"> 
						<img src={item.img} className="align-self-center mr-3" alt="..." style={{maxHeight: '150px'}} />
						<div className="media-body">
						<h5 className="mt-0">{i+1}. {item.name} 
							<span className='float-right'>
								<Dropdown></Dropdown>
							</span>
						</h5>
						<hr></hr>
						<div className="ml-4 text-cente row align-self-end">
							<div className="col-7"> Roles:</div>
							<div className="col-4"><Input className="" value="Common User" onChange={() => {}}></Input> <Button className="btn-sm float-right">Modify</Button></div>
						</div>
						<hr></hr>
						<div className="ml-4 row">
							<div className="col"> Permissions:</div>
							<div className="col-5"> 
								<div className="row">
									<div className="col-6">Add Music:</div>
									<div className="col-6">
										<ToggleButton
											value={ addMusic || false }
											thumbStyle={{ borderRadius: 2 }}
											trackStyle={{ borderRadius: 2 }}
											onToggle={(value) => {
												AddtoggleHandler(value)
											}} />
										
									</div>
								</div>
								<div className="row">
									<div className="col-6">Change Music:</div>
									<div className="col-6">
										<ToggleButton
											value={ changeMusic || false }
											thumbStyle={{ borderRadius: 2 }}
											trackStyle={{ borderRadius: 2 }}
											onToggle={(value) => {
												ChangetoggleHandler(value)
											}} />
										
									</div>
								</div>
								<div className="row">
									<div className="col-6">Block Music:</div>
									<div className="col-6">
										<ToggleButton
											value={ blockMusic || false }
											thumbStyle={{ borderRadius: 2 }}
											trackStyle={{ borderRadius: 2 }}
											onToggle={(value) => {
												BlocktoggleHandler(value)
											}} />
										
									</div>
								</div>
							</div>
						</div>
							{/* <p>i vulputate fringilla. Donec lacinia congue felis in faucibus.</p> */}
						</div>
					</div> 
                        )
                    })}
				</div>
			</div>
		</div>
        );
    }
};

var styles = {
	width: '-webkit-fill-available'
}

export default UserInfo