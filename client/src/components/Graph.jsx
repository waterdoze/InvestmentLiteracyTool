import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

function Graph({ data }) {
    
    console.log("data", data)
    return (
        <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data} margin={{ right: 100, left: 100 }} >
            <CartesianGrid />
            <XAxis dataKey="name"
            interval={'preserveStartEnd'} 
            label = {<AxisLabel axisType='yAxis' x={0} y={0} width={0} height={0}> Price</AxisLabel>}/> {/* change x and y*/}
            <YAxis dataKey={"student"} label = {<AxisLabel axisType='xAxis' x={0} y={0} width={0} height={0}>Date</AxisLabel>}/> {/* change x and y*/}
            <Legend />
            <Tooltip />
            <Line dataKey="student"
            stroke="black" activeDot={{ r: 8 }} />
        </LineChart>
        </ResponsiveContainer>
    );
}

export default Graph;





const AxisLabel = ({ axisType, x, y, width, height, stroke, children }) => {
    const isVert = axisType === 'yAxis';
    const cx = isVert ? x : x + (width / 2);
    const cy = isVert ? (height / 2) + y : y + height + 10;
    const rot = isVert ? `270 ${cx} ${cy}` : 0;
    return (
        <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle" stroke={stroke}>
        {children}
        </text>
    );
};
