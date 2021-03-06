
import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import { getData } from "../../utils/services"
import {Loading} from "../../components";
import { TypeChooser } from "react-stockcharts/lib/helper";
import { Overlay, Button } from "@blueprintjs/core";


export default class ChartLoadingScreen extends React.Component {
    render() {
        const nullIndicator = {name: '', height: 0, active: false};
        if (this.props.data.length < 1) {
            return <Loading />
        }
        return (
            <div className="chart-container">
                    <TypeChooser>
                        {type => <Chart
                            type={type}
                            macd={this.props.macd}
                            volume={this.props.volume}
                            chartHeight={this.props.chartHeight}
                            indicatorHeight={this.props.indicatorHeight}
                            rsi={this.props.rsi}
                            line={this.props.line}
                            expandedChard={this.props.expandedChard}
                            atr={this.props.atr ? this.props.atr : nullIndicator}
                            forceIndex={this.props.forceIndex ? this.props.forceIndex : nullIndicator}
                            data={this.props.data}
                        />
                        }
                    </TypeChooser>
            </div>
        )
    }
}

