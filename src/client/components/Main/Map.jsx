import React from 'react';
import CenterMode from './CenterMode/CenterMode'

import Form from './Form/Form.jsx'

import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';
import ReactDOMServer from "react-dom/server";

import Cookies from 'universal-cookie';

const cookies = new Cookies();

let count = 0;
let input = 'start';
export class TestMap extends React.Component {

    constructor() {
        super();

        this.state = {
            userName:'',
            mapName: '',
            description: '',
            markX: '',
            markY: '',
            placemarks: [
                {
                    coors: [],
                    i: 1,
                    balloonInput:input
                }
            ],
            isMark: false,
            isLine: false,
            lines: [],
            back: false,
            input: '',

        }
        this.handleClick = this.handleClick.bind(this)
        this.polylineButton = this.polylineButton.bind(this)
    }

    handleInputChange = async ({ userName, mapName, description }) => {
        console.log('>>>>', userName, mapName, description)

        await this.setState({ userName, mapName, description })

        console.log('==STATE==', this.state.userName, this.state.mapName, this.state.description);
        this.saveData();
    }


    /* Кнопка перехода на маркер */

    markButton = () => {
        this.setState({
            isMark: !this.state.isMark
        })
    }

    /* Кнопка перехода на линию */

    polylineButton = () => {
        this.setState({
            isLine: !this.state.isLine
        })
        console.log('falseortru line', this.state.isLine)
    }

    /* Кнопка для рисования маркера и линии  */

    handleClick = (event) => {
        let coords1 = event.get('coords')
        if (this.state.isLine === true) {
            this.setState({
                lines: [...this.state.lines, coords1]
            })
        }

        if (this.state.isMark === true) {
            let coordsMarks = event.get('coords');
            let coord1 = coordsMarks[0];
            let coord2 = coordsMarks[1];
            count++;
            this.setState({
                markX: coord1,
                markY: coord2,
                placemarks: [...this.state.placemarks, {
                    coors: [coord1, coord2],
                    i: count,
                    balloonInput: input

                }],
                // isMark: !this.state.isMark,
                // i: [...this.state.i, this.state.i + 1]
            })
        }

        console.log("placemarks: ", this.state.placemarks)
        console.log("state: ", this.state)

    }

    /* Кнопка удаление последней линии  */

    backButtonLine = () => {
        console.log(this.state.lines)
        this.setState({
            lines: this.state.lines.slice(0, this.state.lines.length - 1)
        })
        console.log(this.state.lines)
    }

    backButtonMark = () => {
        console.log(this.state.placemarks)
        count--;
        this.setState({
            placemarks: this.state.placemarks.slice(0, this.state.placemarks.length - 1)
        })
        console.log(this.state.placemarks)
    }



        /* Cохранение одной карты  */

    saveData = async () => {
        let response = await fetch('/api/oneTour',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    allMarks: this.state.placemarks,

                    allLines: this.state.lines,
                    userName: cookies.get('name'),
                    mapName: this.state.mapName,
                    description: this.state.description

                })
            })
            this.setState({
                placemarks:[],
                lines:[]
            })
            count = 0;

    }



    render() {
        return (
            <div class="ui center aligned segment">

            <YMaps>
                <form onSubmit={ (e) => {
                    e.preventDefault();
                    console.dir(e.target.elements[0].value)
                    console.log('target',e.target.elements[1].id)
                    let targetId = e.target.elements[1].id;
                    input = e.target.elements[0].value;
                    let newArr = [...this.state.placemarks]
                    newArr[targetId].balloonInput = e.target.elements[0].value
                    console.log('>>>',newArr[targetId].balloonInput)
                    this.setState({
                        placemarks: newArr
                        })
                        
                    // })

                }}
                >
                    <Map style={{ height: "400px", width: "100%", border: "outset 1px #3f7ca8"}} defaultState={{ center: [55.75, 37.57], zoom: 9 }} onClick={this.handleClick}>

  
                        <Button
                            data={{ content: 'Mark' }}
                            options={{ maxWidth: 128 }}
                            defaultState={{ selected: false }}
                            onClick={this.markButton}
                        />
                        <Button
                            data={{ content: 'Line' }}
                            options={{ maxWidth: 128 }}
                            defaultState={{ selected: false }}
                            onClick={this.polylineButton}
                        />
                          <Button
                            data={{ content: 'Back mark' }}
                            options={{ maxWidth: 128 }}
                            defaultState={{ selected: false }}
                            onClick={this.backButtonMark}
                        />

                        <Button
                            data={{ content: 'Back line' }}
                            options={{ maxWidth: 128 }}
                            defaultState={{ selected: false }}
                            onClick={this.backButtonLine}
                        />
                      
                        <Polyline
                            geometry={[...this.state.lines]}
                            options={{
                                balloonCloseButton: false,
                                strokeColor: '#0000FF',
                                strokeWidth: 4,
                                strokeOpacity: 0.5,
                                strokeStyle: 'dot'
                            }}
                        />
                        {/* <Placemark geometry={[55.684758, 37.738521]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: "https://img.icons8.com/cotton/64/000000/forest.png",
                                iconContent: 'Посмотри'
                            }}
                            properties={{
                                hintContent: "Здесь можно выпить",
                                balloonContentHeader: "Балун метки",
                                balloonContentBody: "Содержимое <em>балуна</em> метки",
                            }}
                            modules={
                                ['geoObject.addon.balloon', 'geoObject.addon.hint', 'geoObject.addon.editor']
                            }
                        // onClick={this.putInput}

                        /> */}

                        {this.state.placemarks.map(el => <Placemark geometry={el.coors}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: `https://img.icons8.com/color/48/000000/${el.i}-circle.png`,
                                draggable: true
                                
                            }}
                            properties={{
                                balloonContentHeader: `Пункт№ ${el.i} - ${el.balloonInput}`, 
                                balloonContentBody: `<input data-baloon-input placeholder="Описаниe" value=${el.balloonInput}></input>`,
                                balloonContentFooter: `<button data-baloon-button data-balloon-id='${el.i}' id='${el.i}'>Сохранить</button>`

                            }}
                        />)}
                    </Map>
                    <Form handleInputChange={this.handleInputChange} />
                    {/* <button onClick={this.saveData}>Save it</button> */}
                    

                </form>

            </YMaps>
            </div>
        );
    }
}
