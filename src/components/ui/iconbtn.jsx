import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { CirclePlus } from 'lucide-react'; // Assuming you're using lucide-react for icons


export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        {/* <Icon baseClassName="fas" className="fa-plus-circle" /> */}
        <CirclePlus />
      </IconButton>
    </Stack>
  );
}
