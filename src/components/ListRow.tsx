import { VFC } from "react";
import { MemberType } from "../types/MemberType";
import { Button } from "react-bootstrap";
interface Props {
  rowData: MemberType;
}
const ListRow: VFC<Props> = ({ rowData }) => {
  const handleDelete = () => {};
  const handleProfile = () => {};
  return (
    <>
      <td>{rowData.id}</td>
      <td>{rowData.userName}</td>
      <td>{rowData.age}</td>
      <td>{rowData.address}</td>
      <td>
        <div className="d-flex justify-content-around">
          <Button variant="success" onClick={handleProfile}>
            Profile
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </td>
    </>
  );
};

export default ListRow;
