import LeftSide from '@/components/profilePage/leftSide'
import RightSide from '@/components/profilePage/rightSide'


type Props = {
  
}

const ProfileId = ({}: Props) => { 
  
  
  return (
    <div className="max-w-5xl mx-auto py-5">
        <div className="grid grid-cols-3 items-start gap-5">
            <LeftSide  />
            <RightSide />
        </div>
    </div>
  )
}

export default ProfileId




