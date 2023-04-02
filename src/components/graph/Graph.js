import './graph.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Graph(props) {

    return (
        <div className='Graph'>
            <div className='graph'>
                <h2 className='title'>Live Code Performance
                </h2>
                <p> <button onClick={props.clearData} className='btn btn-sm'>Clear data</button></p>
                <div className='graph-content'>
                    <ResponsiveContainer>
                        <AreaChart
                            data={props.data}
                            margin={{
                                top: 5,
                                right: 15,
                                left: 10,
                                bottom: 10,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis label={{ fill: "#eff4f7", value: 'input size (n)', offset: -7, position: "insideBottom" }} dataKey="loop" />
                            <YAxis label={{ fill: "#eff4f7", value: 'run time (ms)', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Area dot={true} type="monotone" dataKey="runtime" stroke="#353333" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Graph;
