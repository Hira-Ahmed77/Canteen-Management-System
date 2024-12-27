import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export default function Charts() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((response) => response.json())
      .then((data) => {
        const categories = {};
        data.forEach((order) => {
          const category = order.category.toLowerCase();
          if (categories[category]) {
            categories[category]++;
          } else {
            categories[category] = 1;
          }
        });

        const chartData = Object.entries(categories).map(
          ([category, count]) => [category, count]
        );

        setOrders(chartData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const options = {
    title: "Item Categories",
    pieHole: 0.4,
  };

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={[["Category", "Count"], ...orders]}
        options={options}
      />
    </div>
  );
}
