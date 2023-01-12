import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend} from 'chart.js'
import {Bar} from 'react-chartjs-2'


ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
)

const Graph = () => {


    const data = {
        labels: ['Javascript', 'HTML', 'CSS', 'REACT', 'UX/UI' ],
        datasets: [{
            label: 'proficiency',
            data: [65, 85, 70, 75, 50,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }


    const  options = {
        indexAxis:'x',

        animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              // loop: true
            }
          },
            scales: {
                x: {
                    title:{
                      display:true,
                    },
                    ticks:{
                        color:['white']
                    }
                  },
                y: {
                    title:{
                        display:true,
                        text:"Percentage",

                      },
                      ticks:{
                        color:['white']
                    },
                    beginAtZero: true
                }
            },
            
        }

      
     

  return (
    <div className='w-full  py-[6rem] lg:h-auto lg:w-full mx-auto lg:py-80 bg-black '>
      <div className='mx-auto w-5/6 lg:w-1/2 lg:h-auto'>
      <h1 className='text-center lg:text-4xl font-cba text-white'>Proficiency</h1>
            <Bar
            data={data}
            height={250}
            width={400}
            options={options}
         />
         
      </div>
       <hr className='w-1/2 mx-auto  opacity-20' />
    </div>
  )
}

export default Graph