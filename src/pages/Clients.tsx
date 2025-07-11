import { useState } from "react";
import { Search, Plus, Filter } from "lucide-react";
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

const Clients = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Données d'exemple - à remplacer par Supabase
  const clients = [
    {
      id: "1",
      nom: "Benali",
      prenom: "Ahmed",
      email: "ahmed.benali@email.com",
      role: "Client",
      created_at: "2025-01-15",
    },
    {
      id: "2",
      nom: "Idrissi",
      prenom: "Fatima",
      email: "fatima.idrissi@email.com",
      role: "Client VIP",
      created_at: "2025-01-14",
    },
    {
      id: "3",
      nom: "Alami",
      prenom: "Omar",
      email: "omar.alami@email.com",
      role: "Client",
      created_at: "2025-01-13",
    },
  ];

  const filteredClients = clients.filter(
    (client) =>
      client.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.prenom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout title="Gestion des Clients">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Rechercher un client..."
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
              Nouveau Client
            </Button>
          </div>
        </div>

        {/* Clients Table */}
        <Card>
          <CardHeader>
            <CardTitle>Liste des Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Prénom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Rôle</TableHead>
                  <TableHead>Date d'inscription</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">{client.nom}</TableCell>
                    <TableCell>{client.prenom}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>
                      <span 
                        className={`px-2 py-1 rounded-full text-xs ${
                          client.role === "Client VIP" 
                            ? "bg-primary-light text-primary-dark" 
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {client.role}
                      </span>
                    </TableCell>
                    <TableCell>{new Date(client.created_at).toLocaleDateString('fr-FR')}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          Supprimer
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

export default Clients;