const { getUserId } = require('../../utils')

const accountTypeMutations = {
  async addAccountType(parent, args, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createAccountType(
      {
        data: {
          name: args.name,
          createdBy: { connect: { id: userId }}
        }
      },
      info
    )
  },

  async deleteAccountType(parent, args, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.deleteAccountType(
      {
        where: {
          id: args.id
        }
      },
      info
    )
  },
}

module.exports = { accountTypeMutations }
