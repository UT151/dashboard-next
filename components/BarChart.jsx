// import ReactApexChart from "react-apexcharts";
// import Chart from "react-apexcharts";
'use client'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChart = ({ series, categories }) => {

    const options = {
        chart: {
            type: 'bar',
            // stacked: 'true',
            toolbar: { show: true },
            events: {
                click(event, chartContext, config) {
                    console.log(config.config.series[config.seriesIndex])
                    console.log(config.config.series[config.seriesIndex].name)
                    console.log(config.config.series[config.seriesIndex].data[config.dataPointIndex])

                    // axios.get(`https://dummyjson.com/products?limit=1`)
                    //     .then(response => {
                    //         console.log("response", response)
                    //     })
                    //     .catch(err => {
                    //         console.log("error", err)
                    //     })
                },
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        xaxis: {
            categories: categories
        },
        tooltip: {
            // theme: 'dark',
            // shared: true,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '75%',
                fontSize: '4px',
                // borderRadius: 10,
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '10px',
                            fontWeight: 900
                        }
                    }
                }
            },
        },
        colors: ['#FF5733', '#33FF57', '#5733FF']
    };

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={450}
                width={650}
            />
        </div>
    )
}

export default BarChart
