import React, { useState } from "react";
import { MDBValidation, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initailState = {
  title: "",
  description: "",
  image: "",
  category: "",
};
const options = ["Travel", "Fashion", "Fitness", "Sports", "Food", "Tech"];
const AddEditBlog = () => {
  const [formValue, setFormValue] = useState(initailState);
  const [categoryErrMsg, setCategoryErrMsg] = useState(null);
  const { title, description, image, category } = formValue;

  console.log(formValue);

  const navigate = useNavigate();

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return today;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formField = new FormData();
    formField.append("title", formValue.title);
    formField.append("description", formValue.description);
    formField.append("image", formValue.image);
    formField.append("category", formValue.category);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/blogs/",
      data: formField,
    }).then((response) => {
      console.log(response.data);
      if (response.status === 201) {
        toast.success("Blog created successfully");
      } else {
        toast.error("something went wrong");
      }
      setFormValue(
        (title = ""),
        (description = ""),
        (image = ""),
        (category = "")
      );
      navigate("/");
    });
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onUploadImage = (file) => {
    console.log("file", file);
    set;
  };

  const onCategoryChange = (e) => {
    setCategoryErrMsg(null);
    setFormValue({ ...formValue, category: e.target.value });
  };

  return (
    <MDBValidation
      className=""
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <h3>Add Blog</h3>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          label="Title"
          value={title}
          id="title"
          type="text"
          name="title"
          onChange={onInputChange}
          required
          validation="Please Provide a Title"
          invalid
        />
        <br />

        <MDBInput
          label="Description"
          value={description}
          type="text"
          name="description"
          onChange={onInputChange}
          required
          validation="Please Provide a Description"
          textarea
          rows={4}
          invalid
        />
        <br />

        <MDBInput
          type="file"
          onChange={(e) => onUploadImage(e.target.files)}
          required
          label=""
          validation="Please Upload image"
          invalid
        />
        <br />

        <select
          className="categoryDropdown"
          onChange={onCategoryChange}
          value={category}
        >
          <option>Please select category</option>
          {options.map((option, index) => (
            <option value={option || ""} key={index}>
              {option}
            </option>
          ))}
        </select>

        <br />
        <br />
        <MDBBtn
          type="submit"
          style={{ marginRight: "10px" }}
          onClick={handleSubmit}
        >
          Add
        </MDBBtn>
        <MDBBtn
          color="danger"
          style={{ marginRight: "10px" }}
          onClick={() => navigate("/")}
        >
          Go Back
        </MDBBtn>
      </div>
    </MDBValidation>
  );
};

export default AddEditBlog;
