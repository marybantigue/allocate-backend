const { getUserId } = require('../../utils')

const accountMutations = {
  async addAccount(parent, args, ctx, info) {
    const userId = getUserId(ctx)
    const accountType = await ctx.db.query.accountType({
      where: {
        id: args.accountType.id
      }
    }, `{ id }` );

    return ctx.db.mutation.createAccount(
      {
        data: {
          name: args.name,
          initialAmount: args.initialAmount,
          accountType: { connect: { id: accountType.id } },
          createdBy: { connect: { id: userId }}
        }
      },
      info
    )
  },

  async deleteAccount(parent, args, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.deleteAccount(
      {
        where: {
          id: args.id
        }
      },
      info
    )
  },
}

module.exports = { accountMutations }
