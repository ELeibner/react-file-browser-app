import { CircularProgress, Grid, List } from '@mui/material';
import { DataList, FileData, FolderData } from '../interfaces';
import { File, Folder } from './';

interface ItemListProps {
    data: DataList<FolderData, FileData>;
    isLoading: boolean;
}

export function ItemList({ data, isLoading }: ItemListProps) {
    return (
        <>
            {isLoading ? (
                <Grid
                    justifyContent="center"
                    sx={{
                        display: 'flex',
                        paddingBottom: '32px'
                    }}
                >
                    <CircularProgress data-testid="circular-progress" />
                </Grid>
            ) : (
                <List
                    sx={{
                        paddingBottom: '16px'
                    }}
                    data-testid="list"
                >
                    {data.subfolders.map((item: FolderData) => (
                        <Folder data={item} key={item.id} />
                    ))}
                    {data.files.map((item: FileData) => (
                        <File data={item} key={item.id} />
                    ))}
                </List>
            )}
        </>
    );
}
