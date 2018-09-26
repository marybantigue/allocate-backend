const { getUserId } = require('../utils')

const Query = {
  accountTypes(parent, args, ctx, info) {
    return ctx.db.query.accountTypes({}, info)
  },

  myAccountTypes(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.accountTypes({ where: { createdBy: { id } } }, info)
  },
  myAccounts(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.accounts({ where: { createdBy: { id } } }, info)
  },
  mySavingsAccounts(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.savingsAccounts({ where: { createdBy: { id } } }, info)
  },
  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

module.exports = { Query }
