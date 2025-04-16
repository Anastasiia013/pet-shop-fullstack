import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

import HeaderCart from '../HeaderCart';

export default function ShowZeroBadge() {
    return (
        <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
            <Badge color="primary"
                badgeContent={0}
                overlap="circular"
                showZero
                max={999}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{
                    '& .MuiBadge-badge': {
                        backgroundColor: '#0D50FF',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: '600',
                        lineHeight: '90%',
                        width: '26px',
                        height: '26px',
                        minWidth: '0',
                        fontSize: '0.75rem',
                        borderRadius: '50%',
                    }
                }}

            >

                <HeaderCart />
            </Badge>
        </Stack>
    );
}