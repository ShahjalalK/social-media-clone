import { PostData } from '@/recoil/postAtom'
import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {}

const Content = (props: Props) => {
    const [postText, setPostText] = useRecoilState(PostData)
    console.log(postText)
  return (
    <div className="flex flex-col space-y-5">
        <textarea onChange={(e) => {
            setPostText((prev) => ({
                ...prev,
                content : e.target.value
            }))
        }} value={postText.content as string} placeholder="Whtat do you want to talk about" name="" id="" rows={10} className="border-none focus:outline-none rounded-lg ring-0 text-xl"></textarea>
    </div>
  )
}

export default Content