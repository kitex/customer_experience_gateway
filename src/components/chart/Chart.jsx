import "./chart.css"
import { LineChart, Line, XAxis, Legend,Tooltip, CartesianGrid,  ResponsiveContainer } from 'recharts';


export default function Chart({title,data}) {
     
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                  <XAxis dataKey="name"  stroke="#5550bd"/>
                  <CartesianGrid strokeDasharray="3 3" />
                  <Line type="monotone" dataKey="Tickets Raised" stroke="#82ca9d" activeDot={{ r: 8 }} /> 
                  <Line type="monotone" dataKey="Site Down" stroke="red" activeDot={{ r: 8 }} />     
                  <Tooltip />
                  <Legend layout="horizontal" verticalAlign="top" align="center"/>
                </LineChart> 
            </ResponsiveContainer>
        </div>
    )
}
