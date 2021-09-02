import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() { 
    const profileData = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    setData(profileData.data.data);
    console.log(profileData.data.data);
    }
    fetchData();
  }, [page]);
  const handlePrevPageChange = () => {
    if (page !== 1) setPage((page) => page - 1);
  };
  const handleNextPageChange = () => {
    if (page !== 2) setPage((page) => page + 1);
  };
  return (
    <div className="App">
      <table>
        <th>
          <td>ID</td>
          <td>First name</td>
          <td>Last Name</td>
          <td>Email</td>
        </th>
        {data
          ? data.map((profile) => {
              return (
                <tr>
                  <td>{profile.id}</td>
                  <td>{profile.first_name}</td>
                  <td>{profile.last_name}</td>
                  <td>{profile.email}</td>
                </tr>
              );
            })
          : null}
      </table>
      <button onClick={handlePrevPageChange}>Prev</button>

      <button onClick={handleNextPageChange}>Next</button>
    </div>
  );
}
