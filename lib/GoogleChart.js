import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { visualization } from './google-jsapi-loader';
import generateId from './generate-id';

class GoogleChart extends Component {
  static propTypes = {
    chartType: React.PropTypes.string.isRequired,
    containerId: React.PropTypes.string,
    data: React.PropTypes.any.isRequired,
    height: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    onError: React.PropTypes.func,
    width: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired
  };

  static defaultProps = {
    containerId: generateId(),
    onError: () => {},
    options: {}
  };

  componentDidMount(){
    visualization().then(() => this.drawChart()).catch(this.props.onError);
  }

  drawChart = () => {
    const { containerId, chartType, data: dataTable, options } = this.props;

    if (global.google && global.google.visualization) {
      new global.google.visualization.ChartWrapper({
        chartType,
        containerId,
        dataTable,
        options
      }).draw(ReactDOM.findDOMNode(this));
    }
  };

  render() {
    const { height, width } = this.props;
    return React.createElement('div', { style: { height, width } });
  }
}

export default GoogleChart;
