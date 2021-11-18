import { VFC } from "react";
import { Form } from "react-bootstrap";
interface Props {
  searchByUserName: Function;
}
const SearchInput: VFC<Props> = ({ searchByUserName }) => {
  return (
    <div className="d-flex　justify-content-end py-3">
      <Form.Control
        className="w-25"
        size="lg"
        type="text"
        placeholder="Search by User Name"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          searchByUserName(event.target.value);
        }}
      />
    </div>
  );
};
export default SearchInput;
