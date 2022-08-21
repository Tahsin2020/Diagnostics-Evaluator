import {AreaChart,XAxis,YAxis,linearGradient,CartesianGrid,Tooltip,Area, Label} from 'recharts'
function Data_Table({data}){
    const info = data.map((doc)=>{return doc.data()})
    return(
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Time</th>
                        <th>Motivation</th>
                        <th>Focus</th>
                        <th>Joy</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((doc)=>{
                        data = (doc.data())
                        return (<tr>
                        <td>{data.title}</td>
                        <td>{data.time}</td>  
                        <td>{data.motivation}</td>
                        <td>{data.focus}</td>
                        <td>{data.joy}</td>
                        <td>{data.note}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <AreaChart width={800} height={400} data={info} className='Graph'>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorXv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="motivation" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="focus" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                <Area type="monotone" dataKey="joy" stroke="#000000" fillOpacity={1} fill="url(#colorXv)" />
                <XAxis dataKey="time" tick={false}  >
                    <Label value="Time" offset={35} position="insideBottom" />
                </XAxis>
                <YAxis >
                    <Label value="Values" offset={66}  position="insideLeft"  />
                </YAxis>
            </AreaChart>

        </div>
    )
}

export default Data_Table;