import React, { Component } from 'react'

const API = 'AIzaSyApNS116W4KsY0SsXS4q1dmzKNRD_RjqKs'
const channelID = 'UCU2PacFf99vhb3hNiYDmxww'
const result = 10;

////https://www.googleapis.com/youtube/v3/search?key=&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`
export default class Youtube extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         resultyt: []
      };
      this.clicked = this.clicked.bind(this);
    };
    
    clicked(){
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);

                //storing result to state variable(resultyt)
                const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/KcvG-sD_Zoc" +obj.id.videoId);
                this.setState({resultyt});
                
            })
            .catch((error) => {
            console.error(error);
        });
    }


    render() {
        // console.log(finalURL);
        console.log(this.state.resultyt);
        return (
            <div>
            <button onClick={this.clicked}>Get youtube videos</button>
            {
                this.state.resultyt.map((link, i) => {
                    console.log(link);
                    var frame = <div key={i} className="youtube"><iframe width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    return frame;
                })
            }
            {this.frame}    
               
                    
                
            </div>
           
        )
    }
}
