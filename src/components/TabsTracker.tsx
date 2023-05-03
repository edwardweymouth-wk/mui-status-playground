import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { SelectChangeEvent } from '@mui/material/Select'
import Box from '@mui/material/Box'

import { AssigneeSelect, ReviewerSelect } from './Tracker'
import { ActionTypes } from '../context'
import { useAppSelector, useAppDispatch } from '../redux/hooks'

import {
  selectActiveTab,
  setActiveTab,
} from '../redux/features/workflow/workflowSlice'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

enum TestStates {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export default function TabsTracker() {
  const dispatch = useAppDispatch()
  const activeTab = useAppSelector(selectActiveTab)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    dispatch(setActiveTab(newValue))
  }

  const handleAssigneeChange = (_event: SelectChangeEvent) => {
    ;() => console.log('FIX ME')
  }

  const steps = [
    {
      key: 0,
      label: 'Created',
      tabContent: (
        <AssigneeSelect handleChange={(e) => handleAssigneeChange(e)} />
      ),
    },
    {
      key: 1,
      label: 'Assigned',
      tabContent: <ReviewerSelect />,
    },
    {
      key: 2,
      label: 'In Progress',
      tabContent: <div>Item Three</div>,
    },
    {
      key: 3,
      label: 'In Review',
      tabContent: <div>Item Three</div>,
    },
    {
      key: 4,
      label: 'Complete',
      tabContent: <div>Item Three</div>,
    },
  ]

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          centered={true}
          value={activeTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {steps.map((step) => (
            <Tab
              sx={{ flex: 1 }}
              key={step.key}
              label={step.label}
              {...a11yProps(step.key)}
            />
          ))}
        </Tabs>
      </Box>
      {steps.map(({ key, tabContent }) => (
        <TabPanel key={key} value={activeTab} index={key}>
          {tabContent}
        </TabPanel>
      ))}
    </Box>
  )
}
