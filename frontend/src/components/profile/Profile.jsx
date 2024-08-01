import { Avatar, AvatarImage } from "../ui/avatar";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import AppliedJobTable from "../appliedJob/AppliedJobTable";

const skills = ["Html", "css", "javaScript", "Reactjs"];

const Profile = () => {
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aliquid, veritatis?
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-4">
            <Mail />
            <span>patel@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-4">
            <Contact />
            <span>6234127752</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="font-bold text-md">Skills</h1>
          <div className="flex items-center gap-2 mt-4">
            {skills.length !== 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href=""
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Anand patel
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* AppliationTable */}
        <AppliedJobTable />
      </div>
    </div>
  );
};

export default Profile;
