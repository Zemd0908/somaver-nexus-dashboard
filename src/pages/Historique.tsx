import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Clock } from "lucide-react";

const Historique = () => {
  // Données d'exemple - à remplacer par Supabase
  const historique = [
    {
      id: "1",
      order_id: "CMD-001",
      status_change: "Commande créée → En cours",
      changed_at: "2025-01-15T10:30:00",
    },
    {
      id: "2", 
      order_id: "CMD-002",
      status_change: "En cours → Livrée",
      changed_at: "2025-01-14T16:45:00",
    },
    {
      id: "3",
      order_id: "CMD-003",
      status_change: "Commande créée → En attente",
      changed_at: "2025-01-13T09:15:00",
    },
  ];

  return (
    <DashboardLayout title="Historique des Commandes">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5" />
              Historique des Changements de Statut
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {historique.map((entry) => (
                <div key={entry.id} className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{entry.order_id}</span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(entry.changed_at).toLocaleDateString('fr-FR')} à{' '}
                        {new Date(entry.changed_at).toLocaleTimeString('fr-FR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                    <p className="text-sm">{entry.status_change}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Historique;