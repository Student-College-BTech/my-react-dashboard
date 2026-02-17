import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell
} from "recharts";

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 10000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 15000 },
  { name: "May", value: 10000 },
  { name: "Jun", value: 20000 },
  { name: "Jul", value: 15000 },
  { name: "Aug", value: 25000 }
];

const pieData = [
  { name: "Direct", value: 55 },
  { name: "Social", value: 30 },
  { name: "Referral", value: 15 }
];

const COLORS = ["#4e73df", "#1cc88a", "#36b9cc"];

const Charts = () => {
  return (
    <div className="charts">
      <div className="chart-box">
        <h4>Earnings Overview</h4>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#4e73df" />
        </LineChart>
      </div>

      <div className="chart-box">
        <h4>Revenue Sources</h4>
        <PieChart width={400} height={300}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Charts;
