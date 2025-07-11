import { useState } from "react";
import { Search, Plus, Filter, Eye } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Commandes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Données d'exemple - à remplacer par Supabase
  const commandes = [
    {
      id: "CMD-001",
      client: "Ahmed Benali",
      total_amount: 1250,
      status: "En cours",
      created_at: "2025-01-15T10:30:00",
    },
    {
      id: "CMD-002", 
      client: "Fatima Idrissi",
      total_amount: 890,
      status: "Livrée",
      created_at: "2025-01-14T14:20:00",
    },
    {
      id: "CMD-003",
      client: "Omar Alami", 
      total_amount: 2100,
      status: "En attente",
      created_at: "2025-01-13T09:15:00",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Livrée":
        return "bg-green-100 text-green-800";
      case "En cours":
        return "bg-primary-light text-primary-dark";
      case "En attente":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const filteredCommandes = commandes.filter(
    (commande) =>
      commande.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      commande.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout title="Gestion des Commandes">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Rechercher une commande..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filtres
            </Button>
            <Button className="gap-2 bg-primary hover:bg-primary-dark">
              <Plus className="h-4 w-4" />
              Nouvelle Commande
            </Button>
          </div>
        </div>

        {/* Commandes Table */}
        <Card>
          <CardHeader>
            <CardTitle>Liste des Commandes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>N° Commande</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Montant (MAD)</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCommandes.map((commande) => (
                  <TableRow key={commande.id}>
                    <TableCell className="font-medium">{commande.id}</TableCell>
                    <TableCell>{commande.client}</TableCell>
                    <TableCell className="font-medium">{commande.total_amount.toLocaleString()} DH</TableCell>
                    <TableCell>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(commande.status)}`}>
                        {commande.status}
                      </span>
                    </TableCell>
                    <TableCell>{new Date(commande.created_at).toLocaleDateString('fr-FR')}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Eye className="h-3 w-3" />
                          Voir
                        </Button>
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Commandes;