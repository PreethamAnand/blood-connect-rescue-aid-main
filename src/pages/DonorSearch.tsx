
import { useState } from "react";
import { donors, Donor } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function DonorSearch() {
  const [filteredDonors, setFilteredDonors] = useState<Donor[]>(donors);
  const [searchTerm, setSearchTerm] = useState("");
  const [bloodType, setBloodType] = useState("all");
  const [maxDistance, setMaxDistance] = useState([10]);
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const { toast } = useToast();

  const handleSearch = () => {
    let filtered = donors;

    if (searchTerm) {
      filtered = filtered.filter(
        (donor) =>
          donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          donor.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (bloodType !== "all") {
      filtered = filtered.filter((donor) => donor.bloodType === bloodType);
    }

    if (availabilityFilter !== "all") {
      filtered = filtered.filter((donor) => donor.status === availabilityFilter);
    }

    filtered = filtered.filter((donor) => donor.distance <= maxDistance[0]);

    setFilteredDonors(filtered);
  };

  const handleReset = () => {
    setSearchTerm("");
    setBloodType("all");
    setMaxDistance([10]);
    setAvailabilityFilter("all");
    setFilteredDonors(donors);
  };

  const handleContact = (donor: Donor) => {
    toast({
      title: "Contact request sent",
      description: `${donor.name} has been notified of your request.`,
      variant: "default",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Donor Search</h1>
        <p className="text-gray-500">Find and contact available blood donors near you</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="search">Name or Location</Label>
                <Input
                  id="search"
                  placeholder="Search by name or location"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="blood-type">Blood Type</Label>
                <Select value={bloodType} onValueChange={setBloodType}>
                  <SelectTrigger id="blood-type">
                    <SelectValue placeholder="Select blood type" />
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

            <div className="space-y-4">
              <div>
                <Label>Distance (km): {maxDistance[0]}</Label>
                <Slider
                  value={maxDistance}
                  onValueChange={setMaxDistance}
                  max={20}
                  step={0.5}
                />
              </div>

              <div>
                <Label htmlFor="availability">Availability</Label>
                <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                  <SelectTrigger id="availability">
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Available">Available</SelectItem>
                    <SelectItem value="Unavailable">Unavailable</SelectItem>
                    <SelectItem value="Recently Donated">Recently Donated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button className="medical-btn" onClick={handleSearch}>
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor) => (
            <Card key={donor.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>{donor.name}</CardTitle>
                  <Badge
                    className={
                      donor.status === "Available" ? "bg-green-500" :
                      donor.status === "Unavailable" ? "bg-gray-500" :
                      "bg-yellow-500"
                    }
                  >
                    {donor.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Blood Type:</span>
                    <span className="text-sm font-bold text-blood">{donor.bloodType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Last Donation:</span>
                    <span className="text-sm">{donor.lastDonation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Distance:</span>
                    <span className="text-sm">{donor.distance} km</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-1 mt-0.5 text-gray-500" />
                    <span className="text-sm text-gray-500">{donor.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button 
                  variant="outline" 
                  className="flex gap-2 w-full"
                  onClick={() => handleContact(donor)}
                  disabled={donor.status !== "Available"}
                >
                  <Phone className="h-4 w-4" />
                  Contact Donor
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">No donors matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
