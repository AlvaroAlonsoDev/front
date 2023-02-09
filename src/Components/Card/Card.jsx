import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LinkIcon from '@mui/icons-material/Link';
import { Button } from '@mui/material';

import Modal from '@mui/material/Modal';

const Image = styled('img')({
    width: '100%',
});
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Card({ gif }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const copyLink = (text) => {
        navigator.clipboard.writeText(text);
    }
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ margin: 1 }}>
                    <Avatar src={!!gif.user ? gif.user.avatar_url : "https://media1.giphy.com/media/3oriO6yTZKmTqUI9tS/200w.gif?cid=6c09b952r24d3e9jsra8krozv1utspvmypbpmhvd1w60uld7&rid=200w.gif&ct=g"} />
                </Box>
                <a href={gif.url ? gif.url : ""} target="_blank" rel="noreferrer">
                    <Box sx={{ width: '100%' }}>
                        <Typography>{gif.title}</Typography>
                    </Box>
                </a>
                <Box>
                    <Button onClick={handleOpen} variant="text"><LinkIcon /></Button>
                </Box>
            </Box>
            <a href={gif.url ? gif.url : ""} target="_blank" rel="noreferrer">
            <Box>
                    <Image
                        src={gif.images.original.url}
                        alt=""
                    />
                </Box>
            </a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Link to {gif.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {gif.images.original.url}
                    </Typography>
                    <Button sx={{ mt: 1 }} onClick={() => copyLink(gif.images.original.url)} variant="contained">Copy Link</Button>
                </Box>
            </Modal>
        </Box>
    );
}