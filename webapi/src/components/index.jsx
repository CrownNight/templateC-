import React from 'react';
import webApi from '../webApi';
import {Button} from 'antd';

export default class Index extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
       
    }
    click(){
        webApi.get('http://localhost:50906/api/todoapi').then(data=>{ 
            this.setState({data})
        })
    }

    render(){
        return(
            <div>
                <Button onClick={this.click.bind(this)} type="primary">点击执行</Button>
                {this.state.data[0]}
            </div>
        )
    }
}