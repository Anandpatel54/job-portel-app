import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const UpdateProfileDialog = () => {
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Upadate Profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" className="col-span-3" name="name" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" className="col-span-3" name="email" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Number" className="text-right">
                  Number
                </Label>
                <Input id="Number" className="col-span-3" name="eNumber" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input id="bio" className="col-span-3" name="bio" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input id="skills" className="col-span-3" name="skills" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  className="col-span-3"
                  name="file"
                  type="file"
                  accept="application/pdf"
                />
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
