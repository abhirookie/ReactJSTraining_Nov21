import React from 'react';
import Cell from './cell-v1';

class Board extends React.Component{
    constructor(props)
    {
        super(props);        
        this.state={
            value:"",
            c_id:0
        };
        this.cell_state=["","","","","","","","",""];
    }

    render(){
        
        const change=(newValue)=>{
            this.setState({value: newValue[0],c_id: newValue[1]})            
                    }
       
        this.cell_state[this.state.c_id]=this.state.value

        return (
            <div className="board">
                <Cell onClk={change} v={this.state.value} id={0} value={this.cell_state[0]}/>
                <Cell onClk={change} v={this.state.value} id={1} value={this.cell_state[1]}/>
                <Cell onClk={change} v={this.state.value} id={2} value={this.cell_state[2]}/>
                <Cell onClk={change} v={this.state.value} id={3} value={this.cell_state[3]}/>
                <Cell onClk={change} v={this.state.value} id={4} value={this.cell_state[4]}/>
                <Cell onClk={change} v={this.state.value} id={5} value={this.cell_state[5]}/>
                <Cell onClk={change} v={this.state.value} id={6} value={this.cell_state[6]}/>
                <Cell onClk={change} v={this.state.value} id={7} value={this.cell_state[7]}/>
                <Cell onClk={change} v={this.state.value} id={8} value={this.cell_state[8]}/>
                
            </div>
        );        
    }
}

export default Board;