import { FilePresent as FileIcon } from '@mui/icons-material';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { FileData } from '../interfaces';

interface FileProps {
    data: FileData;
}

export function File({ data }: FileProps) {
    return (
        <ListItem
            sx={{
                cursor: 'pointer',
                '&:hover': {
                    background: '#8080803d'
                }
            }}
            data-testid={`file-item-${data.id}`}
        >
            <ListItemAvatar>
                <Avatar>
                    <FileIcon data-testid={`file-icon-${data.id}`} />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={data.name}
                data-testid={`file-name-${data.id}`}
            />
        </ListItem>
    );
}
