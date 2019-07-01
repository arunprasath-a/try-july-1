import React from 'react';
import axios from "axios";

const piJsonURL = "../json_files/pichart.json";
const barJsonURL = "../json_files/pichart.json";
const lineJsonURL = "../json_files/pichart.json";
const radarJsonURL = "../json_files/pichart.json";



const MyHOC = (WrappedComponent) => {
    class NewComponent extends React.Component {


        constructor(props) {
            super(props);
            this.state = {
                data: "value coming from HOC",
                pichartData: [],
                barchartData: [],
                linechartData: [],
                radarchartData: [],
            }

        }

        componentDidMount() {
            this.loadPiChartData();
            this.loadBarChartData();
            this.loadLineChartData();
            this.loadRadarChartData();

        }

        loadPiChartData() {
            return axios.get(piJsonURL)
                .then((response) => {
                    this.setState({
                        pichartData: response.data.data
                    })
                })
        }

        loadBarChartData() {
            return axios.get(barJsonURL)
                .then((response) => {
                    this.setState({
                        barchartData: response.data.data
                    })
                })
        }

        loadLineChartData() {
            return axios.get(lineJsonURL)
                .then((response) => {
                    this.setState({
                        linechartData: response.data.data
                    })
                })
        }

        loadRadarChartData() {
            return axios.get(radarJsonURL)
                .then((response) => {
                    this.setState({
                        radarchartData: response.data.data
                    })
                })
        }



        render() {

            return <WrappedComponent 
            data={this.state.data} 
            pichartData={this.state.pichartData}
            barchartData={this.state.barchartData}
            linechartData={this.state.linechartData}
            radarchartData={this.state.radarchartData}
                {...this.props} />
        }


    }

    return (NewComponent);
}

export default MyHOC;