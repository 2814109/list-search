import { VFC } from "react";
import { MemberType } from "../types/MemberType";
import { Table } from "react-bootstrap";
import ListRow from "./ListRow";
type ListType = {
  listData: MemberType[];
};
const List: VFC<ListType> = ({ listData }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th className="col-2">ID</th>
          <th className="col-3">userName</th>
          <th className="col-2">Age</th>
          <th className="col-2">Address</th>

          <th className="col-3 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {listData.map((rowData) => {
          return (
            <tr key={rowData.id}>
              <ListRow rowData={rowData} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default List;
