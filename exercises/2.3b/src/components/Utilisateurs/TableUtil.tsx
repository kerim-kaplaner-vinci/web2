const utilisateurs = [
  {
    id: 1,
    name: "Alice",
    age: 25,
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
  },
  {
    id: 3,
    name: "Charlie",
    age: 35,
  },
];

const TableUtil = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {utilisateurs.map((Utilisateur) => (
          <tr>
            <td>{Utilisateur.name}</td>
            <td>{Utilisateur.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUtil;
