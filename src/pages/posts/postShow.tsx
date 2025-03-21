import { Edit,ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const PostShow = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
            <TextInput source="Email" />
        </SimpleForm>
    </Edit>
);