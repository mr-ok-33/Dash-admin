import { Datagrid, List, TextField } from "react-admin"

const userList = () =>{
    return (
        <List>
            <Datagrid>
            <TextField source="id"/>
                <TextField source="name"/>
                <TextField source="email"/>
                <TextField source="phone"/>
            </Datagrid>
        </List>
    );
}

export default userList;

