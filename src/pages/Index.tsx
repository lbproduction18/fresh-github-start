
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Master Branch</CardTitle>
          <CardDescription>This application is now building from the master branch</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">
            Your project is successfully running from the master branch. You can now start building your application here!
          </p>
          <div className="flex justify-center">
            <Button>Get Started</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
