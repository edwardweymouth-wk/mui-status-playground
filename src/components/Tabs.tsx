import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

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

const steps = [
  {
    key: 0,
    label: 'Created',
    tabContent: <div>Item One</div>,
  },
  {
    key: 1,
    label: 'Assigned',
    tabContent: <div>Item Two</div>,
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

enum TestStates {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)
  const [testState] = React.useState<TestStates>(TestStates.horizontal)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    // for vertical tabs
    // <Box
    //   sx={{
    //     flexGrow: 1,
    //     bgcolor: 'background.paper',
    //     display: 'flex',
    //     height: 224,
    //   }}
    // >
    <Box sx={{ width: '100%' }}>
      {/* remove this box for vertical tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          orientation={testState}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {steps.map((step) => (
            <Tab key={step.key} label={step.label} {...a11yProps(step.key)} />
          ))}
        </Tabs>
      </Box>
      {steps.map(({ key, tabContent }) => (
        <TabPanel key={key} value={value} index={key}>
          {tabContent}
        </TabPanel>
      ))}
    </Box>
  )
}
