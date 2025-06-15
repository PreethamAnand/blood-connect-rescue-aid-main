
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { bloodRequests, bloodStatistics, donors } from "@/data/mockData";
import { AreaChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Bar, ResponsiveContainer, Legend } from "recharts";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Droplet, User, Users } from "lucide-react";

// Format data for charts
const getBloodTypeData = () => {
  return bloodStatistics.map((stat) => ({
    name: stat.type,
    available: stat.available,
    required: stat.required,
  }));
};

const getUrgencyData = () => {
  const urgencyCount = { Low: 0, Medium: 0, High: 0, Critical: 0 };
  bloodRequests.forEach((request) => {
    urgencyCount[request.urgency]++;
  });
  
  return Object.keys(urgencyCount).map(key => ({
    name: key,
    count: urgencyCount[key as keyof typeof urgencyCount]
  }));
};

export default function Dashboard() {
  const bloodTypeData = getBloodTypeData();
  const urgencyData = getUrgencyData();
  
  // Calculate total counts
  const totalDonors = donors.length;
  const availableDonors = donors.filter(donor => donor.status === "Available").length;
  const pendingRequests = bloodRequests.filter(request => request.status === "Pending").length;
  const criticalRequests = bloodRequests.filter(request => request.urgency === "Critical").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Blood Connect Dashboard</h1>
        <p className="text-gray-500">Overview of blood donation and requests</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Donors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{totalDonors}</div>
              <Users className="text-medical" />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {availableDonors} currently available
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{pendingRequests}</div>
              <Droplet className="text-blood" />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Last 24 hours
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Critical Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{criticalRequests}</div>
              <AlertCircle className="text-blood-dark" />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Needs immediate attention
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Blood Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">48</div>
              <User className="text-medical-dark" />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              This month
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="bloodAvailability">
        <TabsList className="mb-4">
          <TabsTrigger value="bloodAvailability">Blood Availability</TabsTrigger>
          <TabsTrigger value="requestUrgency">Request Urgency</TabsTrigger>
          <TabsTrigger value="recentRequests">Recent Requests</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bloodAvailability">
          <Card>
            <CardHeader>
              <CardTitle>Blood Type Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={bloodTypeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="available" name="Available Units" fill="#3182CE" />
                  <Bar dataKey="required" name="Required Units" fill="#E53E3E" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="requestUrgency">
          <Card>
            <CardHeader>
              <CardTitle>Request Urgency Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={urgencyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="count" name="Number of Requests" stroke="#E53E3E" fill="#FEB2B2" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recentRequests">
          <Card>
            <CardHeader>
              <CardTitle>Recent Blood Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bloodRequests.slice(0, 5).map((request) => (
                  <div key={request.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="font-medium">{request.patientName}</div>
                      <div className="text-sm text-gray-500">
                        {request.hospital} • {request.bloodType} • {request.requiredUnits} units
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        className={
                          request.urgency === "Critical" ? "bg-red-500" :
                          request.urgency === "High" ? "bg-orange-500" :
                          request.urgency === "Medium" ? "bg-yellow-500" :
                          "bg-green-500"
                        }
                      >
                        {request.urgency}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={
                          request.status === "Pending" ? "text-blue-500 border-blue-500" :
                          request.status === "In Progress" ? "text-orange-500 border-orange-500" :
                          request.status === "Fulfilled" ? "text-green-500 border-green-500" :
                          "text-gray-500 border-gray-500"
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
