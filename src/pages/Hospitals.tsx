
import { hospitals } from "@/data/mockData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Search, Building } from "lucide-react";
import { useState } from "react";

export default function Hospitals() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredHospitals = hospitals.filter(
    hospital => 
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Hospitals & Blood Banks</h1>
        <p className="text-gray-500">Find information about hospitals and blood banks</p>
      </div>
      
      <div className="flex gap-2">
        <Input
          placeholder="Search by name or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <Button className="medical-btn gap-2">
          <Search className="h-4 w-4" />
          Search
        </Button>
      </div>
      
      <Tabs defaultValue="list">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map((hospital) => (
              <Card key={hospital.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{hospital.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {hospital.location}
                      </CardDescription>
                    </div>
                    <Building className="text-medical h-5 w-5" />
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-1 text-sm mb-4">
                    <Phone className="h-3 w-3" />
                    <a href={`tel:${hospital.contactNumber}`} className="text-blue-500 hover:underline">
                      {hospital.contactNumber}
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Available Blood Types</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {hospital.availableBloodTypes.map((blood) => (
                        <div key={blood.type} className="text-center border rounded-md p-2">
                          <div className="text-sm font-bold text-blood">{blood.type}</div>
                          <div className="text-xs">
                            {blood.units} {blood.units === 1 ? "unit" : "units"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="flex-1">Get Directions</Button>
                  <Button className="medical-btn flex-1">Contact</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredHospitals.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">No hospitals matching your search.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="map">
          <Card className="w-full h-[500px] flex items-center justify-center">
            <CardContent className="text-center p-6">
              <Building className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <CardTitle className="mb-2">Map View</CardTitle>
              <CardDescription>
                The interactive map will display hospitals and blood banks in this area.
              </CardDescription>
              <p className="text-sm text-gray-500 mt-4">
                In a real implementation, this would integrate with Google Maps or OpenStreetMap.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div>
        <h2 className="text-xl font-bold mb-4">Blood Availability Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => {
            // Calculate total units for this blood type across all hospitals
            const totalUnits = hospitals.reduce((sum, hospital) => {
              const bloodType = hospital.availableBloodTypes.find(b => b.type === type);
              return sum + (bloodType ? bloodType.units : 0);
            }, 0);
            
            return (
              <Card key={type} className="text-center">
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-blood text-2xl">{type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-medical">
                    {totalUnits} units
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
