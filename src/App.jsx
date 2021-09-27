import './App.css';
import { ResponsivePie } from '@nivo/pie';
import { data } from './data'
import MoreVertIcon from '@mui/icons-material/MoreVert';


const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
  let total = 237 + 123 + 151

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: '24px',
        fontWeight: 600,
      }}
    >
      {total}
    </text>
  )
}


const MyResponsivePie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 20, right: 0, bottom: 40, left: 60 }}
    startAngle={-122}
    padAngle={2}
    cornerRadius={4}
    innerRadius={0.5}
    activeOuterRadiusOffset={11}
    colors={{ scheme: 'category10' }}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    enableArcLabels
    arcLabel={function (e) { return e.value }}
    arcLabelsSkipAngle={7}
    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 120]] }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: 'Cтекло'
        },
        id: 'lines'
      },
      {
        match: {
          id: 'Алюминий'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'Пластик'
        },
        id: 'lines'
      }
    ]}
    layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric]}
    legends={
      [
        {
          anchor: 'left',
          direction: 'column',
          justify: false,
          translateX: -50,
          translateY: 0,
          itemsSpacing: 5,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#404040',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
  />
)

function App() {

  return (
    <div className="App">
      <div className="diagram">
        <div className="title">
          Площадь изделий
          <MoreVertIcon fontSize="small" sx={{ position: 'absolute', right: 0 }} />
        </div>
        <div className='body'>
          <MyResponsivePie data={data} />
        </div>
      </div>
    </div>
  )
}

export default App
