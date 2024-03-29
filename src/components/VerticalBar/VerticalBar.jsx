import React from 'react';
// import { useTheme } from 'styled-components'
import { useRef, useEffect, useState } from 'react';
import {Division} from "./VerticalBar.styled";
import {  
Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
    Legend,
    ChartDataLabels,
);


export const getChartOptions = (props) => ({
    responsive: true,
        layout: {
            padding: 40,
        },
    scales: {
        x: {
            grid: {
                display: false,
            },
            border: {
                color: "transparent",
            },
            ticks: {
                font: {
                  family: 'Inter',
                    size: 14,
                    weight: 400,
                    lineHeight: 1.5,
                },
                color: 'props.theme.colors.thirdText',
            }
        },
        y: {
            border: {
                color: "transparent",
            },
            grid: {
                display: true,
                color: 'rgba(227, 243, 255, 1)',
            },
            ticks: {
                stepSize: 20,
                color: '#343434',
                font: {
                    family: 'Inter',
                    size: 14,
                    weight: 400,
                    lineHeight: 1.5,
                },
                maxTicksLimit: 100,
            }
        },
    },
    plugins: {
      datalabels: {
        display: true,
        color: 'black',
        font: { weight: 'bold' },
            formatter: (value) => {
                return `${(value)}%`;
            },
        anchor: "end",
          offset: -20,
          align: "start"
  },
    legend: {
          display: false,
    },
    title: {
        display: true,
        text: 'Tasks',
        color: 'props.theme.colors.thirdText',
        align: 'start',
        padding: {top: 0, left: 0, right: 0, bottom: 24},
        font: {
            family: 'Inter',
            size: 14,
            weight: 600,
            lineHeight: 1.5,
        },
      },
    },
});

export const data = {
    labels: ['To Do', 'In Progress', 'Done'],
    datasets: [
    {
      label: 'Dataset 1',
      data: [40, 58, 50],
        borderRadius: 10,
        borderSkipped: 'end',
        barPercentage: 0.7,
        categoryPercentage: 0.25,
    },
    {
      label: 'Dataset 2',
        data: [90, 63, 87],
        borderRadius: 10,
        borderSkipped: 'end',
        barPercentage: 0.7,
        categoryPercentage: 0.25,
    },
  ],
};

function createGradient1(ctx, area) {
    const colorStart = 'rgba(255, 210, 221, 0.00)';
    const colorEnd = '#FFD2DD';

    const gradient1 = ctx.createLinearGradient(0, area.top, 0, area.bottom);
    
    gradient1.addColorStop(0.03, colorStart);
    gradient1.addColorStop(1, colorEnd);
    
    return gradient1;
}

function createGradient2(ctx, area) {
    const colorStart = 'rgba(62, 133, 243, 0.00)';
    const colorEnd = '#3E85F3 ';

    const gradient2 = ctx.createLinearGradient(0, area.top, 0, area.bottom);
    
    gradient2.addColorStop(0, colorStart);
    gradient2.addColorStop(1, colorEnd);
    
    return gradient2;
}

export const BarChart = (props) => {
//   const theme = useTheme();

    console.log(props.theme.colors.thirdText);



    const chartRef = useRef(null);
    
  const [chartData, setChartData] = useState({
    datasets: [],
  });
    
    useEffect(() => {
        const chart = chartRef.current;

        if (!chart) return;

        const gradients = [
        { backgroundColor: createGradient1(chart.ctx, chart.chartArea) },
        { backgroundColor: createGradient2(chart.ctx, chart.chartArea) }
        ];

        const updatedData = {
        ...data,
        datasets: data.datasets.map((datasets, index) => {
            const obj2 = gradients[index];
            return { ...datasets, ...obj2 }
        })
        };

        setChartData(updatedData);
        

        // Оновлення опцій графіка
        chart.options = getChartOptions(props);
        console.log(' getChartOptions(props)')
        chart.update();
        console.log('chart.update')
    }, [props.theme.colors]);
    
    
    
    return (
        <Division>
            <Bar ref={chartRef} options={getChartOptions(props)} data={chartData} />   
        </Division>

    )
}

export default BarChart;
