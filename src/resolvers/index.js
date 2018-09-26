const { Query } = require('./Query')
// const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { accountTypeMutations } = require('./Mutation/accountType')
const { accountMutations } = require('./Mutation/account')
const { savingsAccountMutations } = require('./Mutation/savingsAccount')
const { AuthPayload } = require('./AuthPayload')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...accountMutations,
    ...accountTypeMutations,
    ...savingsAccountMutations
  },
  // Subscription,
  AuthPayload,
}
