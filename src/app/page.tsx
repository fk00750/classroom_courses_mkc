"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import courses from "../../courses.json";
import SearchBar from "./utils/SearchBar";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <div className="container mt-4 mx-auto flex flex-col items-center justify-center">
      {/** Heading */}
      <div className="header_info container text-center">
        <h3 className="heading text-4xl font-bold">Start Your Preparation</h3>
        <p className="tagline">Explore all different courses over 1200</p>
      </div>
      {/** Search Bar */}
      <SearchBar query={query} setQuery={setQuery} />
      {/** Courses */}
      <div className="courses_container grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 mx-2">
        {courses
          .filter((course) => {
            if (query === "") {
              return course;
            } else if (
              course.course.toLowerCase().includes(query.toLowerCase())
            ) {
              return course;
            }
          })
          .map((course) => (
            <Link target="_blank" rel="noopener noreferrer" href={course.link}>
              <div
                key={course.id}
                className="course_box ounded-md text-center hover:shadow-lg text-green-900 hover:text-blue-400 font-bold text-2xl flex items-center justify-center border p-2 sm:p-4 md:p-6"
              >
                <div>
                  <Image
                    src={course.image}
                    alt="logo"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="course w-fit mx-2" key={course.id}>
                  {/* {course.course} */}
                  {course.course}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
