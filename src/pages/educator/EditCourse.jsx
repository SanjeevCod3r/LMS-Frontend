import React, { useContext, useEffect, useRef, useState } from "react";
import Quill from "quill";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import Logger from "../../components/Logger";
import { useParams, useNavigate } from "react-router-dom";

const EditCourse = () => {
  const { backendUrl, getToken } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [existingThumbnail, setExistingThumbnail] = useState("");
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/course/${id}`);
        if (data.success) {
          setCourseTitle(data.courseData.courseTitle);
          setCoursePrice(data.courseData.coursePrice);
          setDiscount(data.courseData.discount);
          setExistingThumbnail(data.courseData.courseThumbnail || "");
          setChapters(data.courseData.courseContent || []);

          if (quillRef.current) {
            quillRef.current.root.innerHTML =
              data.courseData.courseDescription || "";
          }
        } else {
          toast.error(data.message);
        }
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchCourse();
  }, [id, backendUrl]);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const courseData = {
        courseTitle,
        courseDescription: quillRef.current.root.innerHTML,
        coursePrice: Number(coursePrice),
        discount: Number(discount),
        courseContent: chapters,
      };

      const token = await getToken();
      const { data } = await axios.put(`${backendUrl}/api/course/${id}`, courseData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success("Course updated successfully!");
        navigate("/educator/my-courses");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md w-full text-gray-500"
      >
        <div className="block sm:hidden">
          <Logger />
        </div>

        <div className="flex flex-col gap-1">
          <p>Course Title:</p>
          <input
            onChange={(e) => setCourseTitle(e.target.value)}
            value={courseTitle}
            type="text"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <p>Course Description:</p>
          <div ref={editorRef}></div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-col gap-1">
            <p>Course Price</p>
            <input
              onChange={(e) => setCoursePrice(e.target.value)}
              value={coursePrice}
              type="number"
              className="outline-none md:py-2.5 w-28 py-2 px-3 rounded border border-gray-500"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <p>Course Thumbnail</p>
            {existingThumbnail ? (
              <img
                className="max-h-16 rounded border"
                src={existingThumbnail}
                alt="thumbnail"
              />
            ) : (
              <img
                className="max-h-16"
                src={assets.file_upload_icon}
                alt="placeholder"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p>Discount %</p>
          <input
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            type="number"
            min={0}
            max={100}
            className="outline-none md:py-2.5 py-2 px-3 w-28 rounded border border-gray-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-black font-semibold text-white w-max pt-2.5 px-8 py-2 rounded my-4"
        >
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
