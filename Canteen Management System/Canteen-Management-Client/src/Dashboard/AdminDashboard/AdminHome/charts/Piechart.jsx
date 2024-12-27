import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Daily Orders",
  is3D: true,
};

export default function Piechart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/allOrders");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const fetchedData = await response.json();

        const categoryTotal = calculateCategoryTotal(fetchedData);

        const chartData = [["Task", "Total Price"]];
        categoryTotal.forEach((price, category) => {
          chartData.push([category, price]);
        });
        setChartData(chartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to execute only on mount

  const calculateCategoryTotal = (data) => {
    const categoryTotal = new Map();
    data.forEach((item) => {
      const category = item.category;
      const price = parseFloat(item.price);
      if (categoryTotal.has(category)) {
        categoryTotal.set(category, categoryTotal.get(category) + price);
      } else {
        categoryTotal.set(category, price);
      }
    });
    return categoryTotal;
  };

  return (
    <Chart
      chartType="PieChart"
      data={chartData}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
