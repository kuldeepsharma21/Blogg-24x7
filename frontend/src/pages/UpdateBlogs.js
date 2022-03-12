import React, { useState, useEffect } from "react";
import { MDBValidation, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlogs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [category, setCategory] = useState("null");

  const options = ["Travel", "Fashion", "Fitness", "Sports", "Food", "Tech"];

  const { id } = useParams();

  const loadDetais = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/blogs/${id}/`);
    console.log(data);
    setTitle(data.title);
    setDescription(data.description);
    setCategory(data.category);
  };
  useEffect(() => {
    loadDetais();
  }, []);

  const UpdateInfo = async (e) => {
    e.preventDefault();
    let formField = new FormData();
    formField.append("title", title);
    formField.append("description", description);

    formField.append("category", category);

    await axios({
      method: "put",
      url: `http://127.0.0.1:8000/blogs/${id}/`,
      data: formField,
    }).then((response) => {
      console.log(response.data);
      toast.success("Blog Updated");
      navigate("/");
    });
  };

  const navigate = useNavigate();
  return (
    <MDBValidation
      className=""
      style={{ marginTop: "100px" }}
      noValidate
      // onSubmit={handleSubmit}
    >
      <h3>Update Blog</h3>
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
          onChange={(e) => setTitle(e.target.value)}
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
          onChange={(e) => setDescription(e.target.value)}
          required
          validation="Please Provide a Description"
          textarea
          rows={4}
          invalid
        />
        <br />

        <br />

        <select
          className="categoryDropdown"
          onChange={(e) => setCategory(e.target.value)}
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
          onClick={UpdateInfo}
        >
          Update
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

export default UpdateBlogs;
