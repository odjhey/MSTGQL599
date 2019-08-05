/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions } from "mst-gql"

import { UserModel } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { ListTestModel } from "./ListTestModel"
import { listTestModelPrimitives, ListTestModelSelector } from "./ListTestModel.base"
import { ActivityLogModel } from "./ActivityLogModel"
import { activityLogModelPrimitives, ActivityLogModelSelector } from "./ActivityLogModel.base"
import { ProjectListModel } from "./ProjectListModel"
import { projectListModelPrimitives, ProjectListModelSelector } from "./ProjectListModel.base"
import { LeaveModel } from "./LeaveModel"
import { leaveModelPrimitives, LeaveModelSelector } from "./LeaveModel.base"
import { TicketModel } from "./TicketModel"
import { ticketModelPrimitives, TicketModelSelector } from "./TicketModel.base"
import { CheckInModel } from "./CheckInModel"
import { checkInModelPrimitives, CheckInModelSelector } from "./CheckInModel.base"
import { SimpleModel } from "./SimpleModel"
import { simpleModelPrimitives, SimpleModelSelector } from "./SimpleModel.base"


/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['User', () => UserModel], ['ListTest', () => ListTestModel], ['ActivityLog', () => ActivityLogModel], ['ProjectList', () => ProjectListModel], ['Leave', () => LeaveModel], ['Ticket', () => TicketModel], ['CheckIn', () => CheckInModel], ['Simple', () => SimpleModel]], ['ActivityLog', 'ProjectList', 'Leave', 'Ticket', 'CheckIn', 'Simple']))
  .props({
    activitylogs: types.optional(types.map(types.late(() => ActivityLogModel)), {}),
    projectlists: types.optional(types.map(types.late(() => ProjectListModel)), {}),
    leaves: types.optional(types.map(types.late(() => LeaveModel)), {}),
    tickets: types.optional(types.map(types.late(() => TicketModel)), {}),
    checkins: types.optional(types.map(types.late(() => CheckInModel)), {}),
    simples: types.optional(types.map(types.late(() => SimpleModel)), {})
  })
  .actions(self => ({
    queryUser(variables: { _id: string }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof UserModel.Type>(`query user($_id: ID!) { user(_id: $_id) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryMe(variables?: {  }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof UserModel.Type>(`query me { me {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUsers(variables?: {  }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof UserModel.Type[]>(`query users { users {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryListtest(variables: { _id: string }, resultSelector: string | ((qb: ListTestModelSelector) => ListTestModelSelector) = listTestModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof ListTestModel.Type>(`query listtest($_id: ID!) { listtest(_id: $_id) {
        ${typeof resultSelector === "function" ? resultSelector(new ListTestModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryListtests(variables?: {  }, resultSelector: string | ((qb: ListTestModelSelector) => ListTestModelSelector) = listTestModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof ListTestModel.Type[]>(`query listtests { listtests {
        ${typeof resultSelector === "function" ? resultSelector(new ListTestModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryActivitylog(variables: { id: string }, resultSelector: string | ((qb: ActivityLogModelSelector) => ActivityLogModelSelector) = activityLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof ActivityLogModel.Type>(`query activitylog($id: ID!) { activitylog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ActivityLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryFindTicketID(variables: { ticketID: string }, resultSelector: string | ((qb: ActivityLogModelSelector) => ActivityLogModelSelector) = activityLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof ActivityLogModel.Type[]>(`query findTicketID($ticketID: String!) { findTicketID(ticketID: $ticketID) {
        ${typeof resultSelector === "function" ? resultSelector(new ActivityLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryActivitylogs(variables?: {  }, resultSelector: string | ((qb: ActivityLogModelSelector) => ActivityLogModelSelector) = activityLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof ActivityLogModel.Type[]>(`query activitylogs { activitylogs {
        ${typeof resultSelector === "function" ? resultSelector(new ActivityLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryProj(variables: { id: string }, resultSelector: string | ((qb: ProjectListModelSelector) => ProjectListModelSelector) = projectListModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof ProjectListModel.Type>(`query proj($id: ID!) { proj(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ProjectListModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryProjlist(variables?: {  }, resultSelector: string | ((qb: ProjectListModelSelector) => ProjectListModelSelector) = projectListModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof ProjectListModel.Type[]>(`query projlist { projlist {
        ${typeof resultSelector === "function" ? resultSelector(new ProjectListModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLeave(variables: { id: string }, resultSelector: string | ((qb: LeaveModelSelector) => LeaveModelSelector) = leaveModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof LeaveModel.Type>(`query leave($id: ID!) { leave(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new LeaveModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLeaves(variables?: {  }, resultSelector: string | ((qb: LeaveModelSelector) => LeaveModelSelector) = leaveModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof LeaveModel.Type[]>(`query leaves { leaves {
        ${typeof resultSelector === "function" ? resultSelector(new LeaveModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryTicket(variables: { id: string }, resultSelector: string | ((qb: TicketModelSelector) => TicketModelSelector) = ticketModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof TicketModel.Type>(`query ticket($id: ID!) { ticket(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new TicketModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryTickets(variables?: {  }, resultSelector: string | ((qb: TicketModelSelector) => TicketModelSelector) = ticketModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof TicketModel.Type[]>(`query tickets { tickets {
        ${typeof resultSelector === "function" ? resultSelector(new TicketModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCheckin(variables: { id: string }, resultSelector: string | ((qb: CheckInModelSelector) => CheckInModelSelector) = checkInModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof CheckInModel.Type>(`query checkin($id: ID!) { checkin(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CheckInModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetTicket(variables: { date: string }, resultSelector: string | ((qb: CheckInModelSelector) => CheckInModelSelector) = checkInModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof CheckInModel.Type>(`query getTicket($date: String!) { getTicket(date: $date) {
        ${typeof resultSelector === "function" ? resultSelector(new CheckInModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCheckins(variables?: {  }, resultSelector: string | ((qb: CheckInModelSelector) => CheckInModelSelector) = checkInModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof CheckInModel.Type[]>(`query checkins { checkins {
        ${typeof resultSelector === "function" ? resultSelector(new CheckInModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryFilterTicket(variables: { date: string }, resultSelector: string | ((qb: CheckInModelSelector) => CheckInModelSelector) = checkInModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof CheckInModel.Type[]>(`query filterTicket($date: String!) { filterTicket(date: $date) {
        ${typeof resultSelector === "function" ? resultSelector(new CheckInModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    querySimple(variables: { id: string }, resultSelector: string | ((qb: SimpleModelSelector) => SimpleModelSelector) = simpleModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof SimpleModel.Type>(`query simple($id: ID!) { simple(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new SimpleModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    querySimples(variables?: {  }, resultSelector: string | ((qb: SimpleModelSelector) => SimpleModelSelector) = simpleModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof SimpleModel.Type[]>(`query simples { simples {
        ${typeof resultSelector === "function" ? resultSelector(new SimpleModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateCreateUser(variables: { user: CreateUserInput | undefined }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof UserModel.Type>(`mutation createUser($user: CreateUserInput) { createUser(user: $user) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUser(variables: { _id: string, user: UpdateUserInput }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof UserModel.Type>(`mutation updateUser($_id: String!, $user: UpdateUserInput!) { updateUser(_id: $_id, user: $user) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteUser(variables: { _id: string }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof UserModel.Type>(`mutation deleteUser($_id: String!) { deleteUser(_id: $_id) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateItemTest(variables: { listitem: TestItemInput | undefined }, resultSelector: string | ((qb: ListTestModelSelector) => ListTestModelSelector) = listTestModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof ListTestModel.Type>(`mutation createItemTest($listitem: TestItemInput) { createItemTest(listitem: $listitem) {
        ${typeof resultSelector === "function" ? resultSelector(new ListTestModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateActivity(variables: { activitylogInput: ActivityLogInput | undefined }, resultSelector: string | ((qb: ActivityLogModelSelector) => ActivityLogModelSelector) = activityLogModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof ActivityLogModel.Type>(`mutation createActivity($activitylogInput: ActivityLogInput) { createActivity(activitylogInput: $activitylogInput) {
        ${typeof resultSelector === "function" ? resultSelector(new ActivityLogModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateLog(variables: { id: string, activitylog: UpdateLogInput | undefined }, resultSelector: string | ((qb: ActivityLogModelSelector) => ActivityLogModelSelector) = activityLogModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof ActivityLogModel.Type>(`mutation updateLog($id: ID!, $activitylog: UpdateLogInput) { updateLog(id: $id, activitylog: $activitylog) {
        ${typeof resultSelector === "function" ? resultSelector(new ActivityLogModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteLog(variables: { id: string }, resultSelector: string | ((qb: ActivityLogModelSelector) => ActivityLogModelSelector) = activityLogModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof ActivityLogModel.Type>(`mutation deleteLog($id: ID!) { deleteLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ActivityLogModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateProjectName(variables: { project: ProjectInput | undefined }, resultSelector: string | ((qb: ProjectListModelSelector) => ProjectListModelSelector) = projectListModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof ProjectListModel.Type>(`mutation createProjectName($project: ProjectInput) { createProjectName(project: $project) {
        ${typeof resultSelector === "function" ? resultSelector(new ProjectListModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateProject(variables: { id: string, project: ProjectInput | undefined }, resultSelector: string | ((qb: ProjectListModelSelector) => ProjectListModelSelector) = projectListModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof ProjectListModel.Type>(`mutation updateProject($id: ID!, $project: ProjectInput) { updateProject(id: $id, project: $project) {
        ${typeof resultSelector === "function" ? resultSelector(new ProjectListModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteProject(variables: { id: string }, resultSelector: string | ((qb: ProjectListModelSelector) => ProjectListModelSelector) = projectListModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof ProjectListModel.Type>(`mutation deleteProject($id: ID!) { deleteProject(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ProjectListModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateLeave(variables: { leave: CreateLeaveInput }, resultSelector: string | ((qb: LeaveModelSelector) => LeaveModelSelector) = leaveModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof LeaveModel.Type>(`mutation createLeave($leave: CreateLeaveInput!) { createLeave(leave: $leave) {
        ${typeof resultSelector === "function" ? resultSelector(new LeaveModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateLeave(variables: { id: string, leave: UpdateLeavetInput | undefined }, resultSelector: string | ((qb: LeaveModelSelector) => LeaveModelSelector) = leaveModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof LeaveModel.Type>(`mutation updateLeave($id: ID!, $leave: UpdateLeavetInput) { updateLeave(id: $id, leave: $leave) {
        ${typeof resultSelector === "function" ? resultSelector(new LeaveModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteLeave(variables: { id: string }, resultSelector: string | ((qb: LeaveModelSelector) => LeaveModelSelector) = leaveModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof LeaveModel.Type>(`mutation deleteLeave($id: ID!) { deleteLeave(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new LeaveModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateTicket(variables: { ticket: CreateTicketInput }, resultSelector: string | ((qb: TicketModelSelector) => TicketModelSelector) = ticketModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof TicketModel.Type>(`mutation createTicket($ticket: CreateTicketInput!) { createTicket(ticket: $ticket) {
        ${typeof resultSelector === "function" ? resultSelector(new TicketModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateTicket(variables: { id: string, ticket: UpdateTicketInput | undefined }, resultSelector: string | ((qb: TicketModelSelector) => TicketModelSelector) = ticketModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof TicketModel.Type>(`mutation updateTicket($id: ID!, $ticket: UpdateTicketInput) { updateTicket(id: $id, ticket: $ticket) {
        ${typeof resultSelector === "function" ? resultSelector(new TicketModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteTicket(variables: { id: string }, resultSelector: string | ((qb: TicketModelSelector) => TicketModelSelector) = ticketModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof TicketModel.Type>(`mutation deleteTicket($id: ID!) { deleteTicket(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new TicketModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCheckIn(variables: { checkin: CheckInInput | undefined }, resultSelector: string | ((qb: CheckInModelSelector) => CheckInModelSelector) = checkInModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof CheckInModel.Type>(`mutation checkIn($checkin: CheckInInput) { checkIn(checkin: $checkin) {
        ${typeof resultSelector === "function" ? resultSelector(new CheckInModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCheckOut(variables: { checkout: CheckInInput | undefined }, resultSelector: string | ((qb: CheckInModelSelector) => CheckInModelSelector) = checkInModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof CheckInModel.Type>(`mutation checkOut($checkout: CheckInInput) { checkOut(checkout: $checkout) {
        ${typeof resultSelector === "function" ? resultSelector(new CheckInModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    subscribeNewActivityLog(variables?: {  }, resultSelector: string | ((qb: ActivityLogModelSelector) => ActivityLogModelSelector) = activityLogModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<typeof ActivityLogModel.Type>(`subscription newActivityLog { newActivityLog {
        ${typeof resultSelector === "function" ? resultSelector(new ActivityLogModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeNewTicket(variables?: {  }, resultSelector: string | ((qb: TicketModelSelector) => TicketModelSelector) = ticketModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<typeof TicketModel.Type>(`subscription newTicket { newTicket {
        ${typeof resultSelector === "function" ? resultSelector(new TicketModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
  }))
