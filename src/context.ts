import { IconButtonProps } from '@mui/material/IconButton'

export const ASSIGN = 'ASSIGN'
export const START_WORK = 'START_WORK'
export const START_REVIEW = 'START_REVIEW'
export const COMPLETE = 'COMPLETE'
export const RESET = 'RESET'
export const UPDATE_ASSIGNEE = 'UPDATE_ASSIGNEE'

export enum WorkflowStatus {
  Created = 'Created',
  Assigned = 'Assigned',
  InProgress = 'In Progress',
  InReview = 'In Review',
  Completed = 'Completed',
}

export enum ActionTypes {
  ASSIGN = 'ASSIGN',
  START_WORK = 'START_WORK',
  START_REVIEW = 'START_REVIEW',
  COMPLETE = 'COMPLETE',
  RESET = 'RESET',
  UPDATE_ASSIGNEE = 'UPDATE_ASSIGNEE',
  SET_ACTIVE_TAB = 'SET_ACTIVE_TAB',
}

export interface Workflow {
  status: WorkflowStatus
}

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

export interface WorkflowAuditState {
  // steps: WorkflowState[]
  currentWorkflow: Workflow
  currentStatus: WorkflowStatus
  activeTab: number
  assignee: string
}

export type Action =
  | {
      type: ActionTypes.ASSIGN
    }
  | {
      type: ActionTypes.START_WORK
    }
  | {
      type: ActionTypes.START_REVIEW
    }
  | {
      type: ActionTypes.COMPLETE
    }
  | {
      type: ActionTypes.RESET
    }
  | {
      type: ActionTypes.UPDATE_ASSIGNEE
      payload: string
    }
  | {
      type: ActionTypes.SET_ACTIVE_TAB
      payload: number
    }
