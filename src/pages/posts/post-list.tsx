import { Datagrid,TextInput,ReferenceInput, FunctionField,EditButton, List, ReferenceField, TextField,useRecordContext } from 'react-admin';
 const postPanel = () =>{
    const record = useRecordContext();
    return<div>{record?.body}</div>
 }

 const PostList = () => {
    const postFilerts =  [
        <TextInput source='q' label='search' alwaysOn/>,
        <ReferenceInput source='userId' label="user" reference='users'/>
        
    ];
    return (
    <List filters={postFilerts}>
        <Datagrid
        expand={postPanel}
            sx={{
                ".RaDatagrid-headerCell": {
                    padding: "16px",
                },
            }}
        >
            <TextField source="id" />
            <TextField source="post title" />
            <FunctionField label="Excerpt" render={(record)=> `${record.body.substr(0,50)}...`}></FunctionField>
            {/* <TextField source="body" /> */}
            <ReferenceField source="userId" reference="users" />
            <EditButton/>
        </Datagrid>
    </List>
    );
 };

export default PostList;