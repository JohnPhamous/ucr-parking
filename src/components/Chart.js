import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2'

defaults.global.animation = false
defaults.global.legend.display = false
defaults.global.tooltips.enabled = false

export default class Chart extends Component {
  getTrafficData = () => {
    const data = {
      labels: [
        '6a',
        '',
        '',
        '9am',
        '',
        '',
        '12p',
        '',
        '',
        '3pm',
        '',
        '',
        '6pm',
        '',
        '',
        '9pm',
      ],
      datasets: [
        {
          label: 'Traffic Data',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          data: this.props.data,
        },
      ],
    }

    return data
  }
  render() {
    return (
      <div>
        <Bar
          data={this.getTrafficData()}
          width={100}
          height={150}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  gridLines: {
                    drawOnChartArea: false,
                  },
                  categoryPercentage: 1.0,
                  barPercentage: 0.9,
                },
              ],
              yAxes: [
                {
                  display: false, // this will hide vertical lines
                },
              ],
            },
          }}
        />
      </div>
    )
  }
}
