import Navbar from "../shared/Navbar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const JobDescription = () => {
  const isApplied = false;
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto my-16">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Frontend Developer</h1>
            <div className="flex items-center gap-2 mt-4">
              <Badge className={"text-blue-700 font-bold"} variant="ghost">
                12 Position
              </Badge>
              <Badge className={"text-[#F83002] font-bold"} variant="ghost">
                Part Time
              </Badge>
              <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
                24LPA
              </Badge>
            </div>
          </div>
          <Button
            disabled={isApplied}
            className={`rounded-lg ${
              isApplied
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#7209b7] hover:bg=[#5f32ad]"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
          Job Description
        </h1>
        <div>
          <h1 className="font-bold my-1">
            Role: <span className="pl-4 font-normal">Frontend Develper</span>
          </h1>
          <h1 className="font-bold my-1">
            Location: <span className="pl-4 font-normal">Delhi</span>
          </h1>
          <h1 className="font-bold my-1">
            Description:{" "}
            <span className="pl-4 font-normal">
              Lorem ipsum dolor sit amet.
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Experience: <span className="pl-4 font-normal">2 yrs</span>
          </h1>
          <h1 className="font-bold my-1">
            Salary: <span className="pl-4 font-normal">12LPA</span>
          </h1>
          <h1 className="font-bold my-1">
            Total Applicants : <span className="pl-4 font-normal">4</span>
          </h1>
          <h1 className="font-bold my-1">
            Posted: <span className="pl-4 font-normal">1-08-2024</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
