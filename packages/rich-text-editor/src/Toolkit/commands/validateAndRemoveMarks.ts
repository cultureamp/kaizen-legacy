import { Mark, MarkType } from "prosemirror-model"
import { EditorState, Transaction } from "prosemirror-state"
import { RemoveMarkStep } from "prosemirror-transform"

type KnownAttrs = {
  varibleHref?: string
  href?: string
}

export type AttrsValidator = (
  attrs: KnownAttrs & {
    [key: string]: unknown
  }
) => boolean | unknown

// This is a variation on the removeMark transform in
// https://github.com/ProseMirror/prosemirror-transform/blob/master/src/mark.js#L44
/** This will walk the full doc and remove the Marks that fail the validator method */
export function validateAndRemoveMarks(
  markType: MarkType,
  validator: AttrsValidator
) {
  return (state: EditorState, dispatch?: (tx: Transaction) => void) => {
    if (!dispatch) return false

    const from = 0
    const to = state.doc.content.size
    const { tr } = state

    const matchedMarks: Array<{
      style: Mark
      from: number
      to: number
      step: number
    }> = []

    let step = 0
    tr.doc.nodesBetween(from, to, (node, pos) => {
      step++
      let marksToRemove: Mark[] | null = null
      const foundMark = markType.isInSet(node.marks)
      if (foundMark && !validator(foundMark.attrs)) {
        marksToRemove = [foundMark]
      }
      if (marksToRemove && marksToRemove.length) {
        const end = Math.min(pos + node.nodeSize, to)

        for (const markToRemove of marksToRemove) {
          const style = markToRemove
          let found

          for (const matchedMark of matchedMarks) {
            if (matchedMark.step === step - 1 && style.eq(matchedMark.style)) {
              found = matchedMark
            }
          }

          if (found) {
            found.to = end
            found.step = step
          } else {
            matchedMarks.push({
              style,
              from: Math.max(pos, from),
              to: end,
              step,
            })
          }
        }
      }
    })
    matchedMarks.forEach(m =>
      tr.step(new RemoveMarkStep(m.from, m.to, m.style))
    )
    dispatch(tr)
    return true
  }
}
