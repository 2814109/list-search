import { VFC, useState } from "react";
import { MemberType } from "../types/MemberType";
import { Container } from "react-bootstrap";
import SearchInput from "./SearchInput";
import List from "./ListMain";
const ListSearch: VFC = () => {
  const memberData = [...Array(20)].map((_, index) => {
    return {
      id: index + 1,
      userName: `User${index + 1}`,
      age: index + 20,
      address: `Address${index + 1}`,
    };
  });

  const [listData, setListData] = useState<MemberType[]>(memberData);

  const searchByUserName = (targetUserName: string) => {
    const filterListData = memberData.filter(({ userName }) => {
      return userName.indexOf(targetUserName) != -1;
    });
    setListData(filterListData);
  };
  return (
    <Container className="m-5">
      <h1>List Search</h1>
      <SearchInput searchByUserName={searchByUserName} />
      <List listData={listData} />
    </Container>
  );
};

export default ListSearch;
