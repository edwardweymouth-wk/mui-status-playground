import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

import { WorkflowStatus, Workflow } from '../../../context'

// https://github.com/reduxjs/redux/blob/master/examples/counter-ts/src/features/counter/counterSlice.ts

enum AppStatus {
  idle = 'idle',
  loading = 'loading',
  failed = 'failed',
}

export interface WorkflowState {
  currentWorkflow: Workflow
  currentStatus: WorkflowStatus
  appStatus: AppStatus
  activeTab: number
  assignee: string
}

const initialState: WorkflowState = {
  currentWorkflow: {
    status: WorkflowStatus.Created,
  },
  appStatus: AppStatus.loading,
  currentStatus: WorkflowStatus.Created,
  activeTab: 0,
  assignee: '',
}

export const workflowSlice = createSlice({
  name: 'workflow',
  initialState,
  reducers: {
    assign: (state) => {
      return {
        ...state,
        currentStatus: WorkflowStatus.Assigned,
        activeTab: 1,
        currentWorkflow: {
          status: WorkflowStatus.Assigned,
        },
      }
    },
    startWork: (state) => {
      return {
        ...state,
        currentStatus: WorkflowStatus.InProgress,
        activeTab: 2,
        currentWorkflow: {
          status: WorkflowStatus.InProgress,
        },
      }
    },
    startReview: (state) => {
      return {
        ...state,
        currentStatus: WorkflowStatus.InReview,
        activeTab: 3,
        currentWorkflow: {
          status: WorkflowStatus.InReview,
        },
      }
    },
    complete: (state) => {
      return {
        ...state,
        currentStatus: WorkflowStatus.Completed,
        activeTab: 4,
        currentWorkflow: {
          status: WorkflowStatus.Completed,
        },
      }
    },
    setActiveTab: (state, action) => {
      return {
        ...state,
        activeTab: action.payload,
      }
    },
    reset: (state) => {
      return {
        ...state,
        currentStatus: WorkflowStatus.Created,
        activeTab: 0,
        currentWorkflow: {
          status: WorkflowStatus.Created,
        },
      }
    },
  },
})

export const { assign, startWork, startReview, complete, setActiveTab, reset } =
  workflowSlice.actions

export const selectStatus = (state: RootState) => state.workflow.currentStatus
export const selectActiveTab = (state: RootState) => state.workflow.activeTab
export const selectAssignee = (state: RootState) => state.workflow.assignee

export default workflowSlice.reducer
