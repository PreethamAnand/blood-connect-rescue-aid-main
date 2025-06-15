
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { bloodRequests, emergencyContacts, hospitals } from "@/data/mockData";
import { AlertTriangle, Phone, MapPin, Heart, Locate } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Emergency() {
  const [location, setLocation] = useState("");
  const { toast } = useToast();
  
  // Filter critical requests
  const criticalRequests = bloodRequests.filter(request => request.urgency === "Critical");
  
  const handleEmergencySubmit = () => {
    toast({
      title: "Emergency alert sent",
      description: "Emergency services and nearby donors have been notified.",
      variant: "destructive",
    });
  };
  
  const handleGetLocation = () => {
    // Simulating getting user location
    setTimeout(() => {
      setLocation("Current location: Downtown, City");
      toast({
        title: "Location detected",
        description: "Your current location has been detected.",
      });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Emergency Support</h1>
        <p className="text-gray-500">Immediate assistance for critical blood requirements</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader className="bg-blood text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <AlertTriangle />
              <CardTitle>Emergency Blood Request</CardTitle>
            </div>
            <CardDescription className="text-white/80">
              Use this form for critical situations requiring immediate blood support
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="patient-name">Patient Name</Label>
                <Input id="patient-name" placeholder="Enter patient's name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="blood-type">Blood Type Needed</Label>
                <div className="grid grid-cols-4 gap-2">
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                    <Button 
                      key={type} 
                      variant="outline" 
                      className="hover:bg-blood hover:text-white"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="flex gap-2">
                <Input 
                  id="location" 
                  placeholder="Hospital or current location" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleGetLocation} className="gap-2">
                  <Locate className="h-4 w-4" />
                  Detect
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="units">Units Required</Label>
              <Input id="units" type="number" min="1" defaultValue="1" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="details">Additional Details</Label>
              <Textarea 
                id="details" 
                placeholder="Provide any additional information that might be important"
                rows={3}
              />
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col md:flex-row gap-4">
            <Button variant="outline" className="w-full md:w-auto">
              Call Emergency Hotline
            </Button>
            
            <Button 
              className="w-full md:w-auto blood-btn gap-2"
              onClick={handleEmergencySubmit}
            >
              <AlertTriangle className="h-4 w-4" />
              Submit Emergency Request
            </Button>
          </CardFooter>
        </Card>
        
        <div className="space-y-6">
          <Card className="border-blood emergency-pulse">
            <CardHeader className="pb-2">
              <CardTitle className="text-blood flex items-center gap-2">
                <Phone /> Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {emergencyContacts.map((contact) => (
                  <div key={contact.id} className="flex justify-between items-center">
                    <span>{contact.name}</span>
                    <a 
                      href={`tel:${contact.number}`} 
                      className="text-blood font-bold hover:underline"
                    >
                      {contact.number}
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Heart className="text-blood" /> Critical Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              {criticalRequests.length > 0 ? (
                <div className="space-y-3">
                  {criticalRequests.map((request) => (
                    <div key={request.id} className="border-b pb-3">
                      <div className="flex justify-between">
                        <span className="font-medium">{request.patientName}</span>
                        <Badge className="bg-red-500">{request.bloodType}</Badge>
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {request.hospital}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No critical requests at the moment.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-bold mb-4">Nearby Emergency Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hospitals.slice(0, 3).map((hospital) => (
            <Card key={hospital.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{hospital.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {hospital.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 text-sm mb-2">
                  <Phone className="h-3 w-3" />
                  <a href={`tel:${hospital.contactNumber}`} className="text-blue-500 hover:underline">
                    {hospital.contactNumber}
                  </a>
                </div>
                
                <Separator className="my-2" />
                
                <div className="grid grid-cols-4 gap-1 mt-2">
                  {hospital.availableBloodTypes.slice(0, 4).map((blood) => (
                    <div key={blood.type} className="text-center">
                      <div className="text-xs font-bold text-blood">{blood.type}</div>
                      <div className="text-xs">{blood.units} units</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Get Directions</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
