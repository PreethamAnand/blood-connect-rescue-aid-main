
import { useState } from "react";
import { bloodRequests, BloodRequest } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Droplet, Filter, MapPin, PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function BloodRequests() {
  const [filteredRequests, setFilteredRequests] = useState<BloodRequest[]>(bloodRequests);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [bloodTypeFilter, setBloodTypeFilter] = useState("all");
  const { toast } = useToast();

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    filterRequests(value, statusFilter, bloodTypeFilter);
  };

  const handleStatusFilter = (value: string) => {
    setStatusFilter(value);
    filterRequests(searchTerm, value, bloodTypeFilter);
  };

  const handleBloodTypeFilter = (value: string) => {
    setBloodTypeFilter(value);
    filterRequests(searchTerm, statusFilter, value);
  };

  const filterRequests = (search: string, status: string, bloodType: string) => {
    let filtered = bloodRequests;

    if (search) {
      filtered = filtered.filter(
        (request) =>
          request.patientName.toLowerCase().includes(search.toLowerCase()) ||
          request.hospital.toLowerCase().includes(search.toLowerCase()) ||
          request.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status !== "all") {
      filtered = filtered.filter((request) => request.status === status);
    }

    if (bloodType !== "all") {
      filtered = filtered.filter((request) => request.bloodType === bloodType);
    }

    setFilteredRequests(filtered);
  };

  const handleSubmitRequest = () => {
    toast({
      title: "Blood request submitted",
      description: "Your request has been sent to nearby donors.",
      variant: "default",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Blood Requests</h1>
          <p className="text-gray-500">Manage and track blood donation requests</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="blood-btn">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Request
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Blood Request</DialogTitle>
              <DialogDescription>
                Fill in the details to create a new blood donation request
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="patientName">Patient Name</Label>
                <Input id="patientName" placeholder="Enter patient name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="bloodType">Blood Type</Label>
                  <Select>
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
                <div className="grid gap-2">
                  <Label htmlFor="units">Required Units</Label>
                  <Input id="units" type="number" min="1" placeholder="Units" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="hospital">Hospital</Label>
                <Input id="hospital" placeholder="Hospital name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Location" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="urgency">Urgency Level</Label>
                <Select>
                  <SelectTrigger id="urgency">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Additional Description</Label>
                <Textarea id="description" placeholder="Provide additional details" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button className="blood-btn" onClick={handleSubmitRequest}>Submit Request</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search by patient, hospital, or location"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select onValueChange={handleStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Status</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Fulfilled">Fulfilled</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={handleBloodTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <Droplet className="h-4 w-4" />
                <span>Blood Type</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((request) => (
            <Card key={request.id} className={request.urgency === "Critical" ? "border-blood" : ""}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>{request.patientName}</CardTitle>
                    <CardDescription>{request.hospital}</CardDescription>
                  </div>
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
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Blood Type:</span>
                    <span className="text-sm font-bold text-blood">{request.bloodType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Required Units:</span>
                    <span className="text-sm">{request.requiredUnits}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-1 mt-0.5 text-gray-500" />
                    <span className="text-sm text-gray-500">{request.location}</span>
                  </div>
                  {request.description && (
                    <div className="text-sm text-gray-600 border-t pt-2 mt-2">
                      {request.description}
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="justify-between border-t pt-4">
                <Badge variant="outline" className={
                  request.status === "Pending" ? "text-blue-500 border-blue-500" :
                  request.status === "In Progress" ? "text-orange-500 border-orange-500" :
                  request.status === "Fulfilled" ? "text-green-500 border-green-500" :
                  "text-gray-500 border-gray-500"
                }>
                  {request.status}
                </Badge>
                <Button variant="outline" size="sm">Details</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">No blood requests matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
