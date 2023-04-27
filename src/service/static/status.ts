import {
  StatusService,
  StatusConfiguration,
  StatusProgress,
} from '../../models/status'

class StaticStatusService implements StatusService {
  getConfiguration(_configurationId: string): Promise<StatusConfiguration> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve({
          id: 'workflow-id-001',
          name: 'Sample Workflow',
          solutionStrategy: 'audit-procedure',
          states: [
            {
              id: 'State-001',
              label: 'Not Started',
              transitions: [
                {
                  id: 'Workflow-Transition-001',
                  label: 'Start',
                  destinationStateId: 'State-002',
                },
              ],
            },
            {
              id: 'State-002',
              label: 'In Progress',
              transitions: [
                {
                  id: 'Workflow-Transition-002',
                  label: 'Send for Review',
                  destinationStateId: 'State-003',
                },
              ],
            },
            {
              id: 'State-003',
              label: 'In Review',
              transitions: [
                {
                  id: 'Workflow-Transition-003',
                  label: 'Reject',
                  destinationStateId: 'State-002',
                },
                {
                  id: 'Workflow-Transition-004',
                  label: 'Approve',
                  destinationStateId: 'State-004',
                },
              ],
            },
            {
              id: 'State-004',
              label: 'Complete',
              transitions: [
                {
                  id: 'Workflow-Transition-005',
                  label: 'Re-Open',
                  destinationStateId: 'State-001',
                },
              ],
            },
          ],
        })
      }, 1000)
    })
  }

  getConfigurations(): Promise<StatusConfiguration[]> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 'workflow-id-001',
            name: 'Sample Workflow',
            solutionStrategy: 'audit-procedure',
            states: [
              {
                id: 'State-001',
                label: 'Not Started',
                transitions: [
                  {
                    id: 'Workflow-Transition-001',
                    label: 'Start',
                    destinationStateId: 'State-002',
                  },
                ],
              },
              {
                id: 'State-002',
                label: 'In Progress',
                transitions: [
                  {
                    id: 'Workflow-Transition-002',
                    label: 'Send for Review',
                    destinationStateId: 'State-003',
                  },
                ],
              },
              {
                id: 'State-003',
                label: 'In Review',
                transitions: [
                  {
                    id: 'Workflow-Transition-003',
                    label: 'Reject',
                    destinationStateId: 'State-002',
                  },
                  {
                    id: 'Workflow-Transition-004',
                    label: 'Approve',
                    destinationStateId: 'State-004',
                  },
                ],
              },
              {
                id: 'State-004',
                label: 'Complete',
                transitions: [
                  {
                    id: 'Workflow-Transition-005',
                    label: 'Re-Open',
                    destinationStateId: 'State-001',
                  },
                ],
              },
            ],
          },
        ])
      }, 1000)
    })
  }

  getProgress(
    _entityId: string,
    _configurationId: string
  ): Promise<StatusProgress> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve({
          isDisabled: false,
          currentStateIndex: 1,
          states: [
            {
              id: '000-000-001',
              label: 'Not Started',
              icon: 'info-sign-outline',
              transitions: [
                {
                  id: '000-001-000',
                  label: 'Start',
                  isDisabled: false,
                  tooltip: 'Start progress on this item.',
                },
              ],
            },
            {
              id: '000-000-002',
              label: 'In Progress',
              icon: 'pencil-sign',
              transitions: [
                {
                  id: '000-002-000',
                  label: 'Send for Review',
                  isDisabled: false,
                  tooltip: 'Send this item for review.',
                },
              ],
            },
            {
              id: '000-000-003',
              label: 'In Review',
              icon: 'eye-outline',
              transitions: [
                {
                  id: '000-003-000',
                  label: 'Reject',
                  isDisabled: false,
                  tooltip: 'Reject this item.',
                },
                {
                  id: '000-004-000',
                  label: 'Approve',
                  isDisabled: false,
                  tooltip: 'Approve this item.',
                },
              ],
            },
            {
              id: '000-000-004',
              label: 'Complete',
              icon: 'checkmark-outline',
              transitions: [
                {
                  id: '000-005-000',
                  label: 'Re-Open',
                  isDisabled: false,
                  tooltip: 'Re-open this item.',
                },
              ],
            },
          ],
        })
      }, 1000)
    })
  }

  executeTransition(
    _dataId: string,
    _configurationId: string,
    _transitionId: string
  ): Promise<StatusProgress> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve({
          isDisabled: false,
          currentStateIndex: 1,
          states: [
            {
              id: '000-000-001',
              label: 'Not Started',
              icon: 'info-sign-outline',
              transitions: [
                {
                  id: '000-001-000',
                  label: 'Start',
                  isDisabled: false,
                  tooltip: 'Start progress on this item.',
                },
              ],
            },
            {
              id: '000-000-002',
              label: 'In Progress',
              icon: 'pencil-sign',
              transitions: [
                {
                  id: '000-002-000',
                  label: 'Send for Review',
                  isDisabled: false,
                  tooltip: 'Send this item for review.',
                },
              ],
            },
            {
              id: '000-000-003',
              label: 'In Review',
              icon: 'eye-outline',
              transitions: [
                {
                  id: '000-003-000',
                  label: 'Reject',
                  isDisabled: false,
                  tooltip: 'Reject this item.',
                },
                {
                  id: '000-004-000',
                  label: 'Approve',
                  isDisabled: false,
                  tooltip: 'Approve this item.',
                },
              ],
            },
            {
              id: '000-000-004',
              label: 'Complete',
              icon: 'checkmark-outline',
              transitions: [
                {
                  id: '000-005-000',
                  label: 'Re-Open',
                  isDisabled: false,
                  tooltip: 'Re-open this item.',
                },
              ],
            },
          ],
        })
      }, 1000)
    })
  }
}

export default StaticStatusService
