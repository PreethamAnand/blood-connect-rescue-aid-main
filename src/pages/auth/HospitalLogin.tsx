
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function HospitalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate hospital login
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Hospital Login Successful",
        description: "Welcome to your hospital dashboard!",
      });
      navigate("/hospital/dashboard");
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate hospital registration
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Hospital Registration Successful",
        description: "Your hospital has been registered successfully!",
      });
      navigate("/hospital/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Building className="h-8 w-8 text-medical" />
            <h1 className="text-3xl font-bold">Hospital Portal</h1>
          </div>
          <p className="text-gray-500">Blood Inventory Management System</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Hospital Access</CardTitle>
            <CardDescription>
              Login to manage your hospital's blood inventory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register Hospital</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hospital-email">Hospital Email</Label>
                    <Input
                      id="hospital-email"
                      type="email"
                      placeholder="hospital@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="hospital-password">Password</Label>
                      <Button variant="link" className="p-0 h-auto text-xs">
                        Forgot Password?
                      </Button>
                    </div>
                    <Input
                      id="hospital-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full medical-btn" disabled={loading}>
                    {loading ? "Logging in..." : "Login to Hospital Portal"}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-hospital-name">Hospital Name</Label>
                    <Input
                      id="register-hospital-name"
                      placeholder="Enter hospital name"
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-hospital-id">Hospital ID</Label>
                    <Input
                      id="register-hospital-id"
                      placeholder="Enter hospital registration ID"
                      value={hospitalId}
                      onChange={(e) => setHospitalId(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-hospital-email">Hospital Email</Label>
                    <Input
                      id="register-hospital-email"
                      type="email"
                      placeholder="hospital@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-hospital-password">Password</Label>
                    <Input
                      id="register-hospital-password"
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full medical-btn" disabled={loading}>
                    {loading ? "Registering..." : "Register Hospital"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/auth/login" className="text-sm text-medical hover:underline">
                User Login
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/" className="text-sm text-medical hover:underline">
                Back to Home
              </Link>
            </div>
            <p className="text-sm text-gray-500 text-center">
              By continuing, you agree to our{" "}
              <Link to="/terms" className="text-medical hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-medical hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
