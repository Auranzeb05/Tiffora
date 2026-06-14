import React, { useState } from "react";
import { Search, Plus, Edit2, Trash2, Image as ImageIcon, Check, IndianRupee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

const MOCK_MEALS = [
  {
    id: "M001",
    name: "Executive North Indian Thali",
    type: "Lunch",
    category: "Veg",
    price: 180,
    calories: 650,
    protein: "18g",
    status: "Active",
    ingredients: "Paneer Butter Masala, Dal Makhani, Jeera Rice, 3 Butter Rotis, Salad, Gulab Jamun",
    image: "https://images.unsplash.com/photo-1626779816258-46c596cbab78?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "M002",
    name: "Healthy South Indian Meal",
    type: "Lunch",
    category: "Veg",
    price: 150,
    calories: 520,
    protein: "12g",
    status: "Active",
    ingredients: "Sambar, Rasam, Poriyal, Steamed Rice, Curd, Appalam, Pickle",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "M003",
    name: "Premium Chicken Biryani Combo",
    type: "Dinner",
    category: "Non-Veg",
    price: 220,
    calories: 850,
    protein: "35g",
    status: "Active",
    ingredients: "Chicken Dum Biryani (2 pieces), Mirchi Ka Salan, Raita, Boiled Egg",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "M004",
    name: "Light Diet Dinner (Jain)",
    type: "Dinner",
    category: "Jain",
    price: 160,
    calories: 400,
    protein: "14g",
    status: "Draft",
    ingredients: "Moong Dal, Plain Rice, 2 Phulkas, Steamed Veggies (No root vegetables)",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=300&h=200"
  }
];

export function AdminMenu() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 flex-shrink-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Menu Management</h1>
          <p className="text-muted-foreground mt-1">Manage catalog, pricing, and weekly schedules.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            Weekly Planner
          </Button>
          <Button className="w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add New Meal
          </Button>
        </div>
      </div>

      <Card className="flex-shrink-0">
        <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 scrollbar-hide">
            {['all', 'lunch', 'dinner', 'veg', 'non-veg', 'jain'].map((tab) => (
              <Button 
                key={tab} 
                variant={activeTab === tab ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveTab(tab)}
                className="capitalize whitespace-nowrap"
              >
                {tab}
              </Button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search meals..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring" 
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto pb-6">
        {MOCK_MEALS.map((meal) => (
          <Card key={meal.id} className="overflow-hidden flex flex-col hover:border-primary/50 transition-colors group">
            <div className="relative h-48 w-full bg-muted">
              <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 flex gap-2">
                <Badge variant={meal.status === 'Active' ? 'default' : 'secondary'} className="shadow-sm backdrop-blur-md bg-background/80 text-foreground">
                  {meal.status}
                </Badge>
              </div>
              <div className="absolute top-2 left-2 flex gap-1">
                <Badge variant="outline" className={`shadow-sm backdrop-blur-md ${
                  meal.category === 'Veg' ? 'bg-green-100/90 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300' : 
                  meal.category === 'Non-Veg' ? 'bg-red-100/90 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300' : 
                  'bg-amber-100/90 text-amber-800 border-amber-200 dark:bg-amber-900/50 dark:text-amber-300'
                }`}>
                  {meal.category}
                </Badge>
                <Badge variant="outline" className="shadow-sm backdrop-blur-md bg-background/80 text-foreground border-border">
                  {meal.type}
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">{meal.name}</h3>
              </div>
              <div className="flex items-center text-lg font-bold text-primary mb-3">
                <IndianRupee className="w-4 h-4 mr-0.5" />
                {meal.price}
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                {meal.ingredients}
              </p>
              
              <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4 p-2 bg-muted rounded-md">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider opacity-70">Calories</span>
                  <span className="text-foreground">{meal.calories} kcal</span>
                </div>
                <div className="w-px h-6 bg-border"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider opacity-70">Protein</span>
                  <span className="text-foreground">{meal.protein}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="px-3 text-destructive hover:text-destructive hover:bg-destructive/10">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
