import { cache } from "react";
import { db } from "@/config/db.jsx";

export const dynamic = "force-dynamic";

const DynamicPage = async () => {
  const doctors = await getAllDoctors();

  return (
    <div>
      <h1>Total Doctors: {doctors.length}</h1>

      <DoctorList />
    </div>
  );
};

export default DynamicPage;

const DoctorList = async () => {
  const doctors = await getAllDoctors();

  return (
    <ul>
      {doctors.map((doctor) => (
        <li key={doctor.id}>
          {doctor.id} - {doctor.First_name}
        </li>
      ))}
    </ul>
  );
};

const getAllDoctors = cache(async () => {
  const [doctors] = await db.execute(
    "SELECT * FROM doctors"
  );

  console.log("Fetching doctors");

  return doctors;
});