
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { User, Heart, Shield, Clock, CalendarDays } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Profile() {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-gray-500">Manage your personal information and preferences</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" /> Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <User className="h-12 w-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-500">Blood Type: A+</p>
            <div className="mt-4 w-full">
              <div className="flex justify-between text-sm py-2 border-b">
                <span className="font-medium">Member Since</span>
                <span>January 2023</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b">
                <span className="font-medium">Last Donation</span>
                <span>March 15, 2023</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b">
                <span className="font-medium">Total Donations</span>
                <span>5 times</span>
              </div>
              <div className="flex justify-between text-sm py-2">
                <span className="font-medium">Status</span>
                <span className="text-green-500">Available</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Edit Profile Picture</Button>
          </CardFooter>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal details and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal">
              <TabsList className="mb-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="medical">Medical</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1-123-456-7890" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Main St, Downtown, City" />
                </div>
              </TabsContent>
              
              <TabsContent value="medical" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bloodType">Blood Type</Label>
                    <Select defaultValue="A+">
                      <SelectTrigger id="bloodType">
                        <SelectValue placeholder="Select blood type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastDonation">Last Donation Date</Label>
                    <Input id="lastDonation" type="date" defaultValue="2023-03-15" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="medicalConditions">Medical Conditions</Label>
                  <Input id="medicalConditions" placeholder="List any medical conditions" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="medications">Current Medications</Label>
                  <Input id="medications" placeholder="List any medications you're taking" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="allergies">Allergies</Label>
                  <Input id="allergies" placeholder="List any allergies" />
                </div>
              </TabsContent>
              
              <TabsContent value="preferences" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notifications">Email Notifications</Label>
                      <p className="text-sm text-gray-500">Receive email notifications for new blood requests</p>
                    </div>
                    <Switch id="notifications" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms">SMS Alerts</Label>
                      <p className="text-sm text-gray-500">Receive text messages for urgent blood requests</p>
                    </div>
                    <Switch id="sms" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="location">Share Location</Label>
                      <p className="text-sm text-gray-500">Allow the app to access your location</p>
                    </div>
                    <Switch id="location" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="availability">Available for Donation</Label>
                      <p className="text-sm text-gray-500">Mark yourself as available for blood donation</p>
                    </div>
                    <Switch id="availability" defaultChecked />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button className="blood-btn" onClick={handleSave}>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-blood" /> Donation History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <div className="flex justify-between">
                  <span className="font-medium">City General Hospital</span>
                  <span className="text-sm text-gray-500">March 15, 2023</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Donated 1 unit of A+ blood</p>
              </div>
              <div className="border-b pb-3">
                <div className="flex justify-between">
                  <span className="font-medium">Blood Drive Event</span>
                  <span className="text-sm text-gray-500">December 10, 2022</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Donated 1 unit of A+ blood</p>
              </div>
              <div className="border-b pb-3">
                <div className="flex justify-between">
                  <span className="font-medium">Memorial Hospital</span>
                  <span className="text-sm text-gray-500">September 5, 2022</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Donated 1 unit of A+ blood</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="w-full">View Complete History</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-medical" /> Health Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Eligibility Status</span>
                <span className="text-sm text-green-500">Eligible</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Next Donation Date</span>
                <span className="text-sm">After June 15, 2023</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Blood Pressure</span>
                <span className="text-sm">120/80 (Normal)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Hemoglobin Level</span>
                <span className="text-sm">14.2 g/dL (Normal)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Last Health Check</span>
                <span className="text-sm">March 15, 2023</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="w-full">Update Health Information</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blood" /> Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 border-b pb-3">
                <div className="bg-gray-100 p-2 rounded-md text-center min-w-14">
                  <div className="text-xs text-gray-500">JUN</div>
                  <div className="text-lg font-bold">15</div>
                </div>
                <div>
                  <p className="font-medium">Scheduled Donation</p>
                  <p className="text-sm text-gray-500">City General Hospital, 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-2 rounded-md text-center min-w-14">
                  <div className="text-xs text-gray-500">JUL</div>
                  <div className="text-lg font-bold">05</div>
                </div>
                <div>
                  <p className="font-medium">Health Check-up</p>
                  <p className="text-sm text-gray-500">Community Clinic, 2:30 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="flex-1">Cancel</Button>
            <Button className="medical-btn flex-1">
              <CalendarDays className="mr-2 h-4 w-4" />
              New Appointment
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
