import styled from "styled-components";

const Nav = styled.nav`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  display: flex;
`;

const NavLink = styled.div`
  text-decoration: none;
  margin-left: 1em;
`;

const SearchInput = styled.input`
  width: 90%;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  margin-top: 1em;
  margin-left: 1em;
  float: left;
`;

const CardList = styled.div`
  padding: 1em;
`;

const FormWrapper = styled.div`
  text-align: left;
  padding-left: 30%;
`;

const Label = styled.label`
  display: block
`;

const SaveButton = styled.button`
  display: block;
  width: 10em;
  position: absolute;
  left: 40%;
  margin-top: 1em;
`;

const SmallButton = styled.button`
  margin-left: 1em;
  border: none;
  background: none;
  cursor: pointer;
`
const ListItem = styled.li`
  list-style: none
`;
export {
    Nav,
    NavLink,
    SearchInput,
    Card,
    CardList,
    FormWrapper,
    Label,
    SaveButton,
    SmallButton,
    ListItem
}