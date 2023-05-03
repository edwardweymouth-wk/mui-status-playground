import { styled, Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Routes, Route, Outlet, Link } from 'react-router-dom'

import { routes } from '../routes'

const DrawerHeader = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

export function RouterStack() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          {routes.map(({ path, element }) => (
            <Route key={path} path={path.replace('/', '')} element={element} />
          ))}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Outlet />
    </Box>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
