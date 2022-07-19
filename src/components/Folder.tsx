import { Folder as FolderIcon } from '@mui/icons-material';
import {
    Avatar,
    Link,
    ListItem,
    ListItemAvatar,
    ListItemText
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FolderData } from '../interfaces';

interface FolderProps {
    data: FolderData;
}

export function Folder({ data }: FolderProps) {
    const navigate = useNavigate();

    return (
        <ListItem
            key={`folder-${data.id}`}
            onClick={() => navigate(`/folder/${data.id}`)}
            sx={{
                cursor: 'pointer',
                '&:hover': {
                    background: '#8080803d'
                }
            }}
            data-testid={`folder-item-${data.id}`}
        >
            <ListItemAvatar>
                <Avatar>
                    <FolderIcon data-testid={`folder-icon-${data.id}`} />
                </Avatar>
            </ListItemAvatar>
            <ListItemText>
                <Link data-testid={`folder-name-${data.id}`}>{data.name}</Link>
            </ListItemText>
        </ListItem>
    );
}
