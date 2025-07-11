import { Users, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { OrdersChart } from "@/components/dashboard/OrdersChart";

const Dashboard = () => {
  // Données d'exemple - à remplacer par des données Supabase
  const stats = [
    {
      title: "Clients Totaux",
      value: "1,234",
      icon: <Users className="h-6 w-6" />,
      trend: { value: 12, isPositive: true },
    },
    {
      title: "Nouvelles Commandes",
      value: "89",
      icon: <ShoppingCart className="h-6 w-6" />,
      trend: { value: 8, isPositive: true },
    },
    {
      title: "Revenu (MAD)",
      value: "156,789 DH",
      icon: <DollarSign className="h-6 w-6" />,
      trend: { value: 15, isPositive: true },
    },
    {
      title: "Croissance",
      value: "+23%",
      icon: <TrendingUp className="h-6 w-6" />,
      trend: { value: 3, isPositive: true },
    },
  ];

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
            />
          ))}
        </div>

        {/* Charts */}
        <OrdersChart />

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-elevation">
            <h3 className="text-lg font-semibold mb-4">Commandes récentes</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted rounded">
                <div>
                  <p className="font-medium">Ahmed Benali</p>
                  <p className="text-sm text-muted-foreground">Commande #1234</p>
                </div>
                <span className="text-primary font-medium">1,250 DH</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded">
                <div>
                  <p className="font-medium">Fatima Idrissi</p>
                  <p className="text-sm text-muted-foreground">Commande #1235</p>
                </div>
                <span className="text-primary font-medium">890 DH</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded">
                <div>
                  <p className="font-medium">Omar Alami</p>
                  <p className="text-sm text-muted-foreground">Commande #1236</p>
                </div>
                <span className="text-primary font-medium">2,100 DH</span>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-elevation">
            <h3 className="text-lg font-semibold mb-4">Clients récents</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-muted rounded">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium">
                  S
                </div>
                <div>
                  <p className="font-medium">Sarah Benjelloun</p>
                  <p className="text-sm text-muted-foreground">Nouveau client</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted rounded">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium">
                  Y
                </div>
                <div>
                  <p className="font-medium">Youssef Tazi</p>
                  <p className="text-sm text-muted-foreground">Nouveau client</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted rounded">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium">
                  K
                </div>
                <div>
                  <p className="font-medium">Khadija Amrani</p>
                  <p className="text-sm text-muted-foreground">Nouveau client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;