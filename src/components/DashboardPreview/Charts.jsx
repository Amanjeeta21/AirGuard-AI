import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { aqiTrendData, pollutantData } from "../../utils/constants.js";

export function AQILineChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={aqiTrendData}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 210, 189, 0.2)" />
        <XAxis dataKey="time" stroke="currentColor" />
        <YAxis stroke="currentColor" />
        <Tooltip contentStyle={{ background: "#07131f", border: "1px solid rgba(148, 210, 189, 0.3)" }} />
        <Line type="monotone" dataKey="aqi" stroke="#00C9A7" strokeWidth={3} dot={{ fill: "#94D2BD" }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function PollutantBarChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={pollutantData}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 210, 189, 0.2)" />
        <XAxis dataKey="name" stroke="currentColor" />
        <YAxis stroke="currentColor" />
        <Tooltip contentStyle={{ background: "#07131f", border: "1px solid rgba(148, 210, 189, 0.3)" }} />
        <Bar dataKey="value" fill="#94D2BD" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
