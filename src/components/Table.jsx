import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const Table = (props) => {
    return (
        <div>
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                sx={{
                    ...props.sx,
                }}
            />
        </div>
    )
}

export default Table
