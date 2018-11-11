import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2'

defaults.global.animation = false
defaults.global.legend.display = false
defaults.global.tooltips.enabled = false

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
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      data: [3, 10, 30, 40, 80, 45, 50, 89, 73, 92, 42, 46, 39, 36, 39, 20],
    },
  ],
}
export default class Chart extends Component {
  render() {
    return (
      <div>
        <Bar
          data={data}
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
