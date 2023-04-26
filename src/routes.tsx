import * as React from 'react'
import Checklist from '@mui/icons-material/Checklist'
import LibraryBooks from '@mui/icons-material/LibraryBooks'

import { VerticalLinearStepper } from './components/Tracker'
import BasicTabs from './components/Tabs'
import WorkflowAudit from './components/WorkflowAudit'

export interface Route {
  path: string
  label: string
  icon: React.ReactNode
  element: React.ReactNode
}

export const routes: Array<Route> = [
  {
    label: 'Linear stepper',
    path: '/linear-stepper',
    icon: <Checklist />,
    element: <VerticalLinearStepper />,
  },
  {
    path: '/tabs',
    label: 'Tabs',
    icon: <LibraryBooks />,
    element: <BasicTabs />,
  },
  {
    path: '/workflow-audit',
    label: 'Workflow Audit',
    icon: <LibraryBooks />,
    element: <WorkflowAudit />,
  },
]
