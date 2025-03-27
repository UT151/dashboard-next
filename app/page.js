import Cards from "@/components/Cards";
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";
import DonutChart from "@/components/DonutChart";
import { Divider } from 'primereact/divider';

export default function Home() {

  const series = [{
    name: 'Series 1',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }];
  const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  const series2 = [44, 55, 13, 33, 52, 26];
  const labels = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];


  return (
    <div className='bg-gray-200 min-h-screen md'>
      <Cards />
      {/* <Divider type="solid" /> */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-4">
        <div className="w-full relative p-2 bg-white rounded flex justify-center items-center shadow-lg">
          <BarChart series={series} categories={categories} />
        </div>
        <div className="w-full relative p-2 bg-white rounded flex justify-center items-center shadow-lg">
          <BarChart series={series} categories={categories} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-4">
        <div className="w-full relative p-2 bg-white rounded flex justify-center items-center shadow-lg">
          <PieChart series={series2} labels={labels} />
        </div>
        <div className="w-full relative p-2 bg-white rounded flex justify-center items-center shadow-lg">
          <DonutChart series={series2} labels={labels} />
        </div>
      </div>
    </div>
  );
}
