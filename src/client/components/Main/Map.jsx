import React from 'react';

import Form from './Form/Form.jsx'

import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';
import ReactDOMServer from "react-dom/server";

let count = 0;
export class TestMap extends React.Component {

    constructor() {
        super();

        this.state = {
            userName: '',
            mapName: '',
            description: '',
            markX: '',
            markY: '',
            placemarks: [
                {
                    coors: [52, 53],
                    i: 0
                }
            ],
            isMark: false,
            isLine: false,
            lines: [],
            back: false,
            input: ''

        }
        this.handleClick = this.handleClick.bind(this)
        this.polylineButton = this.polylineButton.bind(this)
    }

    handleInputChange = async ({ userName, mapName ,description  }) => {
        console.log('>>>>', userName, mapName ,description )

       await this.setState({userName, mapName ,description})

        console.log('==STATE==',this.state.userName,this.state.mapName,this.state.description);
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
                    i: count

                }],
                isMark: !this.state.isMark,
                // i: [...this.state.i, this.state.i + 1]
            })
        }

        console.log("placemarks: ", this.state.placemarks)
        console.log("state: ", this.state)

    }

    /* Кнопка удаление последней линии  */

    backButton = () => {
        console.log(this.state.lines)
        this.setState({
            lines: this.state.lines.slice(0, this.state.lines.length - 1)
        })
        console.log(this.state.lines)
    }

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
                    userName: this.state.userName,
                    mapName: this.state.mapName,
                    description: this.state.description
                })
            })

    }

    putInput() {
        console.log('gotIt')

    }

    render() {
        return (

            <YMaps>
                <div onClick={
                    (e) => {
                        if(e.target.hasAttribute("data-baloon-button")) {
                            console.log(e.target.getAttribute('data-baloon-id'))
                        }     
                    }
                }
                onSubmit={(e)=> {
                    if(e.target.hasAttribute("data-baloon-input")) {
                    console.log(">>>>>>>>>>",e.target.value)
                            this.setState({
                                input:e.target.value
                            })
                        }
                }}
                >
                    <Map style={{ height: "400px", width: "100%" , border: "solid"}} defaultState={{ center: [55.75, 37.57], zoom: 9 }} onClick={this.handleClick}>
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
                            data={{ content: 'Back' }}
                            options={{ maxWidth: 128 }}
                            defaultState={{ selected: false }}
                            onClick={this.backButton}
                        />
                        <Polyline
                            geometry={[...this.state.lines]}
                            options={{
                                balloonCloseButton: false,
                                strokeColor: '#DC143C',
                                strokeWidth: 3,
                                strokeOpacity: 0.5,
                            }}
                        />
                        <Placemark geometry={[55.684758, 37.738521]}
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
                            
                        />
                        {this.state.placemarks.map(el => <Placemark geometry={el.coors}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: "https://img.icons8.com/cotton/64/000000/forest.png"
                            }}
                            properties={{
                                balloonContentHeader: `Пункт№ ${el.i}`,
                                balloonContentBody: `<input data-baloon-input placeholder="Описаниe" value=${this.state.input}></input>`,
                                balloonContentFooter: `<button data-baloon-button data-baloon-id='${el.i}'>Сохранить</button>`

                            }}
                        />)}
                    </Map>
                    <Form handleInputChange={this.handleInputChange} />
                    {/* <button onClick={this.saveData}>Save it</button> */}

                </div>
            </YMaps>
        );
    }
}
