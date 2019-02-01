/*
* @Author: fozero@126.
* @Date:   2019-01-31 15:38:46
* @Last Modified by:   fozero
* @Last Modified time: 2019-01-31 23:54:21
*/
import React, { Component } from 'react';

var styles = {
  'title': {
    paddingLeft: '20px',
    paddingRight: '50px',
    position: 'relative'
  },
  'delete': {
    marginLeft: '20px',
    marginRight: '50px'
  }
}

class AppTodos extends Component {

handleChangeComplete () {
    let newComplete = this.props;
    this.props.ChangeCompleteItem(this.props.id);
}

handleDelete () {
    this.props.DeleteItem(this.props.id);
}

  render() {
    return (
      <div className='comment'>
        <div className='content'>
          <span 
               className='author' 
                style={styles.title} 
                onClick={this.handleChangeComplete.bind(this)}
          >
              {this.props.text}
              <span 
                   className={this.props.complete ? 'line' : ''} 
              />
          </span>
          <span className='author' 
                style={styles.title}>
                {this.props.complete ? '已完成' : '未完成'}
          </span>
          <span className='author'>{this.props.id}</span>
          <span className='ui blue button' 
                style={styles.delete} 
                onClick={this.handleDelete.bind(this)}>
                删除
          </span>  
        </div>
      </div>
      );
  }
}
export default AppTodos;