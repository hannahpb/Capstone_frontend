import Chart1 from '../Chart1';
import Chart2 from '../Chart2';
function DataVisual () {
    const data2 = [25,10,15,20,25,30,35,40]
    const w = 900;
    const h = 500;
    return (
        <div className='App'>
            <Chart1 />
            <Chart2 data={data2} w={w} h={h} color="green" />
        </div>
    )
}

export default DataVisual;