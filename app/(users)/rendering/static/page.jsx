import { db } from "@/config/db.jsx";

export const revalidate =30;
const StaticPage = async () => {
  const [doctors] = await db.execute(
    "SELECT * FROM doctors"
  );

  console.log("Static Doctors:", doctors);

  return (
    <div>
      <h1>Static Doctors List</h1>

      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            {doctor.First_name} {doctor.Last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaticPage;