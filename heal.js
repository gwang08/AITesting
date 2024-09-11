const { heal, ai } = require('codeceptjs')

heal.addRecipe('ai', {
  priority: 10,
  suggest:true,
  prepare: {
    html: ({ I }) => I.grabHTMLFrom('body'),
  },
  steps: [
    'click',
    'fillField',
    'appendField',
    'selectOption',
    'attachFile',
    'checkOption',
    'uncheckOption',
    'doubleClick',
  ],
  fn: async (context) => {
    return ai.healFailedStep(context)
  },
})

// heal.addRecipe('clickAndType', {
//   priority: 1,
//   steps: ['fillField', 'appendField'],
//   fn: async ({ step }) => {
//     const locator = step.args[0]
//     const text = step.args[1]

//     return ({ I }) => {
//       I.click(locator)
//       I.wait(1) // to open modal or something
//       I.type(text)
//     }
//   },
// })