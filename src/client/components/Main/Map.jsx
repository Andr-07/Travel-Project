import React from 'react';

import { YMaps, Map, RouteButton, Placemark } from 'react-yandex-maps';

export class TestMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            c1: '',
            c2: '',
            placemarks: []
        }
    }

    handleClick = async (event) => {
      
        let coords = await event.get('coords');
        let coord1 = coords[0];
        let coord2 = coords[1];

        this.setState({
            c1: coord1,
            c2: coord2,
            placemarks: [...this.state.placemarks, [coord1, coord2]]
        })
    }

    testClick = () => {
        return (
            <Placemark
                geometry={[this.state.c1, this.state.c2]} />
        )

    }

    render() {
        console.log('PLACEMARKS:    ', this.state.placemarks)
        console.log('STATE    ', this.state)
        return (
        

            <YMaps>
                <div>
                    <Map style={{ width: "100%", height: "600px" }} 
                    defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                     onClick={this.handleClick}>
                        <Placemark geometry={[55.684758, 37.738521]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref:"https://img.icons8.com/cotton/64/000000/forest.png",
                                iconContent: 'Посмотри'
                                }}
                                properties={{
                                    balloonContent:"Здесь можно выпить",
                                }}
                                modules={
                                    ['geoObject.addon.balloon', 'geoObject.addon.hint', 'geoObject.addon.editor']
                                }
                                
                                />
                        {/* {this.testClick()} */}
                        {this.state.placemarks.map(el => <Placemark geometry={el} options={{
                                iconLayout: 'default#image',
                                iconImageHref:"https://img.icons8.com/cotton/64/000000/forest.png"
                                }}/>)}
                    </Map>
                </div>
            </YMaps>
        );
    }
  }
