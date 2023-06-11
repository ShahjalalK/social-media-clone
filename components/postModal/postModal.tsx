import { usePostModalState } from '@/recoil/usePostModalAtom'
import { Modal } from 'flowbite-react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import Content from './content'
import Image from 'next/image'
import SubmitPost from './submitPost'
import Media from './media'

type Props = {}

const PostModal = (props: Props) => {
    const [postModal, setPostModal] = useRecoilState(usePostModalState)
  const modalHandler = () => {
    setPostModal((prev) => ({
        ...prev,
        open : false
    }))
  }
    return (
       
    <Modal show={postModal.open} onClose={modalHandler}>
      <Modal.Header>
        <div className="flex items-center space-x-2">
            <Image src="/images.png" alt="pro" width={50} height={50} className="w-14 h-14 rounded-full object-cover border" />
            <div>
                <h1 className="capitalize text-xl font-medium">shahjalal Khan</h1>
                <p className="capitalize text-sm text-gray-400">Post to anyone</p>
            </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        {postModal.view === "content" && <Content />}
        {postModal.view === "media" && <Media />}
      </Modal.Body>
      <Modal.Footer>
        <SubmitPost />
      </Modal.Footer>
      
    </Modal>
  )
}

export default PostModal