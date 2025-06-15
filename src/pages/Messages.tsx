
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default function Messages() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-gray-500">Communicate with donors, recipients, and healthcare providers</p>
      </div>
      
      <Card className="w-full h-[500px] flex items-center justify-center">
        <CardContent className="text-center p-6">
          <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <CardTitle className="mb-2">Messaging Center</CardTitle>
          <CardDescription>
            This page would contain a messaging interface to communicate with donors, recipients, and healthcare providers.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
