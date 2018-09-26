const { getUserId } = require('../../utils')

const savingsAccountMutations = {
  async addSavingsAccount(parent, args, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createSavingsAccount(
      {
        data: {
          name: args.name,
          amount: args.amount,
          goal: args.goal,
          createdBy: { connect: { id: userId }}
        }
      },
      info
    )
  },

  async deleteSavingsAccount(parent, args, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.deleteSavingsAccount(
      {
        where: {
          id: args.id
        }
      },
      info
    )
  },
}

module.exports = { savingsAccountMutations }
