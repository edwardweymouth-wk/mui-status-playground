import * as React from 'react'
import FormControl from '@mui/material/FormControl'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import AdbIcon from '@mui/icons-material/Adb'
import ApiIcon from '@mui/icons-material/Api'
import ChatIcon from '@mui/icons-material/Chat'
import AddTaskIcon from '@mui/icons-material/AddTask'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const defaultValue = { assignee: '' }
export const SomeContext = React.createContext(defaultValue)

export function AssigneeSelect({
  handleChange,
}: {
  handleChange: (event: SelectChangeEvent) => void
}) {
  const { assignee } = React.useContext(SomeContext)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Assignee</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={assignee}
          label="Assignee"
          onChange={handleChange}
        >
          <MenuItem value={'Person 1'}>Person 1</MenuItem>
          <MenuItem value={'Person 2'}>Person 2</MenuItem>
          <MenuItem value={'Person 3'}>Person 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export function ReviewerSelect() {
  const [reviewer, setReviewer] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setReviewer(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Reviewer</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={reviewer}
          label="Assignee"
          onChange={handleChange}
        >
          <MenuItem value={'Person 1'}>Person 1</MenuItem>
          <MenuItem value={'Person 2'}>Person 2</MenuItem>
          <MenuItem value={'Person 3'}>Person 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

function AssigneeForm({
  handleChange,
}: {
  handleChange: (event: SelectChangeEvent) => void
}) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <AssigneeSelect handleChange={handleChange} />
    </Box>
  )
}

function ReviewerForm() {
  const reviewers = [1, 2, 3]
  return (
    <Box component="form" noValidate autoComplete="off">
      {reviewers.map(() => (
        <Grid container spacing={2} sx={{ paddingBottom: '5px' }}>
          <Grid item xs={12} sm={6}>
            <ReviewerSelect />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Basic date picker" />
            </LocalizationProvider>
          </Grid>
        </Grid>
      ))}
    </Box>
  )
}

function InProgressForm() {
  const { assignee } = React.useContext(SomeContext)
  return (
    <Box component="form" noValidate autoComplete="off">
      {assignee}
    </Box>
  )
}

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [assignee, setAssignee] = React.useState('')

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const handleAssigneeChange = (event: SelectChangeEvent) => {
    setAssignee(event.target.value as string)
  }

  const steps = [
    {
      label: 'Not Started',
      internalForm: <AssigneeForm handleChange={handleAssigneeChange} />,
      icon: () => (
        <AdbIcon
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 1,
          }}
          color="action"
          fontSize="medium"
        />
      ),
    },
    {
      label: 'In Progress',
      internalForm: <InProgressForm />,
      icon: () => (
        <ChatIcon
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 1,
          }}
          color="action"
          fontSize="medium"
        />
      ),
    },
    {
      label: 'In Review',
      internalForm: <ReviewerForm />,
      icon: () => (
        <AddTaskIcon
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 1,
          }}
          color="action"
          fontSize="medium"
        />
      ),
    },
    {
      label: 'Complete',
      internalForm: <div>Done!</div>,
      icon: () => (
        <ApiIcon
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 1,
          }}
          color="action"
          fontSize="medium"
        />
      ),
    },
  ]

  return (
    <SomeContext.Provider value={{ assignee: assignee }}>
      <Box>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                StepIconComponent={step.icon}
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.internalForm}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </SomeContext.Provider>
  )
}
