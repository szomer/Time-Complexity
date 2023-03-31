import './graph.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';


function Graph() {


    const [data, setData] = useState([
        {
            loop: 0,
            runtime: 0,
        }
    ]);

    function insertData(newLoop, newRuntime) {
        setData((old) => {
            return [
                ...old,
                {
                    loop: newLoop,
                    runtime: newRuntime,
                },
            ]
        })
    }

    function clearData() {
        setData([
            {
                loop: 0,
                runtime: 0,
            }
        ]);
    }


    useEffect(() => {
        insertData(80, 100);
    }, []);


    return (
        <div className='Graph'>
            <div className='graph'>
                <h2 className='title'>Live Code Performance
                </h2>
                <p> <button onClick={() => { clearData(); }} className='btn btn-sm'>Clear data</button></p>
                <div className='graph-content'>
                    <ResponsiveContainer>
                        <AreaChart
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
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
