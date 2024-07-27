import { Company } from "../models/companyModel.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res
        .status(400)
        .json({ success: false, message: "Company name is required " });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      req.status(400).json({
        success: true,
        message: "You cant not register same company !",
      });
    }
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });
    return res.status(200).json({
      success: true,
      message: "Company registered Successfully",
      company,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.body; //logged user id
    const companies = await Company.find({ userId });
    if (!companies) {
      return res
        .status(404)
        .json({ success: true, message: "Companies not found !" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById({ companyId });
    if (!company) {
      return res
        .status(404)
        .json({ success: true, message: "Company not found !" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Company found", company });
  } catch (error) {
    console.log(error);
  }
};
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    //cloudinary se aayega

    const updateData = { name, description, website, location };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!company) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found !" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Company Information Updated" });
  } catch (error) {
    console.log(error);
  }
};
