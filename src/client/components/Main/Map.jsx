import React from 'react';
import CenterMode from './CenterMode/CenterMode'

import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';
import ReactDOMServer from "react-dom/server";

let count = 0;
export class TestMap extends React.Component {

    constructor() {
        super();

        this.state = {
            markX: '',
            markY: '',
            placemarks: [
                {
                    coors: [52,53],
                    i:0
                }  
            ],


            isMark: false,
            isLine: false,
            lines: [],
            back: false,


        }
        this.handleClick = this.handleClick.bind(this)
        this.polylineButton = this.polylineButton.bind(this)
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
    {method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        allMarks: this.state.placemarks,
        allLines: this.state.lines
     })
    })

  }

    putInput() {
           console.log('gotIt')
           
        }
        
        render() {
            return (
                
                <YMaps>
                <div>
                    <Map style={{ height: "600px", width: "100%" }} defaultState={{ center: [55.75, 37.57], zoom: 9 }} onClick={this.handleClick}>
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
                                balloonContentFooter: `<button onClick={${this.putInput}}>Save</button>`
                            }}
                            modules={
                                ['geoObject.addon.balloon', 'geoObject.addon.hint', 'geoObject.addon.editor']
                            }
                            onClick={this.putInput}

                        />
                        {this.state.placemarks.map(el => <Placemark geometry={el.coors} 
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: `https://img.icons8.com/color/48/000000/${el.i}-circle.png`
                        }}
                        properties={{
                            balloonContentHeader: `Пункт№ ${el.i}` }}
                            /> )}
                    </Map>
                    {this.state.placemarks.map(el => <li>{el.coors}</li>)}
                <button onClick={this.saveData}>Save it</button>
                        {!this.state.isMark ? <input></input> : <h1></h1>}
                </div>
            </YMaps>
        );
    }
}
