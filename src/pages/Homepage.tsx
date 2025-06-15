
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, MapPin, Clock, Shield, Zap, Building, Phone } from "lucide-react";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="h-12 w-12 text-blood" />
              <h1 className="text-5xl font-bold text-gray-900">BloodConnect</h1>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-blood mb-4">
              One Drop. Infinite Hope.
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connecting life-savers with life-seekers. Join our mission to create a world where no one dies waiting for blood.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/auth/login">
                <Button size="lg" className="blood-btn px-8 py-3 text-lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/auth/hospital-login">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-blood text-blood hover:bg-blood hover:text-white">
                  <Building className="mr-2 h-5 w-5" />
                  Hospital Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">About BloodConnect</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              BloodConnect is a revolutionary blood donation and emergency support system that bridges the gap between donors and recipients, 
              ensuring timely access to life-saving blood when it matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blood/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-blood mb-2" />
                <CardTitle>Find Donors</CardTitle>
                <CardDescription>
                  Connect with verified blood donors in your area instantly
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blood/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-blood mb-2" />
                <CardTitle>Emergency Response</CardTitle>
                <CardDescription>
                  Quick emergency alerts for critical blood requirements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blood/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-8 w-8 text-blood mb-2" />
                <CardTitle>Location Based</CardTitle>
                <CardDescription>
                  Find nearby donors and blood banks with real-time availability
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blood/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-blood mb-2" />
                <CardTitle>Secure & Verified</CardTitle>
                <CardDescription>
                  All donors and recipients are verified for safety and reliability
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blood/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-8 w-8 text-blood mb-2" />
                <CardTitle>24/7 Availability</CardTitle>
                <CardDescription>
                  Round-the-clock support for emergency blood requirements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blood/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-8 w-8 text-blood mb-2" />
                <CardTitle>Hospital Network</CardTitle>
                <CardDescription>
                  Integrated with hospitals for real-time inventory management
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-blood text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Making a Difference</h3>
            <p className="text-xl text-red-100">
              Every donation counts, every connection saves a life
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-red-100">Registered Donors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-red-100">Lives Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-red-100">Partner Hospitals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-red-100">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-lg text-gray-600">
              Simple steps to save lives and get help when needed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blood text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">Register</h4>
              <p className="text-gray-600">
                Sign up as a donor or recipient with verified information
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blood text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">Connect</h4>
              <p className="text-gray-600">
                Find matches based on blood type, location, and availability
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blood text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">Save Lives</h4>
              <p className="text-gray-600">
                Coordinate safe donation and help save precious lives
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl p-8">
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Emergency Blood Required?</h3>
            <p className="text-xl mb-6">
              Call our 24/7 emergency helpline for immediate assistance
            </p>
            <div className="text-3xl font-bold mb-4">1-800-BLOOD-911</div>
            <p className="text-red-100">
              Available round the clock for critical blood emergencies
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-blood" />
                <h4 className="text-lg font-semibold">BloodConnect</h4>
              </div>
              <p className="text-gray-400">
                Connecting life-savers with life-seekers through technology and compassion.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/auth/login" className="hover:text-white">Donor Login</Link></li>
                <li><Link to="/auth/hospital-login" className="hover:text-white">Hospital Portal</Link></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Blood Donation</li>
                <li>Emergency Support</li>
                <li>Hospital Network</li>
                <li>Donor Search</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Emergency: 1-800-BLOOD-911</li>
                <li>Support: help@bloodconnect.org</li>
                <li>Address: 123 Health Street</li>
                <li>City, State 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BloodConnect. All rights reserved. One Drop. Infinite Hope.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
