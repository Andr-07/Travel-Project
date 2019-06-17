import React from 'react';

import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';

export class TestMap extends React.Component {

    constructor() {
        super();

        this.state = {
            markX: '',
            markY: '',
            placemarks: [],
            isMark: false,
            isLine: false,
            lines: [],
            back: false
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
            this.setState({
                markX: coord1,
                markY: coord2,
                placemarks: [...this.state.placemarks, [coord1, coord2]],
                isMark: !this.state.isMark
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
                    allLines: this.state.lines
                })
            })

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
                            }}
                            modules={
                                ['geoObject.addon.balloon', 'geoObject.addon.hint', 'geoObject.addon.editor']
                            }

                        />
                        {this.state.placemarks.map(el => <Placemark geometry={el} options={{
                            iconLayout: 'default#image',
                            iconImageHref: "https://img.icons8.com/cotton/64/000000/forest.png"
                        }} />)}
                    </Map>
                    <button onClick={this.saveData}>Save it</button>
                </div>
            </YMaps>
        );
    }
}
