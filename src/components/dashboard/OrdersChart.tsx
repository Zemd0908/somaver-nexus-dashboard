import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Données d'exemple pour les commandes
const ordersData = {
  labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"],
  datasets: [
    {
      label: "Commandes",
      data: [65, 78, 89, 94, 87, 102],
      borderColor: "hsl(120, 100%, 25%)",
      backgroundColor: "hsla(120, 100%, 25%, 0.1)",
      tension: 0.4,
    },
  ],
};

// Données d'exemple pour les produits
const productsData = {
  labels: ["Produit A", "Produit B", "Produit C", "Produit D"],
  datasets: [
    {
      label: "Ventes",
      data: [300, 450, 200, 380],
      backgroundColor: [
        "hsl(120, 100%, 25%)",
        "hsl(120, 60%, 45%)",
        "hsl(120, 50%, 60%)",
        "hsl(120, 40%, 75%)",
      ],
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export const OrdersChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Évolution des commandes */}
      <Card>
        <CardHeader>
          <CardTitle>Évolution des commandes</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={ordersData} options={chartOptions} />
        </CardContent>
      </Card>

      {/* Répartition des produits */}
      <Card>
        <CardHeader>
          <CardTitle>Répartition des produits</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar data={productsData} options={chartOptions} />
        </CardContent>
      </Card>
    </div>
  );
};