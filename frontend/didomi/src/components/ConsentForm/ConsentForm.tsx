import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { ConsentEntry } from '../../shared/generalDefinitions';



interface consentState {
  [key: string]: boolean
}



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    checkboxLabel: {
      padding: theme.spacing(3)
    },

    buttonGroup: {
      padding: theme.spacing(3)
    },

    firstField: {
      marginRight: theme.spacing(2)
    }
  }),
);



const defaultConsentState = {
  'Receive newsletter': false,
  'Be shown targeted ads': false,
  'Contribute to anonymous visit statistics': false
};

export const consentLabels = Object.keys(defaultConsentState)


export type OnSubmitHandler = (consentEntry: ConsentEntry) => void
export interface ConsentFormProps {
  onSubmit?: OnSubmitHandler
}



/**
 * Component to display the "Give Consent" form.
 * Button is only active when name, email are filled and at least one checkbox
 * has been checked.
 */
function ConsentForm({ onSubmit }: ConsentFormProps) {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consents, setConsents] = useState(defaultConsentState as consentState);



  /** Event handlers */
  const handleConsentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setConsents({ ...consents, [value]: checked });
  };

  const handleNameChange = useCallback(
    (e) => setName(e.target.value),
    [setName]
  );

  const handleEmailChange = useCallback(
    (e) => setEmail(e.target.value),
    [setEmail]
  );

  const handleButtonClick = useCallback(
    () => {
      const consentsArray = consentLabels.filter((label) => consents[label]);
      onSubmit && onSubmit({ name, email, consents: consentsArray });
    },
    [name, email, consents]
  );



  /** Content variables */
  const canComitConsent = !!name && !!email && consentLabels.some((label) => consents[label]);

  const checkBoxes = consentLabels.map((label, i) => {
    const checkbox = <Checkbox
      checked={consents[label]}
      value={label}
      onChange={handleConsentsChange}
      data-testid={'checkbox_' + i}
    />;

    return <FormControlLabel key={label} control={checkbox} label={label} />
  });



  return (
    <div>
      <FormGroup row>
        <TextField
          autoFocus
          label='Name'
          onChange={handleNameChange}
          className={classes.firstField}
          inputProps={{ 'data-testid': 'name' }}
        />
        <TextField
          label='Email Address'
          onChange={handleEmailChange}
          inputProps={{ 'data-testid': 'email' }}
        />
      </FormGroup>

      <Typography className={classes.checkboxLabel}>I agree to:</Typography>

      <FormGroup>
        {checkBoxes}
      </FormGroup>

      <div className={classes.buttonGroup}>
        <Button
          component={Link}
          to='/consents'
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          disabled={!canComitConsent}
          data-testid='button'
        >
          Give consent
        </Button>
      </div>
    </div>
  )
}

ConsentForm.displayName = 'ConsentForm';

export default ConsentForm;
