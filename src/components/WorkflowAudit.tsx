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
import { StaticStatusService } from '../services'

import {
  ExpandMoreProps,
  WorkflowStatus,
  WorkflowAuditState,
  Action,
  ActionTypes,
  Workflow,
} from '../context'

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

const initialState = {
  currentWorkflow: {
    status: WorkflowStatus.Created,
    action: () => console.log('Created'),
  },
  currentStatus: WorkflowStatus.Created,
  activeTab: 0,
  assignee: '',
}

function reducer(state: WorkflowAuditState, action: Action) {
  switch (action.type) {
    case ActionTypes.ASSIGN:
      return {
        ...state,
        currentStatus: WorkflowStatus.Assigned,
        activeTab: 1,
        currentWorkflow: {
          status: WorkflowStatus.Assigned,
          action: () => console.log('Assigned'),
        },
      }
    case ActionTypes.START_WORK:
      return {
        ...state,
        currentStatus: WorkflowStatus.InProgress,
        activeTab: 2,
        currentWorkflow: {
          status: WorkflowStatus.InProgress,
          action: () => console.log('In Progress'),
        },
      }
    case ActionTypes.START_REVIEW:
      return {
        ...state,
        currentStatus: WorkflowStatus.InReview,
        activeTab: 3,
        currentWorkflow: {
          status: WorkflowStatus.InReview,
          action: () => console.log('In Review'),
        },
      }
    case ActionTypes.COMPLETE:
      return {
        ...state,
        currentStatus: WorkflowStatus.Completed,
        activeTab: 4,
        currentWorkflow: {
          status: WorkflowStatus.Completed,
          action: () => console.log('Completed'),
        },
      }
    case ActionTypes.RESET:
      return {
        ...state,
        currentStatus: WorkflowStatus.Created,
        activeTab: 0,
        currentWorkflow: {
          status: WorkflowStatus.Created,
          action: () => console.log('Created'),
        },
      }
    case ActionTypes.UPDATE_ASSIGNEE:
      return {
        ...state,
        assignee: action.payload,
      }
    case ActionTypes.SET_ACTIVE_TAB:
      console.log('setActiveTab', action.payload)
      return {
        ...state,
        activeTab: action.payload,
      }
    default:
      throw new Error()
  }
}

export default function WorkflowAudit() {
  const [expanded, setExpanded] = React.useState(false)
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  React.useEffect(() => {
    // dispatch({ type: 'transition', payload: currentMachineState })
  }, [state.currentStatus])

  return (
    <Box>
      <ActionsBar
        handleExpandClick={handleExpandClick}
        expanded={expanded}
        currentWorkflowState={state.currentWorkflow}
        dispatch={dispatch}
        assignee={state.assignee}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TabsTracker activeTab={state.activeTab} dispatch={dispatch} />
      </Collapse>
    </Box>
  )
}

function ActionsBar({
  handleExpandClick,
  expanded,
  currentWorkflowState,
  dispatch,
  assignee,
}: {
  handleExpandClick: () => void
  expanded: boolean
  currentWorkflowState: Workflow
  dispatch: React.Dispatch<Action>
  assignee: string
}) {
  const rightCapComponentCache = {
    [WorkflowStatus.Created]: (
      <RightCap
        transitionCallback={() => dispatch({ type: ActionTypes.ASSIGN })}
        transitionLabel="Assign"
      />
    ),
    [WorkflowStatus.Assigned]: (
      <RightCap
        transitionCallback={() => dispatch({ type: ActionTypes.START_WORK })}
        transitionLabel="Start Work"
      />
    ),
    [WorkflowStatus.InProgress]: (
      <RightCap
        transitionCallback={() => dispatch({ type: ActionTypes.START_REVIEW })}
        transitionLabel="Start Review"
      />
    ),
    [WorkflowStatus.InReview]: (
      <RightCap
        transitionCallback={() => dispatch({ type: ActionTypes.COMPLETE })}
        transitionLabel="Complete"
      />
    ),
    [WorkflowStatus.Completed]: (
      <RightCap
        transitionCallback={() => dispatch({ type: ActionTypes.RESET })}
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
