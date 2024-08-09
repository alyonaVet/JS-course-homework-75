import {Grid, IconButton, TextField, Typography} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from 'react';

interface AddMessageProps {
  message: string;
  cipherMessage: string;
  password: string;
  onFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEncode: () => void;
  onDecode: () => void;
}

const AddMessage: React.FC<AddMessageProps> = ({message, cipherMessage, password, onFieldChange, onEncode, onDecode}) => {

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container spacing={2}>
        <Grid item sx={{width: '200px', mb: '20px'}}>
          <Typography variant="body1">Decoded message:</Typography>
        </Grid>
        <Grid item>
          <TextField
            name="cipherMessage"
            value={cipherMessage}
            onChange={onFieldChange}
            multiline
            maxRows={2}
            sx={{width: '300px'}}
          />
        </Grid>
      </Grid>

      <Grid item container spacing={2}>
        <Grid item sx={{width: '200px'}}>
          <Typography variant="body1">Password:</Typography>
        </Grid>
        <Grid item>
          <TextField
            name="password"
            required
            sx={{width: '150px'}}
            value={password}
            onChange={onFieldChange}
          />
        </Grid>
        <Grid item>
          <IconButton
            size="large"
            onClick={onDecode}>
            <ArrowDownwardIcon fontSize="large"/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            size="large"
            onClick={onEncode}>
            <ArrowUpwardIcon fontSize="large"/>
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item sx={{width: '200px'}}>
          <Typography variant="body1">Encoded message:</Typography>
        </Grid>
        <Grid item>
          <TextField
            name="message"
            multiline
            maxRows={2}
            sx={{width: '300px'}}
            value={message}
            onChange={onFieldChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddMessage;