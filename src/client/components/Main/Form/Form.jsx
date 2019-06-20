import React from 'react';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Form extends React.Component {
    state = {
        userName: '',
        mapName: '',
        description: ''
    }

    onChangeFunc = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    funcOnButton = (e) => {
        e.preventDefault();
        this.props.handleInputChange(this.state);
        this.setState({
            userName: '',
            mapName: '',
            description: ''
        })
    }



    render() {
        return (

            <form className="ui form"
                onSubmit={this.funcOnButton}
                onChange={this.onChangeFunc}
            >

                <br></br>
                <div className="field"
               
                >
                    <label>СОЗДАЙ СВОЙ МАРШРУТ</label>
                    <div className="two fields">
                        <div className="field">
                            <input type="text" placeholder="YOUR NAME" name='userName' value={cookies.get('name')} />
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Название маршрута" name='mapName' value={this.state.mapName} />
                        </div>
                    </div>
                </div>
                <div className="field"  >

                    <label>ОПИСАНИЕ</label>
                    <input type="text" placeholder="Расскажи свою историю" name='description' value={this.state.description} />
                </div>

                <button className="ui red button" type="submit"

                >Поделиться</button>

            </form>
        );
    }
}



export default Form;
