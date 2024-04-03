import React from 'react'
import ReactApexChart from 'react-apexcharts';

const PerformanceReport = () => {

  const state = {        
    veiws: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  };

  const state2 = {
          
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      
      },
      title: {
        text: 'Monthly Report of Visits of Article, 2024',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  
  
  };

  return (
    <div className='create-newsfeed pt-16 pb-10 px-3 lg:pl-20 md:px-3 sm:px-3 bg-gray-200 w-full h-full'>
      <h1 className="text-4xl font-bold text-left  pl-2">Performance Report</h1>
      
      <div className='w-[25vw] col-span-4 bg-white p-3 mx-2 mt-2 rounded shadow'>
        <h3 className='py-2 text-lg font-semibold'>Likes Chart</h3>
        <ReactApexChart options={state.options} series={state.veiws} type="donut" />
      
      </div>
      <div className='col-span-6 bg-white p-3 mx-2 mt-2 rounded shadow '>
        <h3 className='py-2 text-lg font-semibold'>Visits </h3>
        <ReactApexChart options={state2.options} series={state2.series} type="bar" height={350} />
      </div>
      
    </div>
  )
}

export default PerformanceReport
