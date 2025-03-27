// import ReactApexChart from "react-apexcharts";
// import Chart from "react-apexcharts";
'use client'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieChart = ({ series, labels }) => {

    const options = {
        chart: {
            type: 'pie',
            background: 'transparent',
            toolbar: { show: true },
        },
        labels: labels,
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '14px',
            markers: {
                width: 16,
                height: 16,
                radius: 8,
            },
        },
        colors: ['rgba(143, 71, 0, 0.7)',
            'rgba(196, 97, 0, 0.8)',
            'rgba(236, 122, 8, 0.8)',
            'rgba(239, 146, 52, 0.8)',
            'rgba(244, 182, 120, 0.8)',
            'rgba(240, 171, 0, 0.8)'],
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '14px',
                colors: ['#fff'], // Labels color
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 1,
                opacity: 0.45,
            },
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: function (val) {
                    return val + ' %';
                },
            },
        },
    };

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="pie"
                height={450}
                width={650}
            />
        </div>
    )
}

export default PieChart
