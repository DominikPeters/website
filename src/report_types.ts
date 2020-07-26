export type CandidateId = number
export type IAllocatee = CandidateId | 'X'

// index.json

export interface IReportIndex {
    elections: IElectionIndexEntry[]
}

export interface IElectionIndexEntry {
    path: string
    jurisdictionName: string
    electionName: string
    date: string
    contests: IContestIndexEntry[]
}

export interface IContestIndexEntry {
    office: string
    officeName: string
    name: string
    winner: string
    numCandidates: number
    numRounds: number
}

// report.json

export interface IContestReport {
    info: IElectionInfo
    ballotCount: number
    candidates: ICandidate[]
    rounds: ITabulatorRound[]
}

export interface IElectionInfo {
    name: string
    date: string
    dataFormat: string
    tabulation: string
    jurisdictionPath: string
    electionPath: string
    office: string
    loaderParams?: {[param: string]: string}
    jurisdictionName: string
    officeName: string
    electionName: string
}

export interface ICandidate {
    name: string
    writeIn: boolean
}

export interface ITabulatorRound {
    allocations: ITabulatorAllocation[]
    undervote: number
    overvote: number
    continuingBallots: number
    transfers: Transfer[]
}

export interface ITabulatorAllocation {
    allocatee: IAllocatee
    votes: number
}

export interface Transfer {
    from: CandidateId
    to: IAllocatee
    count: number
}