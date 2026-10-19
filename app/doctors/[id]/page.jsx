import React from "react";
import { db } from "@/config/db";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  User,
} from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const [doctors] = await db.execute(
    "SELECT id FROM doctors"
  );

  return doctors.map((doctor) => ({
    id: String(doctor.id.toString()),
  }));
}

const SingleDoctor = async ({ params }) => {
  const { id } = await params;

  const [doctors] = await db.execute(
    "SELECT * FROM doctors WHERE id = ?",
    [id]
  );

  const doctor = doctors[0];

  if (!doctor) {
    notFound();
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Not available";

    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getInitials = (firstName, lastName) => {
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">

        {/* Doctor Profile */}
        <div className="flex items-center gap-6 mb-8">

          <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
            {getInitials(doctor.First_name, doctor.Last_name)}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dr. {doctor.First_name} {doctor.Last_name}
            </h1>

            <p className="text-blue-600 text-lg">
              {doctor.Specialization}
            </p>
          </div>
        </div>

        {/* Doctor Details */}
        <div className="space-y-5 text-gray-700">

          <p className="flex items-center gap-3">
            <Mail className="text-blue-600" />
            {doctor.email}
          </p>

          <p className="flex items-center gap-3">
            <Phone className="text-blue-600" />
            {doctor.Phone}
          </p>

          <p className="flex items-center gap-3">
            <MapPin className="text-blue-600" />
            {doctor.Address}, {doctor.City}, {doctor.State}
          </p>

          <p className="flex items-center gap-3">
            <User className="text-blue-600" />
            Gender: {doctor.gender}
          </p>

          <p className="flex items-center gap-3">
            <Award className="text-blue-600" />
            Experience: {doctor.experience_years != null
              ? `${doctor.experience_years} Years`
              : "Not available"}
          </p>

          <p className="flex items-center gap-3">
            <Calendar className="text-blue-600" />
            Joining Date: {formatDate(doctor.joining_date)}
          </p>

        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;