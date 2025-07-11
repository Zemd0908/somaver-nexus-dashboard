import { useState } from "react";
import { Search, Plus, Filter, Package } from "lucide-react";
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

const Produits = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Données d'exemple - à remplacer par Supabase
  const produits = [
    {
      id: "1",
      name: "Produit Premium A",
      description: "Description du produit premium A",
      price: 299.99,
      stock: 45,
    },
    {
      id: "2",
      name: "Produit Standard B",
      description: "Description du produit standard B", 
      price: 149.99,
      stock: 120,
    },
    {
      id: "3",
      name: "Produit Économique C",
      description: "Description du produit économique C",
      price: 79.99,
      stock: 8,
    },
  ];

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { color: "bg-red-100 text-red-800", text: "Rupture" };
    if (stock < 10) return { color: "bg-yellow-100 text-yellow-800", text: "Stock faible" };
    return { color: "bg-green-100 text-green-800", text: "En stock" };
  };

  const filteredProduits = produits.filter(
    (produit) =>
      produit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      produit.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout title="Gestion des Produits">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Rechercher un produit..."
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
              Nouveau Produit
            </Button>
          </div>
        </div>

        {/* Produits Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Catalogue des Produits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Prix (MAD)</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProduits.map((produit) => {
                  const stockStatus = getStockStatus(produit.stock);
                  return (
                    <TableRow key={produit.id}>
                      <TableCell className="font-medium">{produit.name}</TableCell>
                      <TableCell className="max-w-xs truncate">{produit.description}</TableCell>
                      <TableCell className="font-medium">{produit.price.toFixed(2)} DH</TableCell>
                      <TableCell>{produit.stock}</TableCell>
                      <TableCell>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
                          {stockStatus.text}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Voir
                          </Button>
                          <Button variant="outline" size="sm">
                            Modifier
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            Supprimer
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Produits;