import React, { useEffect, useRef, useState } from "react"
import "./SmartEditor.css"
import { SmartEditorProps } from "./SmartEditor.types"

type TagType = "tag" | "link" | undefined

const SmartEditor: React.FC<SmartEditorProps> = (props: SmartEditorProps) => {
  const [value, setValue] = useState("")
  const ref = useRef<HTMLDivElement>(null)

  const parse = (value: string): Node[] => {
    const elements = value.split("")
    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i]
      let tagType: TagType
      switch (elem) {
        case "[#":
          tagType = "tag"
          break
        case "[[":
          tagType = "link"
          break
        default:
          tagType = undefined
          break
      }
    }
    return []
  }

  useEffect(() => {
    if (!ref.current) return
    ref.current.append(...parse(value))
  }, [value])

  return (
    <div className='smart-editor'>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          props.onChange(e.target.value)
        }}
      />
      <div ref={ref} className={`container ${props.theme}`}></div>
    </div>
  )
}

export default SmartEditor
