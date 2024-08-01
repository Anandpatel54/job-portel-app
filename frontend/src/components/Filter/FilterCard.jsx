import { RadioGroup } from "../ui/radio-group";
import { RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore", "Hyderabad", "pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Data Science",
      "FullStack Developer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1 to 5lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-2 rounded-md">
      <h1 className="font-extrabold text-lg">Filter Jobs</h1>
      <hr  className="mt-3"/>
      <RadioGroup>
        {
            filterData.map((data, index)=>(
                <div key={index} className="">
                    <h1 className="font-bold text-lg">{data.filterType}</h1>
                    {
                        data.array.map((item, index)=>{
                            return <div key={index} className="flex items-center space-x-2 my-2">
                                <RadioGroupItem value={item} />
                                <Label className="text-sm">{item}</Label>
                            </div>
                        })
                    }
                </div>
            ))
        }
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
