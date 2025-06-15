
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Building, Edit, Save, X, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BloodType {
  type: string;
  units: number;
}

export default function HospitalDashboard() {
  const [hospitalInfo] = useState({
    name: "City General Hospital",
    id: "CGH001",
    location: "Downtown Medical District",
    contact: "+1-555-0123"
  });

  const [bloodInventory, setBloodInventory] = useState<BloodType[]>([
    { type: "A+", units: 25 },
    { type: "A-", units: 8 },
    { type: "B+", units: 15 },
    { type: "B-", units: 5 },
    { type: "AB+", units: 12 },
    { type: "AB-", units: 3 },
    { type: "O+", units: 30 },
    { type: "O-", units: 10 }
  ]);

  const [editingType, setEditingType] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState<number>(0);
  const { toast } = useToast();

  const handleEditStart = (type: string, currentUnits: number) => {
    setEditingType(type);
    setTempValue(currentUnits);
  };

  const handleEditSave = (type: string) => {
    setBloodInventory(prev => 
      prev.map(blood => 
        blood.type === type ? { ...blood, units: tempValue } : blood
      )
    );
    setEditingType(null);
    toast({
      title: "Blood Inventory Updated",
      description: `${type} blood units updated to ${tempValue}`,
    });
  };

  const handleEditCancel = () => {
    setEditingType(null);
    setTempValue(0);
  };

  const handleQuickUpdate = (type: string, change: number) => {
    setBloodInventory(prev => 
      prev.map(blood => 
        blood.type === type 
          ? { ...blood, units: Math.max(0, blood.units + change) }
          : blood
      )
    );
    toast({
      title: "Quick Update",
      description: `${type} blood units ${change > 0 ? 'increased' : 'decreased'} by ${Math.abs(change)}`,
    });
  };

  const getTotalUnits = () => {
    return bloodInventory.reduce((total, blood) => total + blood.units, 0);
  };

  const getStatusColor = (units: number) => {
    if (units <= 5) return "bg-red-500";
    if (units <= 15) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Building className="h-8 w-8 text-medical" />
            <div>
              <h1 className="text-3xl font-bold">Hospital Dashboard</h1>
              <p className="text-gray-500">{hospitalInfo.name}</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => window.location.href = "/auth/hospital-login"}>
            Logout
          </Button>
        </div>

        {/* Hospital Info */}
        <Card>
          <CardHeader>
            <CardTitle>Hospital Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500">Hospital Name</Label>
                <p className="text-lg font-semibold">{hospitalInfo.name}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500">Hospital ID</Label>
                <p className="text-lg font-semibold">{hospitalInfo.id}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500">Contact</Label>
                <p className="text-lg font-semibold">{hospitalInfo.contact}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blood Inventory Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Blood Inventory Overview</CardTitle>
            <CardDescription>
              Total Blood Units Available: <span className="font-bold text-medical">{getTotalUnits()}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {bloodInventory.map((blood) => (
                <div key={blood.type} className="border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blood mb-2">{blood.type}</div>
                  <div className="flex items-center justify-center mb-2">
                    <Badge className={`${getStatusColor(blood.units)} text-white`}>
                      {blood.units} units
                    </Badge>
                  </div>
                  <div className="flex gap-1 justify-center">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0"
                      onClick={() => handleQuickUpdate(blood.type, -1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0"
                      onClick={() => handleQuickUpdate(blood.type, 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Blood Management */}
        <Card>
          <CardHeader>
            <CardTitle>Blood Inventory Management</CardTitle>
            <CardDescription>
              Update blood unit quantities for each blood type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bloodInventory.map((blood) => (
                <div key={blood.type} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-xl font-bold text-blood w-12">{blood.type}</div>
                    <div className="text-sm text-gray-500">Blood Type</div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {editingType === blood.type ? (
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          value={tempValue}
                          onChange={(e) => setTempValue(parseInt(e.target.value) || 0)}
                          className="w-20"
                          min="0"
                        />
                        <Button
                          size="sm"
                          onClick={() => handleEditSave(blood.type)}
                          className="medical-btn"
                        >
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleEditCancel}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="text-lg font-semibold">{blood.units} units</div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditStart(blood.type, blood.units)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {bloodInventory
                .filter(blood => blood.units <= 5)
                .map((blood) => (
                  <div key={blood.type} className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="font-medium">Critical: {blood.type} blood type</span>
                    </div>
                    <Badge variant="destructive">{blood.units} units remaining</Badge>
                  </div>
                ))}
              {bloodInventory.filter(blood => blood.units <= 5).length === 0 && (
                <p className="text-gray-500 text-center py-4">No critical stock alerts</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
