// import * as React from 'react'
// import { styled } from '@mui/material/styles'
// import Box from '@mui/material/Box'
// import Collapse from '@mui/material/Collapse'
// import IconButton from '@mui/material/IconButton'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// import TabsTracker from './TabsTracker'
// import { SomeContext } from './Tracker'
// import { StaticStatusService } from '../service'

// import {
//   ExpandMoreProps,
//   WorkflowStatus,
//   WorkflowAuditState,
//   Action,
//   ActionTypes,
//   Workflow,
// } from '../context'

// function WorkflowTransitions({
//   transitions,
//   dispatch,
// }: {
//   dispatch: React.Dispatch<Action>
//   transitions: StatusTransitionConfiguration[]
// }) {
//   const rightCapComponentCache = {
//     [WorkflowStatus.Created]: (
//       <RightCap
//         transitionCallback={() => dispatch({ type: ActionTypes.ASSIGN })}
//         transitionLabel="Assign"
//       />
//     ),
//     [WorkflowStatus.Assigned]: (
//       <RightCap
//         transitionCallback={() => dispatch({ type: ActionTypes.START_WORK })}
//         transitionLabel="Start Work"
//       />
//     ),
//     [WorkflowStatus.InProgress]: (
//       <RightCap
//         transitionCallback={() => dispatch({ type: ActionTypes.START_REVIEW })}
//         transitionLabel="Start Review"
//       />
//     ),
//     [WorkflowStatus.InReview]: (
//       <RightCap
//         transitionCallback={() => dispatch({ type: ActionTypes.COMPLETE })}
//         transitionLabel="Complete"
//       />
//     ),
//     [WorkflowStatus.Completed]: (
//       <RightCap
//         transitionCallback={() => dispatch({ type: ActionTypes.RESET })}
//         transitionLabel="Restart"
//       />
//     ),
//   }

//   return (
//     <SomeContext.Provider value={{ assignee: assignee }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Button onClick={handleExpandClick}>
//             <ExpandMore
//               expand={expanded}
//               onClick={handleExpandClick}
//               aria-expanded={expanded}
//               aria-label="show more"
//             >
//               <ExpandMoreIcon />
//             </ExpandMore>
//             <Typography>Workflow Audit</Typography>
//           </Button>
//           <Typography sx={{ color: 'gray' }} variant="subtitle1">
//             {currentWorkflowState.status}
//           </Typography>
//         </Box>
//         <Box>{rightCapComponentCache[currentWorkflowState.status]}</Box>
//       </Box>
//     </SomeContext.Provider>
//   )
// }

// function RightCap({
//   transitionCallback,
//   transitionLabel,
// }: {
//   transitionCallback: () => void
//   transitionLabel: string
// }) {
//   return (
//     <Button onClick={transitionCallback}>
//       <Typography>{transitionLabel}</Typography>
//     </Button>
//   )
// }
