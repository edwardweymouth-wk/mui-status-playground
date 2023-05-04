import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import TabsTracker from './TabsTracker'
import { SomeContext } from './Tracker'
// import { StaticStatusService } from '../service'

import { ExpandMoreProps, WorkflowStatus, Workflow } from '../context'

import { useAppSelector, useAppDispatch } from '../redux/hooks'

import {
  assign,
  startWork,
  startReview,
  complete,
  reset,
  selectAssignee,
} from '../redux/features/workflow/workflowSlice'

// const staticService = new StaticStatusService()

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function WorkflowAudit() {
  const [expanded, setExpanded] = React.useState(false)

  const currentWorkflow = useAppSelector(
    (state) => state.workflow.currentWorkflow
  )

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  // React.useEffect(() => {
  //   staticService.getConfiguration('config-id').then((config) => {
  //     console.log(config)
  //   })
  //   // dispatch({ type: 'transition', payload: currentMachineState })
  // }, [state.currentStatus])

  return (
    <Box>
      <ActionsBar
        handleExpandClick={handleExpandClick}
        expanded={expanded}
        currentWorkflowState={currentWorkflow}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TabsTracker />
      </Collapse>
    </Box>
  )
}

function ActionsBar({
  handleExpandClick,
  expanded,
  currentWorkflowState,
}: {
  handleExpandClick: () => void
  expanded: boolean
  currentWorkflowState: Workflow
}) {
  const assignee = useAppSelector(selectAssignee)
  const dispatch = useAppDispatch()

  const rightCapComponentCache = {
    [WorkflowStatus.Created]: (
      <RightCap
        transitionCallback={() => dispatch(assign())}
        transitionLabel="Assign"
      />
    ),
    [WorkflowStatus.Assigned]: (
      <RightCap
        transitionCallback={() => dispatch(startWork())}
        transitionLabel="Start Work"
      />
    ),
    [WorkflowStatus.InProgress]: (
      <RightCap
        transitionCallback={() => dispatch(startReview())}
        transitionLabel="Start Review"
      />
    ),
    [WorkflowStatus.InReview]: (
      <RightCap
        transitionCallback={() => dispatch(complete())}
        transitionLabel="Complete"
      />
    ),
    [WorkflowStatus.Completed]: (
      <RightCap
        transitionCallback={() => dispatch(reset())}
        transitionLabel="Restart"
      />
    ),
  }

  return (
    <SomeContext.Provider value={{ assignee: assignee }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button onClick={handleExpandClick}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
            <Typography>Workflow Audit</Typography>
          </Button>
          <Typography sx={{ color: 'gray' }} variant="subtitle1">
            {currentWorkflowState.status}
          </Typography>
        </Box>
        <Box>{rightCapComponentCache[currentWorkflowState.status]}</Box>
      </Box>
    </SomeContext.Provider>
  )
}

function RightCap({
  transitionCallback,
  transitionLabel,
}: {
  transitionCallback: () => void
  transitionLabel: string
}) {
  return (
    <Button onClick={transitionCallback}>
      <Typography>{transitionLabel}</Typography>
    </Button>
  )
}
