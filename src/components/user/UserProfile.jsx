import React from 'react';
import { Provider } from 'react-redux';
import ToggleButton from 'react-toggle-button'
import { Button, Input } from 'reactstrap';

class UserProfile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
			search: '',
			addMusic: true,
			changeMusic: true,
            blockMusic: false,
            songsNum: 0
		};
		this.searchHandler = this.searchHandler.bind(this);
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
	searchHandler(event){
        this.setState({ search: event.target.value})
    }
    render() {
		const {search, addMusic, changeMusic, blockMusic, songsNum} = this.state;
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
					{/* <a href="/" className="pull-right btn btn-outline-secondary btn-outline btn-rounded">Back to Home</a>  */}
			<div key="reports" className="row reports-page ui-view main" style={styles}>
				<div className="col" style={{borderRight: '1px dotted #333'}}> 
					<h2 className="text-center">Adding Music</h2> 
                    <div className="jumbotron my-3">
                        <div>
                            <div className="h5">Artist Registry</div>
                            <Input type="text" placeholder="Type the name of Artist"></Input>
                            <div className="d-flex m-1 justify-content-end"><Button value="Add" className="btn-sm">Add</Button></div>
                        </div>
                        <div>
                            <div className="h5">Song Registry</div>
                            <Input type="text" placeholder="Type the name of Song"></Input>
                            <div className="d-flex m-1 justify-content-end"><Button value="Add" className="btn-sm">Add</Button></div>
                        </div>
                        <div>
                            <div className="h5">Album Registry</div>
                            <div className="">
                                <p className="p my-1"><strong>Artist Name</strong></p>
                                <Input type="text" placeholder="Type the name of Artist"></Input>
                                <div className="d-flex m-1 justify-content-end"><Button value="Add" className="btn-sm">Add</Button></div>
                            </div>
                            <div className="">
                                <p className="p my-1"><strong>Album Name</strong></p>
                                <Input type="text" placeholder="Type the name of Album"></Input>
                                <div className="d-flex m-1 justify-content-end"><Button value="Add" className="btn-sm">Add</Button></div>
                            </div>
                            <div className="">
                                <p className="p my-1"><strong>Songs</strong></p>
                                <p>Number of the Songs: {songsNum}</p>
                            </div>
                        </div>
                    </div>
				</div>
				<div className="col"> 
					<h2 className="text-center">Music Management</h2> 
                    <div className="jumbotron my-3">
                        <div>
                            <div className="h5">Block Song</div>
                            <Input type="text" placeholder="Type the name of Song"></Input>
                            <div className="d-flex m-1 justify-content-end"><Button value="Block" className="btn-sm">Block</Button></div>
                        </div>
                        <div>
                            <div className="h5 border-top border-bottom py-1">Modify Song</div>
                            <div className="row align-items-center">
                                <div className="col">Previous Song:
                                    <Input type="text" placeholder="Song Name"></Input>
                                </div>
                                ->
                                <div className="col">New Song:
                                    <Input type="text" placeholder="Song Name"></Input>
                                </div>
                            </div>
                            <div className="d-flex m-1 justify-content-end"><Button value="Save" className="btn-sm">Save Changes</Button></div>
                        </div>
                        <div>
                            <div className="h5 border-top border-bottom py-1">Modify Artist</div>
                            <div className="row align-items-center">
                                <div className="col">Previous Artist:
                                    <Input type="text" placeholder="Type Name"></Input>
                                </div>
                                ->
                                <div className="col">New Artist:
                                    <Input type="text" placeholder="Type Name"></Input>
                                </div>
                            </div>
                            <div className="d-flex m-1 justify-content-end"><Button value="Save" className="btn-sm">Save Changes</Button></div>
                        </div>
                        <div>
                            <div className="h5 border-top border-bottom py-1">Modify Album</div>
                            <div className="row align-items-center">
                                <div className="col-10">
                                    <div className="row">
                                        <div className="col">
                                        Album Name:
                                        </div>
                                    <Input type="text" className="col form-control-sm" placeholder="Type Name"></Input>
                                    </div>
                                </div>
                            </div>
                                
                            <div className="row m-2 justify-content-center">
                                <div className="row">
                                    <Button className="btn-sm m-1 active" style={{borderRadius: '50px'}}>Song 1</Button>
                                    <Button className="btn-sm m-1" style={{borderRadius: '50px'}}>Song 2</Button>
                                    <Button className="btn-sm m-1" style={{borderRadius: '50px'}}>Song 3</Button>
                                    <Button className="btn-sm m-1" style={{borderRadius: '50px'}}>Song 4</Button>
                                    <Button className="btn-sm m-1" style={{borderRadius: '50px'}}>Song 5</Button>
                                </div>
                                <div className="row">
                                    <Button className="btn-sm m-1" style={{borderRadius: '50px'}}>Song 6</Button>
                                    <Button className="btn-sm m-1" style={{borderRadius: '50px'}}>Song 7</Button>
                                    <Button className="btn-sm m-1" style={{borderRadius: '50px'}}>Song 8</Button>
                                    <Button className="btn-sm m-1" style={{borderRadius: '50px'}}>Song 9</Button>
                                    <Button className="btn-sm m-1" style={{borderRadius: '50px'}}>Song 10</Button>
                                </div>
                                <div className="btn-group my-2">
                                    <div className="d-flex"><Button value="block" className="btn-sm">Block</Button></div>
                                    <div className="d-flex"><Button value="delete" className="btn-sm">Delete</Button></div>
                                    <div className="d-flex"><Button value="change" className="btn-sm">Change</Button></div>
                                </div>
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

export default UserProfile