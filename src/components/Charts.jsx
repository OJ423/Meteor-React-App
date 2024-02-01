import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export default function Charts({data, searchYear}) {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Meteorite Size Chart',
      },
    },
  };
  
  let labels = []
  let mass = []
  
  data.forEach((meteorite) => {
    if (+meteorite.mass >= 15000){
    labels.push(meteorite.name)
    mass.push(meteorite.mass)
  }
  });

  
  const charData = {
    labels,
    datasets: [
      {
        label: `Biggest Meteorites ${searchYear}`,
        data: mass,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  return <Bar data={charData} />;
}