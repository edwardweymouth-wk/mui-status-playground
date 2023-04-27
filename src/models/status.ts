export interface StatusEntry {
  id: string
  label: string
  icon: string
  transitions: StatusTransition[]
}

export interface StatusTransition {
  id: string
  label: string
  isDisabled: boolean
  tooltip: string
}

export interface StatusConfiguration {
  id: string
  name: string
  solutionStrategy: string
  states: StatusEntryConfiguration[]
}

export interface StatusEntryConfiguration {
  id: string
  label: string
  transitions: StatusTransitionConfiguration[]
}

export interface StatusTransitionConfiguration {
  id: string
  label: string
  destinationStateId: string
}

export interface StatusProgress {
  isDisabled: boolean
  currentStateIndex: number
  states: StatusEntry[]
}

export interface StatusService {
  getConfiguration(configurationId: string): Promise<StatusConfiguration>
  getConfigurations(): Promise<StatusConfiguration[]>
  getProgress(
    entityId: string,
    configurationId: string
  ): Promise<StatusProgress>
  executeTransition(
    dataId: string,
    configurationId: string,
    transitionId: string
  ): Promise<StatusProgress>
}
